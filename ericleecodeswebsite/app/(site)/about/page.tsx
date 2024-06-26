import Image from "next/image";
import Link from "next/link";

export default async function About() {
  return (
    <div className="text-lg mt-14 text-lighter bg-darker pb-32">
      <h1 className="flex justify-center text-4xl font-bold py-10 ">
        About Me
      </h1>
      <div className="mx-10 md:mx-48">
        <p>
          I started my coding journey in 2021 during the global pandemic. I
          loved creating things and that&apos;s why I got my chemistry degree.
          However, most of the biochemical facilities were closed or were
          focused on specialized research during that time. As a result, I
          focused on a way to combine my passion for creation right at home.
          That&apos;s when I decided to write &quot;Hello World&quot; in C# for
          the first time and saw my code come to life!
        </p>
        <p className="mt-4">
          At first, I chose C# because of how versatile it was. I saw that
          Microsoft was expanding the .NET ecosystem for website creation and I
          also saw that Unity uses C# for game development as well. I thought I
          could kill two birds with one stone and decided to go fully for it by
          signing up for IAmTimCorey courses and getting several certificates
          from it!{" "}
        </p>
        <p className="mt-4"> (Check them out below!): </p>
        <div className="flex flex-col gap-4 my-4 text-base">
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="flex flex-col w-[40%] h-[20%] md:w-[25%]">
              <Image
                src="/ASP_NET_Core.jpg"
                alt="My ASP.NET Core certificate"
                width={750}
                height={300}
                className="object-contain rounded-lg border border-gray-500 "
              />
              <div className="flex justify-center mt-2">
                <p>ASP.NET Core</p>
              </div>
            </div>
            <div className="flex flex-col w-[40%] h-[20%] md:w-[25%]">
              <Image
                src="/BlazorServer.jpg"
                alt="My ASP.NET Core certificate"
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500 "
              />
              <div className="flex justify-center mt-2">
                <p>Blazor Server</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 justify-center items-center">
            <div className="flex flex-col w-[40%] h-[20%] md:w-[25%]">
              <Image
                src="/BlazorWASM.jpg"
                alt="My ASP.NET Core certificate"
                width={750}
                height={300}
                className="object-contain rounded-lg border border-gray-500 "
              />
              <div className="flex justify-center mt-2">
                <p>Blazor Web Assembly</p>
              </div>
            </div>
            <div className="flex flex-col w-[40%] h-[20%] md:w-[25%]">
              <Image
                src="/OOP.jpg"
                alt="My ASP.NET Core certificate"
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500 "
              />
              <div className="flex justify-center mt-2">
                <p>Object Oriented Programming</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          After finishing up a couple certificates, I decided to learn Unity and
          join the{" "}
          <span>
            <a
              className="underline text-accent"
              href="https://itch.io/jam/gmtk-jam-2022"
            >
              2022 Game Maker&apos;s Tookit: Roll of the Dice
            </a>{" "}
          </span>
          game jam to test out my skills. This was the first time I joined a
          team and practiced using git on a collaborative project. We teamed up
          with two artists and one other head developer. With the help of two
          artists and one other head developer, we had a wonderful time with the
          following project:
        </p>
        <p className="mt-4">(Project): </p>
        <div className="flex justify-center">
          <a
            href="https://jasonxxr.itch.io/ghostly-ruins"
            className="flex flex-col underline text-accent "
          >
            <Image
              src="/GhostlyRuins.png"
              alt="Picture of Ghostly Ruins game from 2022 GMTK Game Jam"
              width={350}
              height={300}
              className="rounded-xl"
            />
            <p className="flex justify-center mt-2">Ghostly Ruins</p>
          </a>
        </div>
        <p className="mt-4">
          Shortly after, I became obsessed with making games and made a few that
          you can play here below:
        </p>

        <div className="flex flex-col my-4">
          <div>
            <a
              href="https://sharemygame.com/@EricLee/laserdefenderdemo"
              className="underline text-accent"
            >
              Laser Defender
            </a>
          </div>
          <div>
            <a
              href="https://sharemygame.com/@EricLee/spaceship-shooter"
              className="underline text-accent"
            >
              Spaceship Shooter
            </a>
          </div>
          <div>
            <a
              href="https://sharemygame.com/@EricLee/rocket-game-from-unity-course"
              className="underline text-accent"
            >
              Rocket Game
            </a>
          </div>
        </div>

        <p>
          Soon after, God brought me to Canada where I got married to my
          long-distance girlfriend and happily settled in Surrey, BC. Here, I
          decided to focus my skills in web development and joined Lighthouse
          Labs where I successfully got a diploma for Web Development!:
        </p>
        <div className="flex flex-col justify-center items-center mt-4 ">
          <Image
            src="/LHL_Diploma.jpg"
            alt="My Lighthouse Labs Diploma"
            width={730}
            height={300}
            className="rounded-xl w-[80%] border-2 border-gray-700 md:w-[40%]"
          />

          <p className="my-4 text-base">My Lighthouse Labs Diploma</p>
        </div>
        <p>
          I really love what I do and learn something new every day! Feel free
          to shoot me a message about anything - even just to say hello!
        </p>
        <div className="flex justify-center items-center my-4">
          <Link href="/contact">
            <button className="flex justify-center bg-gray-100 rounded-lg text-darker font-bold py-3 px-4 whitespace-nowrap hover:bg-accent hover:text-pink-100 transition w-[125px]">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
