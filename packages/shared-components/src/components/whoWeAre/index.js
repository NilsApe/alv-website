import React from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
import Fade from 'react-reveal/Fade';
import { BlockContent } from '../blockContent';

export const WhoWeAre = ({
  title,
  children,
  blocks,
  whiteText,
  darkText,
  buttonText,
  buttonLink,
  config,
}) => {
  return (
    <>
      <div
        className="twelve:grid twelve:mx-auto tracking-wider gap-x-10 twleve:mx-auto text-theme-text"
        style={{ gridTemplateColumns: '1fr 1fr' }}
      >
        <div className="twelve:flex justify-end w-full">
          <Fade>
            <div>
              <h4 className="uppercase tracking-wider font-semibold mt-2 text-footer sm:text-about">
                {title}
              </h4>
              <div className="w-10 h-2px bg-theme-accent mt-2 mb-4" />
            </div>
          </Fade>
        </div>
        <Fade>
          <div className="max-w-seven text-theme-footer sm:text-about">
            <BlockContent
              whiteText={whiteText}
              darkText={darkText}
              blocks={blocks}
              config={config}
            />
            {children}
            <div className="twelve:block hidden text-theme-text">
              <Link to={buttonLink || '/om-oss'}>
                <Button.CtaArrow>
                  <span>{buttonText || 'Les Mer'}</span>
                </Button.CtaArrow>
              </Link>
            </div>
          </div>
        </Fade>
        <div className="twelve:hidden sm:block flex justify-between text-theme-text">
          <div />
          <Link to={buttonLink || '/om-oss'}>
            <Button.Arrow>
              <span>{buttonText || 'Les Mer'}</span>
            </Button.Arrow>
          </Link>
        </div>
      </div>
    </>
  );
};
