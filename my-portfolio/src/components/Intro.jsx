import React from "react";
import Typewriter from "typewriter-effect";
import me from "../assets/me.jpg";

const Intro = () => {
  return (
    <div className=" ">
      <img
        src={me}
        alt="logo"
        className="w-[25%] rounded-[1.5rem] border border-white"
      />

      <h3 className="font-extrabold text-4xl text-white my-[2rem]">
        Hi there! I'm{" "}
        <span className="text-[#3be1ac]">
          <Typewriter
            options={{
              strings: [
                "ABHAY RAJ",
                "A BACKEND DEVELOPER",
                "A COMPUTER SCIENCE ENGINEER",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h3>

      <div className="flex flex-col gap-4 mb-7">
        <p className="text-white">
          My passion lies in backend development, where I thrive on building the
          robust systems that power user experiences. I enjoy the challenge of
          crafting clean, efficient code that forms the foundation of
          interactive applications.
        </p>
        <p className="text-white">
          I bring a strong problem-solving mindset to every project I tackle. I
          relish the opportunity to delve into complex issues, analyze them
          systematically, and develop elegant solutions.
        </p>
        <p className="text-white">
          Currently immersed in the captivating world of Computer Science{" "}
          <span className="text-[#3be1ac]">Engineering</span> as a college
          student. My educational roots trace back to{" "}
          <span className="text-[#3be1ac]">Gramin Intermediate Mahavidlaya</span>, where I
          laid the foundation for my academic journey.
        </p>
        <p className="text-white">
          Proficient in <span className="text-[#3be1ac]">Backend development</span>,
          I've honed my skills in crafting dynamic and user-friendly websites
          that seamlessly blend form and function. Beyond the code, I immerse
          myself in the realm of{" "}
          <span className="text-[#3be1ac]">problem solving</span>, ensuring that
          each digital experience is not just efficient but aesthetically
          pleasing.
        </p>
        <p className="text-white">
          In addition to my academic pursuits, I've embraced the challenges of{" "}
          <span className="text-[#3be1ac]">Data Structures and Algorithms</span>
          , recognizing their fundamental role in building robust and efficient
          software.
        </p>
      </div>

      <h2 className="text-white text-2xl pt-2 font-semibold">
        You are here for{"  "}
        <span className="text-[#3be1ac]">. . . .</span>
      </h2>
      <p className="py-4 text-white">
        I think you are here to get to know me. Best way is to start with my
        work.
      </p>

      <ul className=" flex items-center w-full overflow-x-auto gap-4">
        <li className="border border-faint-white py-[0.4rem] rounded-md px-[1rem] hover:bg-[rgb(59,225,172)] bg-[#19181814] hover:text-black transition duration-500 ease-in-out cursor-pointer text-white">
          <a
            href="mailto:abhayraj.svm14@gmail.com"
            className="flex items-center gap-2"
          >
            <i className="ri-mail-line"></i>
            <span>Gmail</span>
          </a>
        </li>
        <li className="border border-faint-white py-[0.4rem] rounded-md px-[1rem] hover:bg-[rgb(59,225,172)] bg-[#19181814] hover:text-black transition duration-500 ease-in-out cursor-pointer text-white">
          <a
            href="https://github.com/mini-360"
            className="flex items-center gap-2"
          >
            <i className="ri-github-line"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li className="border border-faint-white py-[0.4rem] rounded-md px-[1rem] hover:bg-[rgb(59,225,172)] bg-[#19181814] hover:text-black transition duration-500 ease-in-out cursor-pointer text-white">
          <a
            href="https://www.linkedin.com/in/abhay-raj14/"
            className="flex items-center gap-2"
          >
            <i className="ri-linkedin-fill"></i>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Intro;
