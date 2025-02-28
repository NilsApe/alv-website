FROM nginx:1.20.2-alpine as dev

# Install packages and dependencies
RUN apk update && apk add --no-cache supervisor python3 make gcc g++ && apk add --update nodejs yarn varnish

# Build
WORKDIR /app
RUN mkdir -p /app/packages/website
RUN mkdir -p /app/.yarn/releases

COPY package.json yarn.lock .yarnrc.yml /app/
COPY .yarn/releases /app/.yarn/releases/
COPY .yarn/plugins /app/.yarn/plugins/
COPY packages/website /app/packages/website/
COPY packages/shared-components /app/packages/shared-components/
RUN yarn
RUN yarn workspace website run disable-telemetry

# The build step shouldn't be cached since it's non determenistic
# As such we add the next line to try and do a cache bust
# Recommended by: https://stackoverflow.com/a/58801213/359825
#ADD "https://www.random.org/cgi-bin/randbyte?nbytes=10&format=h" skipcache

# Ensure that proper .env files exists before building
RUN test -f "/app/packages/website/.env.production"
RUN yarn workspace website run build

# Configuring NginX
COPY website.nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

# Configure varnish
COPY default.vcl /etc/varnish/

# Configure supervisor
COPY supervisord.conf /app/supervisord.conf
CMD ["supervisord","-c","/app/supervisord.conf"]

