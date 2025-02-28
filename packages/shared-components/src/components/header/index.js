import React, { useState } from 'react';
import Link from 'gatsby-link';
import { Dropdown } from '../icon';
import Headroom from 'react-headroom';
import { CallToAction } from '../calltoaction';
import { Breadcrumb } from '../breadcrumb';
import { Navigation } from '../navigation';
import { window } from 'browser-monads';

export const Header = ({
  categoryPages,
  companyPages,
  servicePages,
  logo,
  white,
  headerCtaText,
  headerCtaLink,
  whiteIcons,
  navyHeader,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };

  const crumbs = window.location.pathname.split('/');
  crumbs.shift();

  return (
    <>
      <Navigation
        open={open}
        toggleClose={toggleClose}
        companyPages={companyPages}
        servicePages={servicePages}
        white={white}
        categoryPages={categoryPages}
        logo={logo}
      />
      <div
        className={`${
          navyHeader ? 'bg-navy' : 'bg-theme-bg'
        } hidden sm:block sm:pt-7 py-5 px-10 -mb-2px`}
      >
        <div className="max-w-1200 mx-auto relative z-50 h-8">
          <div className="flex justify-between sm:mb-7">
            <div className="flex relative z-50">
              <button
                type="button"
                aria-label="Dropdown"
                className="mr-5 cursor-pointer"
                onClick={handleClick}
              >
                <Dropdown white={whiteIcons || navyHeader} />
              </button>
              <span className="transform ">
                <Link to="/">
                  {!whiteIcons && !navyHeader ? logo.Colored() : logo.White()}
                </Link>
              </span>
            </div>
            <div
              className={`${
                !white && 'eight:text-theme-text'
              } flex hidden sm:block relative z-50`}
            >
              {!window.location.href.includes(headerCtaLink) && (
                <Link to={headerCtaLink}>
                  <CallToAction whiteIcons={whiteIcons || navyHeader}>
                    {headerCtaText}
                  </CallToAction>
                </Link>
              )}
            </div>
          </div>
          <span className="sm:block hidden relative z-50">
            <Breadcrumb path={crumbs} white={!whiteIcons} />
          </span>
        </div>
      </div>
    </>
  );
};

export const MobileHeader = ({
  viewport,
  categoryPages,
  servicePages,
  companyPages,
  white,
  logo,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Navigation
        open={open}
        toggleClose={toggleClose}
        servicePages={servicePages}
        companyPages={companyPages}
        categoryPages={categoryPages}
        white={white}
        logo={logo}
      />
      <Headroom style={{ height: '1px' }}>
        <div
          className={`bg-navy block ${
            viewport || 'sm'
          }:hidden py-5 px-6 fivefifty:px-10 `}
        >
          <div className="max-w-1600 mx-auto">
            <div className="flex flex-row-reverse justify-between">
              <button
                type="button"
                aria-label="Dropdown"
                className="cursor-pointer focus:outline-none"
                onClick={handleClick}
              >
                <Dropdown white={white && !open} />
              </button>
              <span className="transform ">
                <Link to="/">{logo.White()}</Link>
              </span>
            </div>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export const BlogHeader = ({
  categoryPages,
  servicePages,
  companyPages,
  white,
  logo,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };
  const crumbs = window.location.pathname.split('/');
  crumbs.shift();
  return (
    <>
      <Navigation
        open={open}
        toggleClose={toggleClose}
        servicePages={servicePages}
        categoryPages={categoryPages}
        companyPages={companyPages}
        white={white}
        logo={logo}
      />
      <div className="bg-navy hidden sm:block sm:pt-7 py-5 px-10">
        <div className="max-w-1600 mx-auto">
          <div className="flex justify-between sm:mb-7 ">
            <div className="flex">
              <button
                type="button"
                aria-label="Dropdown"
                className="mr-5 cursor-pointer"
                onClick={handleClick}
              >
                <Dropdown white />
              </button>
              <span className="transform text-white">
                <Link to="/">{logo.White()}</Link>
              </span>
            </div>
          </div>
          <span className="sm:block hidden">
            <Breadcrumb path={crumbs} />
          </span>
        </div>
      </div>
    </>
  );
};
