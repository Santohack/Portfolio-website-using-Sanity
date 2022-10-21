import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavBar from "../components/NavBar";
import PortableText from "react-portable-text";
import React from "react";
import Script from "next/script";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import portfolio from "../../../purple-curlew/schemas/portfolio";
import styles from "../styles/Home.module.css";

const Portfolio = ({ portfolio }) => {
  const client = createClient({
    projectId: "d9inkxl7",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);

  return (
    <div>
      <NavBar />
      <div className="mx-auto bg-grey-50" id="blog">
        <div className="mx-auto container ">
          <h4 className="pb-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
            {portfolio.map((item) => {
              return (
                <Link
                  key={item.id.current}
                  href={"/portfolio/" + item.id.current}
                  className="shadow"
                >
                  <div>
                    {" "}
                    <div
                      style={{
                        backgroundImage: `url(${
                          builder.image(item.portImg).url() ||
                          "/assets/img/post-02.png"
                        })`,
                      }}
                      className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                    >
                      <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                      <span className="cursor-pointer absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-purple-500 px-6 py-2 text-center font-body text-sm font-bold uppercase text-purple-500 md:text-base">
                        Read More
                      </span>
                    </div>
                    <div className="bg-white py-6 px-5 xl:py-8">
                      <span className="block font-body text-lg font-semibold text-black">
                        {item.title}
                      </span>
                      <span className="block pt-2 font-body text-grey-20">
                        {item.metaDisc}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

export async function getServerSideProps() {
  const client = createClient({
    projectId: "d9inkxl7",
    dataset: "production",
    useCdn: false,
  });

  const query = '*[_type == "portfolio"]';
  const portfolio = await client.fetch(query);
  return {
    props: {
      portfolio,
    },
  };
}
