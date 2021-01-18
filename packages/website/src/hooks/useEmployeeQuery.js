import { useStaticQuery, graphql } from 'gatsby';
export const useEmployeeQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityEmployee {
          edges {
            node {
              tags {
                tag
              }
              firstname
              lastname
              id
              title
              experience
              videoLink
              pdfLink
              _rawBio
              image {
                asset {
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
        fallbackImg: file(name: { eq: "fallback" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allSanityEmployeeTag {
          edges {
            node {
              tag
              id
            }
          }
        }
      }
    `
  );
  return data;
};
