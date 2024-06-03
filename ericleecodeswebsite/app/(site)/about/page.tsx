export default async function About() {
  return (
    <div className="text-lg w-screen h-[100%] mt-14 text-lighter bg-darker">
      <div className="flex justify-center text-4xl font-bold py-10 ">
        About Me
      </div>
      <div className="mx-10">
        <p>
          <span> </span>I started my coding journey during the global pandemic
          in the year 2020. I loved creating things and that's why I got my
          chemistry degree, however, most of the biochemical facilities were
          closed or were focused on specialized research during that time. I was
          wondering how I could combine my passion for creation and do it at the
          comfort of my home. That's when I decided to write my first code in
          C#. I wrote "Hello World" for the first time and saw my code come to
          life!
        </p>

        <p>
          I wasn't too sure what language to start off with but I chose C#
          because of how versatile it was. I saw that Microsoft was expanding
          the .NET ecosystem for website creation and I also saw that Unity uses
          C# for game development as well. I thought I could kill two birds with
          one stone and decided to go fully for it by signing up for IAmTimCorey
          courses and getting several certificates from it! <br /> (Check them
          out below!):
        </p>
        {/* Tim Corey certs */}
        <p>
          After finishing up a couple certificates, I decided to learn Unity and
          join the{" "}
          <span>
            <a
              className="underline text-accent"
              href="https://jasonxxr.itch.io/ghostly-ruins"
            >
              2022 Game Maker's Tookit: Roll of the Dice
            </a>{" "}
          </span>
          game jam to test out my skills. This was the first time I could join a
          team and practice using git as well as learning how to not break a
          collaborative project. I had a lot of fun with this and realized I had
          a lot more to learn!
        </p>
        <p>
          Shortly after, I became obsessed with making games and made a few mini
          projects that you can play here below:
        </p>
        {/* Link to games */}

        <p>
          Right after making a couple of games, God brought me to Canada where I
          got married to my long-distance girlfriend and happily settled in
          Surrey, BC. Here, I decided to focus my skills in web development and
          joined Lighthouse Labs where I successfully got a diploma for Web
          Development!:
        </p>
        {/* Picture of diploma */}

        <p>
          I really love what I do and I'm having fun every day learning
          something new! Feel free to shoot me a message about anything - even
          just to say hi!
        </p>
      </div>
    </div>
  );
}
