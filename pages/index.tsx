import type { NextPage } from "next";
import Head from "next/head";
import { useWeb3 } from "@3rdweb/hooks";
import Connect from "../components/Connect";
import Mint from "../components/Mint";

const Home: NextPage = () => {
  const { address } = useWeb3();

  return (
    <div className="p-5">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {address ? <Mint /> : <Connect />}
    </div>
  );
};

export default Home;
