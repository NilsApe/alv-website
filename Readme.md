# Alv websites

This is the code repo for development of the new websites for Alv.no and Alvb.no

## Development setup

Install Git, Node and Yarn, and whatever code editor you prefer.

As of writing this readme the newest version of node and yarn is as follows:

```
$ node --version
 v16.17.0
$ yarn --version
 3.2.3
```

Once ready to develop the website run:

```
yarn
yarn workspace website run dev
```

### Workaround for Apple m1

``` shell
brew install vips
yarn rebuild sharp
yarn set resolution sharp@npm:0.28.2
```

## Docker

For production we use Docker, you can build and test the Docker images locally.
You can either build and start all services by using docker-compose:


```
make build-website build-cms build-mail-api
docker-compose up -d
```

And then browse it using a web browser at `localhost:8080`, `website.localhost/` and `cms.localhost/`.

Or build and start individual service as following:


```
docker build -f website.Dockerfile -t website .
docker run -it -p 8080:80 website
```

And then browse it using a web browser at `localhost:8080`.

## Deploy to k8s locally

```
az login

./run deploy <test | prod> <package> <build-id>
```

## Packages

Package                       | Description
-------                       | -----------
[website](./packages/website) | Gatsby-powered website: Alv.no
[website-alvb](./packages/website-alvb) | Gatsby-powered website: AlvB.no
[cms](./packages/cms)         | Sanity CMS: Alv.no
[cms-alvb](./packages/cms-alvb)    | Sanity CMS: AlvB.no
[mail-api](./packages/mail-api) | Mail API backend for contact form
[shared-components](./packages/shared-components) | Component library to share components between different gatsby sites
