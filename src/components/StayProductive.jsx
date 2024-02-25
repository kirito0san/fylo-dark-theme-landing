const StayProductive = () => {
  return (
    <div className="flex flex-col py-[150px] md:justify-center gap-5 md:flex-row">
      <img className="py-5" src={require("../images/illustration-stay-productive.png")} alt="" />
      <div className="flex flex-col md:justify-center gap-5">
        <div className="heading flex gap-2 md:flex-col md:text-5xl">
          {" "}
          <p>Stay productive , </p>
          <p> wherever you are</p>
        </div>
        <p>
          Never let location be an issue when accessing your files. Fylo has you covered for all of
          your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required.
        </p>

        <div className="SeeHowFylo cursor-pointer border-b w-fit hover:text-gray-200 hover:border-gray-200 gap-1 pb-1 items-center flex border-inside-Cyan text-inside-Cyan">
          <p>See how Fylo works</p>
          <img className="w-[20px]" src={require("../images/icon-arrow.svg").default} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StayProductive;
