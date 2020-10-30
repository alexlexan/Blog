import gql from "graphql-tag";
import { initializeApollo } from "../utils/apolloClient";

const BLOG_NAME_ID = "6apSvPpMcX6F6792e8SdHZ";
const AVATAR_ID = "2RuqiW3oQsrRPHolvJ6L8g";

export const USER_FRAGMENT = gql`
  fragment userBlog on UserFragment {
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`;

export const BLOG_ARCTICLE_PATH_QUERY = gql`
  query {
    blogPostCollection {
      items {
        sys {
          id
        }
      }
    }
  }
`;

export const ONE_POST_QUERY = gql`
  query blogPost($id: String!) {
    blogPost(id: $id) {
      title
      publishDate
      readingTime
      article {
        json
        links {
          assets {
            block {
              sys {
                id
              }
              fileName
              url
            }
          }
        }
      }
      listUrl {
        json
      }
    }

    blogName(id: "6apSvPpMcX6F6792e8SdHZ") {
      title
    }

    avatarUrl(id: "2RuqiW3oQsrRPHolvJ6L8g") {
      url {
        url
      }
      description
    }
  }
`;

export const CONTENT_HOME_PAGE_QUERY = gql`
  query {
    blogName(id: "6apSvPpMcX6F6792e8SdHZ") {
      title
    }

    blogPostCollection {
      items {
        description
        title
        publishDate
        readingTime
        sys {
          id
        }
      }
    }

    avatarUrl(id: "2RuqiW3oQsrRPHolvJ6L8g") {
      url {
        url
      }
      description
    }
  }
`;

export async function getContentForHomePage(query, variables) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query({
    query,
    variables,
  });
  return data;
}
