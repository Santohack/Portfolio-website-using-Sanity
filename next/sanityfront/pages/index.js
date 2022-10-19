import Head from "next/head";
import Image from "next/image";
import PortableText from "react-portable-text";
import blog from "../../../purple-curlew/schemas/blog";
import { createClient } from "next-sanity";
import styles from "../styles/Home.module.css";

export default function Home({ blogs }) {
  return (
    <div className="home text-red-400">
      <PortableText
        // Pass in block content straight from Sanity.io
        content={blogs[0].content}
        projectId="d9inkxl7"
        dataset="production"
        // Optionally override marks, decorators, blocks, etc. in a flat
        // structure without doing any gymnastics
        serializers={{
          h1: (props) => <h1 style={{ color: "red" }} {...props} />,
          li: ({ children }) => (
            <li className="special-list-item">{children}</li>
          ),
        }}
      />
    </div>
  );
}

export async function getServerSideProps() {
  const client = createClient({
    projectId: "d9inkxl7",
    dataset: "production",
    useCdn: false,
  });

  const query = '*[_type == "blog"]';
  const blogs = await client.fetch(query);
  return {
    props: {
      blogs,
    },
  };
}
