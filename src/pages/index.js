import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilepic from "../../public/images/profile/home-girl-pic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arveen Junejo</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark  w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilepic}
                alt="Arveen Junejo"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Creativity and Designing."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled Graphic Designer, I am dedicated to turning ideas
                into innovative Reality. I specialize in captivating designs
                that leave a lasting impression. From logos to web graphics, my
                portfolio showcases visually stunning creations that engage and
                drive results. Let's take your brand's visual identity to the
                next level—explore my unique design style and process. Connect
                with me to make magic happen!
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/"
                  target={"_blank"}
                  download={true}
                  className="flex items-center bg-dark text-light text-lg font-semibold p-2.5 px-6 rounded-lg hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark">
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:abcd@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="Blub" />
        </div>
      </main>
    </>
  );
}
