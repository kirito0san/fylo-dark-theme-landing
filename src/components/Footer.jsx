const Footer = () => {
  return (
    <div className="Parent py-5 pt-16 bg-footer">
      <footer className="">
        <img src={require("../images/logo.svg").default} alt="" />
        <div className="footer flex md:items-start flex-col py-10  md:justify-between   md:flex-row">
          <div className="flex gap-3 md:w-[320px]  items-start">
            <img src={require("../images/icon-location.svg").default} alt="" />
            <p className="!w-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="mb-16 md:w-[180px]">
            <div className="flex gap-3 my-4 md:my-0 items-start">
              <img src={require("../images/icon-phone.svg").default} alt="" />
              <p> +1-543-123-4567</p>
            </div>
            <div className="flex gap-3 my-4 items-start">
              <img src={require("../images/icon-email.svg").default} alt="" />
              <p> 6tQp0@example.com</p>
            </div>
          </div>
          <div className="flex  md:w-[65px] flex-col mb-10 gap-4">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div className="flex  md:w-[75px] mb-16 flex-col gap-4">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
          <div className="icons flex justify-center gap-3">
            <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center border-white border">
              <img
                className="w-[20px] "
                src={require("../images/icon-facebook.svg").default}
                alt=""
              />
            </div>
            <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center border-white border">
              <img
                className="w-[20px] "
                src={require("../images/icon-twitter.svg").default}
                alt=""
              />
            </div>
            <div className="rounded-full w-[30px] h-[30px] flex items-center justify-center border-white border">
              <img
                className="w-[20px] "
                src={require("../images/icon-instagram.svg").default}
                alt=""
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
