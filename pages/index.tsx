import type { NextPage } from "next";
import Head from "next/head";
import Masthead from "../components/masthead";
import AboutUs from "../components/aboutus";
import Skills from "../components/skills";
import Works from "../components/works";
import Footer from "../components/footer";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>収支管理 For STEPN</title>
        <p>amplify</p>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
};

export default Home;
