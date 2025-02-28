// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import employee from './employee';
import employeeTag from './employeeTag';
import article from './article';
import imageTextFlip from './imageTextFlip';
import guestAuthor from './guestAuthor';
import articleTag from './articleTag';
import companyPage from './companyPage';
import redirects from './redirects';
import landingPage from './landingPage';
import aboutPage from './aboutPage';
import servicesIntro from './servicesIntro';
import heroCta from './heroCta';
import employeePage from './employeePage';
import linkableBlockContent from './linkableBlockContent';
import careerPage from './careerPage';
import contactPage from './contactPage';
import ourServicesPage from './ourServicesPage';
import openPositionPage from './openPositionPage';
import socials from './socials';
import playlists from './playlists';
import playlist from './playlist';
import videoseries from './videoseries';
import externalProfiles from './externalProfiles';
import videoseriesPage from './videoseriesPage';
import imageAndText from './imageAndText';
import blogPage from './blogPage';
import categoryPage from './categoryPage';
import testimonial from './testimonial';
import servicePage from './servicePage';
import serviceItem from './serviceItem';
import siteSettings from './siteSettings';
import reasonsCard from './reasonsCard';
import reasonsCarousel from './reasonsCarousel';
import linkableHeading from './linkableHeading';
import cta from './cta';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    landingPage,
    videoseriesPage,
    videoseries,
    servicePage,
    companyPage,
    categoryPage,
    openPositionPage,
    article,
    employeePage,
    blogPage,
    contactPage,
    aboutPage,
    careerPage,
    ourServicesPage,
    articleTag,
    employee,
    employeeTag,
    linkableBlockContent,
    linkableHeading,
    testimonial,
    externalProfiles,
    redirects,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    reasonsCarousel,
    blockContent,
    imageAndText,
    imageTextFlip,
    guestAuthor,
    servicesIntro,
    reasonsCard,
    serviceItem,
    playlists,
    playlist,
    socials,
    heroCta,
    cta,
  ]),
});
