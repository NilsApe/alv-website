import React from 'react';
import Layout from '../components/layout';
import { Title, IntroContainer, BlogSection } from 'shared-components';
import { graphql } from 'gatsby';
import { getBlogDataServerSide } from '../hooks/useBlogQueryServerSide';

const Blog = ({ data, serverData }) => {
  const layoutData = {
    ...data.sanitySiteSettings,
    servicePages: data.allSanityServices.nodes,
    companyPages: data.allSanityCompany.nodes,
    categoryPages: data.allSanityCategoryPage.nodes,
    site: data.site,
  };

  const articles = serverData.articles.articles
    .filter((article) => article.publishedAt !== null)
    .map((article) => {
      const date = new Date(article.publishedAt);
      return {
        ...article,
        date,
        publishedAt: date.toLocaleDateString('no-NB'),
      };
    })
    .sort((a, b) => a.date > b.date)
    .reverse();

  const featuredArticle = articles[0];
  articles.shift();

  return (
    <Layout
      whiteIcons
      pageTitle={serverData.articles.pageMetadata.pageTitle}
      pageDescription={serverData.articles.pageMetadata.pageDescription}
      layoutData={layoutData}
    >
      <div className="overflow-hidden">
        <IntroContainer article={featuredArticle}>
          <Title align="text-center twelve:text-left">Blogg</Title>
          <div className="w-full text-center">
            <div className="text-white tracking-wider text-blog font-light mt-8 twelve:w-full eight:w-1/2 w-5/6 mx-auto twelve:mx-0 twelve:text-left">
              Vi vil gjerne dele litt av vår{' '}
              <span className="font-semibold">kunnskap</span>, og gi deg noen av
              våre <span className="font-semibold">tips og tanker</span>
            </div>
          </div>
        </IntroContainer>
        <BlogSection allArticles={articles} />
      </div>
    </Layout>
  );
};

export default Blog;

export async function getServerData() {
  try {
    return {
      props: { articles: await getBlogDataServerSide() },
      status: 200,
    };
  } catch {
    return {
      articles: [],
      status: 500,
    };
  }
}

export const query = graphql`
  {
    sanitySiteSettings(id: { eq: "-0f217bb5-f7f6-5420-b7c6-58db2c12b8c7" }) {
      email
      org
      phone
      address
    }
    allSanityCategoryPage {
      nodes {
        slug {
          current
        }
        heroHeading
      }
    }
    allSanityServices {
      edges {
        node {
          id
          slug {
            current
          }
          parentPage {
            slug {
              current
            }
          }
          heroHeading
        }
      }
    }
    allSanityCompany {
      nodes {
        heroHeading
        slug {
          current
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
