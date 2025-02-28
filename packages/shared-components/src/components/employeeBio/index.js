import React, { useMemo, useRef, useEffect } from 'react';
import { Cv, Cross } from '../icon';
import Link from 'gatsby-link';
import { isIOS, isSafari } from 'react-device-detect';
import fallback from './bioVideoFallback.png';
import { BlockContent } from '../blockContent';
import * as styles from './EmployeeBio.module.css';

export const EmployeeBio = ({
  handleCloseClick,
  centerBioText = true,
  firstname,
  lastname,
  slug,
  ytVideoId,
  video,
  cv,
  title,
  _rawBio,
  id,
  config,
}) => {
  const bioRefContainer = useRef(null);

  // Scroll to bio section on card click. Scroll destination depends on browser innerWidth.
  useEffect(() => {
    bioRefContainer.current.offsetTop !== 0 &&
      window.scrollTo({
        top:
          bioRefContainer.current.offsetTop -
          (window.innerWidth > 1024
            ? window.innerWidth > 480
              ? 430
              : 100
            : 0),
      });
  }, []);

  return (
    <div ref={bioRefContainer}>
      <section
        className="bg-darkblue text-white lg:py-18 pb-15 pt-20 xs:-mx-6 sm:mt-8 my-8 sm:px-5 xs:mt-8 -mt-4"
        id={id}
      >
        <div className="max-w-1200 mx-auto sm:px-5">
          <div className="w-full flex flex-end justify-between">
            <div />
            <div>
              <button
                type="button"
                className="transform block focus:outline-none sm:-translate-y-12 sm:-translate-x-8 -translate-y-15  -translate-x-12 scale-60 cursor-pointer absolute"
                onClick={handleCloseClick}
                aria-label="Close"
              >
                <Cross />
              </button>
            </div>
          </div>
          <div className={`${video && 'flex'} lg:flex-row flex-col sm:px-0`}>
            <div className="mx-auto flex-1 lg:pr-15">
              <div
                className={`flex-1 px-12 sm:px-0 sm:hidden ${
                  centerBioText && 'text-center'
                }`}
              >
                {/* ---- Underneath: Visible on Mobile only ---- */}
                <h4 className="text-3xl leading-none font-extralight mb-4 uppercase tracking-wider">
                  <span className="font-bold block">{firstname}</span>
                  {lastname}
                </h4>
                <h5 className="text-lg font-extralight tracking-wider mb-8">
                  {title}
                </h5>
              </div>
              {/* ---- Above: Visible on Mobile only ---- */}
              {video && (
                <>
                  <div className="sm:h-80 sm:w-140 mb-8 sm:mb-5">
                    <ValidatedVideo
                      video={video}
                      ytVideoId={ytVideoId}
                      slug={slug}
                    />
                  </div>

                  {video && (
                    <div className="flex justify-between text-base tracking-wider sm:px-0 px-6 mb-5 lg:mb-0">
                      {cv && (
                        <a href={cv.asset.url} target="_blank" rel="noreferrer">
                          <div className="flex">
                            <span className="mr-3">
                              <Cv />
                            </span>
                            <span className="transform -translate-y-2">
                              SE CV
                            </span>
                          </div>
                        </a>
                      )}
                      <Link to="/kontakt-oss">
                        <div className="flex cursor-pointer">
                          <div className="w-8 h-2px bg-theme-accent mr-4 transform translate-y-1" />
                          <span className="transform -translate-y-2">
                            KONTAKT OSS
                          </span>
                        </div>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
            <p
              className={`tracking-wider font-extralight px-6 sm:px-10 sm:hidden ${
                !video && styles.centerText
              }`}
            >
              {_rawBio && (
                <BlockContent noStyle blocks={_rawBio} config={config} />
              )}
            </p>
            <div
              className={`flex-1 px-5 sm:px-0 sm:block hidden sm:text-center lg:text-left ${
                !video && centerBioText && styles.centerText
              }`}
            >
              <h4
                className={`text-4xl leading-none font-extralight mb-4 uppercase tracking-wider`}
              >
                <span className={video && 'font-bold block'}>
                  {firstname} {!video && centerBioText && ' '}
                </span>
                {lastname}
              </h4>
              <h5 className="text-lg font-extralight tracking-wider mb-8">
                {title}
              </h5>
              <div className="tracking-wider lg:px-0 sm:px-10">
                {_rawBio && (
                  <BlockContent noStyle blocks={_rawBio} config={config} />
                )}
              </div>
            </div>
            {cv && !video && (
              <a href={cv.asset.url} target="_blank" rel="noreferrer">
                <div className="flex justify-center mt-10">
                  <span className="mr-3">
                    <Cv />
                  </span>
                  <span className="transform -translate-y-2">SE CV</span>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// Source video file types based on browser type
const ValidatedVideo = ({ video, ytVideoId, slug }) => {
  const webM = useMemo(() => {
    return video ? video.asset.url : false;
  }, [video]);
  const youtube = useMemo(() => {
    return ytVideoId || false;
  }, [ytVideoId]);

  const supportWebM = !isIOS && !isSafari;
  return supportWebM && webM ? (
    <Webm src={webM} />
  ) : youtube ? (
    <Youtube ytVideoId={ytVideoId} title={slug} />
  ) : (
    <Fallback src={fallback} alt={slug} />
  );
};

const Webm = ({ src }) => (
  <video
    key={src}
    autoPlay
    controls="true"
    className="h-60vw sm:h-80 w-full sm:w-140 seven:w-140 mr-0 focus:outline-none"
    src={src}
  />
);

const Youtube = ({ slug, ytVideoId }) => (
  <iframe
    className="h-60vw sm:h-80 w-screen sm:w-140 seven:w-140 mr-0"
    title={slug}
    src={`https://www.youtube.com/embed/${ytVideoId}
      `}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; fullscreen"
    allowFullScreen
  />
);

const Fallback = ({ src, slug }) => (
  <img
    className="h-60vw sm:h-80 w-screen sm:w-140 seven:w-140 mr-0"
    alt={slug}
    src={src}
  />
);
