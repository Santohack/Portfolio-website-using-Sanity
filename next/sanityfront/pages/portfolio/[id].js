import Head from "next/head";
import PortableText from "react-portable-text";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/router";

const Portfolio = ({ portfolio, profile, author }) => {
  const client = createClient({
    projectId: "d9inkxl7",
    dataset: "production",
    useCdn: false,
  });
  const builder = imageUrlBuilder(client);
  const router = useRouter();
  const { slug } = router.query;
  console.log(portfolio);
  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>{portfolio.title}|DWC </title>

        <meta property="og:title" content="DWC | DevWebCity" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//post" />

        <meta property="og:url" content="//post" />

        <meta
          name="description"
          content="DWC | DevWebCity|SFCC |Node.js | HTML | JavaScript"
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.ico" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css"
        />

        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js"></script>
      </Head>
      <div
        x-data="{
    triggerNavItem(id) {
        $scroll(id)
    },
    triggerMobileNavItem(id) {
        mobileMenu = false;
        this.triggerNavItem(id)
    }
}"
      >
        <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between">
            <div>
              <a href="/">
                <h2 class="text-white text-3xl logoSize font-bold">???????????</h2>
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <a
                    href="/#about"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    About
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <a
                    href="/#services"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Services
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <a
                    href="/#portfolio"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Portfolio
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <a
                    href="/#clients"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Clients
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <a
                    href="/#work"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Work
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <a
                    href="/#statistics"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Statistics
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <a
                    href="/#blog"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Blog
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>

                <li className="group pl-6">
                  <a
                    href="/#contact"
                    className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white"
                  >
                    Contact
                  </a>

                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
                </li>
              </ul>
            </div>
            <div className="block lg:hidden">
              <button>
                <i className="bx bx-menu text-4xl text-white"></i>
              </button>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden"
          className="{ 'opacity-100 pointer-events-auto': mobileMenu }"
        >
          <div className=" hidden absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button className="absolute top-0 right-0 mt-4 mr-4">
              <img
                src="/assets/img/icon-close.svg"
                className="h-10 w-auto"
                alt=""
              />
            </button>

            <ul className="mt-8 flex flex-col">
              <li className="py-2">
                <a
                  href="/#about"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  About
                </a>
              </li>

              <li className="py-2">
                <a
                  href="/#services"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Services
                </a>
              </li>

              <li className="py-2">
                <a
                  href="/#portfolio"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Portfolio
                </a>
              </li>

              <li className="py-2">
                <a
                  href="/#clients"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Clients
                </a>
              </li>

              <li className="py-2">
                <a
                  href="/#work"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Work
                </a>
              </li>

              <li className="py-2">
                <a
                  href="/#statistics"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Statistics
                </a>
              </li>

              <li className="py-2">
                <a
                  href="/#blog"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Blog
                </a>
              </li>

              <li className="py-2">
                <a
                  href="/#contact"
                  className="pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="container py-6 md:py-10">
            <div className="mx-auto max-w-4xl">
              <div className="">
                <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
                  {portfolio.title}
                </h1>
                <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img
                      src={builder.image(author.img).url()}
                      className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image"
                    />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">
                      By {author.title}
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      {portfolio.created}
                    </span>
                  </div>
                </div>
              </div>
              <div className="prose max-w-none pt-8">
                <div className="language-plaintext highlighter-rouge">
                  <PortableText
                    // Pass in block content straight from Sanity.io
                    content={portfolio.content}
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

                  <div className="highlight"></div>
                </div>
              </div>

              <div className="mt-10 flex justify-between border-t border-lila py-12">
                <a href="/" className="flex items-center">
                  <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                  <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                    Previous Post
                  </span>
                </a>
                <a href="/" className="flex items-center">
                  <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                    Next Post
                  </span>
                  <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                </a>
              </div>
              <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <img
                    src={builder.image(author.img).width(200).height(160).url()}
                    className="rounded-full shadow"
                    alt="author image"
                  />
                </div>
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    {author.title}
                  </h3>
                  <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                    {author.about}
                  </p>
                  <div className="flex items-center justify-center pt-5 md:justify-start">
                    <a href={profile.fbLink}>
                      <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={profile.twLink} className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={profile.drLink} className="pl-4">
                      <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={profile.lkLink} className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href={profile.igLink} className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary">
          <div className="container flex flex-col justify-between py-6 sm:flex-row">
            <p className="text-center font-body text-white md:text-left">
              ?? Copyright 2022. All right reserved, ???????????.
            </p>
            <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
              <a href={profile.fbLink}>
                <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href={profile.twLink} className="pl-4">
                <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href={profile.drLink} className="pl-4">
                <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href={profile.lkLink} className="pl-4">
                <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
              </a>
              <a href={profile.igLink} className="pl-4">
                <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

export const getServerSideProps = async function (context) {
  const { id } = context.query;
  console.log(id);
  const client = createClient({
    projectId: "d9inkxl7",
    dataset: "production",
    useCdn: false,
  });

  const query = `*[_type == "portfolio" && id.current == '${id}'][0]`;
  const portfolio = await client.fetch(query);
  const profileQuery = '*[_type == "profile"][0]';
  const profile = await client.fetch(profileQuery);
  const authorQuery = `*[_type == 'author'][1]`;
  const author = await client.fetch(authorQuery);

  return {
    props: {
      portfolio,
      profile,
      author,
    },
  };
};
