const Header = () => {
  return (
    <header className="flex w-[90%]  mx-auto gap-3 justify-between items-center">
      <div>
        <img className="w-24" src={require("../images/logo.svg").default} alt="logo" />
      </div>
      <div className="flex HeaderHover items-center gap-2 md:gap-5">
        <button>Features</button>
        <button>Team</button>
        <button> Sign In</button>
      </div>
    </header>
  );
};

export default Header;
