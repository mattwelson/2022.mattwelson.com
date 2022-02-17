import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

// markup
const IndexPage = ({ data }) => {
  const { nodes: posts } = data.allSanityPost;
  return (
    <Layout>
      <div className="container mx-auto">
        <title>Home Page</title>
        <h2 className="text-3xl font-bold underline">Text</h2>
        {posts.map(({ title, category, _createdAt: date }) => (
          <div className="grid p-2 my-5 border-2 border-neutral-600 rounded shadow hover:shadow-lg">
            <h2 className="text-2xl">{title}</h2>
            <h3 className={`text-amber-500`}>{category.title}</h3>
            <span className="text-neutral-500">{date}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    allSanityPost {
      nodes {
        title
        category {
          title
          colour {
            value
            title
          }
        }
        _createdAt(formatString: "DD/MM/yyyy")
      }
      totalCount
    }
  }
`;

export default IndexPage;
