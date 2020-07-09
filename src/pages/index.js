import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import HeroHeader from "../components/heroHeader";

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />);
  console.log(Posts);
  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />

        {/* {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />} */}
      </Helmet>
      <HeroHeader />
      <div>
        <h3 className="headings"> CAREER OBJECTIVE </h3>{" "}
        <p className="primary-content">
          {" "}
          To work on a challenging job profile which provides an opportunity to
          enhance my technical skills and knowledge, this could provide me an
          insight into new aspects so that it would be helpful for my career.
        </p>
        <h3 className="headings"> HOBBIES</h3>{" "}
        <p className="primary-content">
          I love to write codes but when I'm free I like to play games and read.{" "}
        </p>
      </div>

      <h2>Projects &darr;</h2>
      <div className="grids">{Posts}</div>

      <h2>Blog Posts &darr;</h2>
      <div className="grids">{Posts}</div>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`;
