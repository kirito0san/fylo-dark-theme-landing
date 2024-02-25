import { useEffect, useState } from "react";

const Allyourfiles = () => {
  const [screen, setscreen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 380) {
      setscreen(true);
    }
    window.onresize = () => {
      if (window.innerWidth < 380) {
        setscreen(true);
      } else {
        setscreen(false);
      }
    };
  }, [screen]);
  return (
    <div className="flex w-[90%]   mx-auto flex-col gap-5 py-10">
      <img
        className="z-10 w-[330px] md:w-[700px] self-center"
        src={require("../images/illustration-intro.png")}
        alt="React Logo"
      />
      <div className="w-full absolute bottom-[30%] left-0  ">
        {screen ? (
          <img src={require("../images/bg-curvy-mobile.svg").default} alt="img" />
        ) : (
          <img
            className="w-full"
            src={require("../images/bg-curvy-desktop.svg").default}
            alt="React Logo"
          />
        )}
      </div>
      <div className="relative flex flex-col items-center gap-4 z-10">
        <h2 className="text-2xl lg:!leading-[3.75rem]	 lg:w-[880px]   md:text-5xl text-center font-Raleway font-bold">
          All your files in one secure location, accessible anywhere.
        </h2>
        <div className="text-center lg:w-[600px]  md:text-2xl  flex flex-col gap-5 items-center justify-center">
          <p>
            Fylo stores all your most important files in one secure location. Access them wherever
            you need, share and collaborate with friends family, and co-workers.
          </p>
          <button className="btn  w-[200px] lg:w-[300px] "> Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Allyourfiles;
