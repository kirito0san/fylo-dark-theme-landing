const Serves = () => {
  return (
    <div className="serves-section pt-10">
      <div>
        <img src={require("../images/icon-access-anywhere.svg").default} alt="" />
        <p>Access your files, anywhere</p>
        <p>
          {" "}
          The ability to use a smartphone, tablet, or computer to access your account means your
          files follow you everywhere.
        </p>
      </div>
      <div>
        <img src={require("../images/icon-security.svg").default} alt="" />
        <p> Security you can trust</p>
        <p>
          2-factor authentication and user-controlled encryption are just a couple of the security
          features we allow to help secure your files.
        </p>
      </div>
      <div>
        <img src={require("../images/icon-collaboration.svg").default} alt="" />
        <p>Real-time collaboration</p>
        <p>
          Securely share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required.
        </p>
      </div>
      <div>
        <img src={require("../images/icon-any-file.svg").default} alt="" />
        <p>Store any type of file</p>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you covered allowing
          for all file types to be securely stored and shared.
        </p>
      </div>
    </div>
  );
};

export default Serves;
