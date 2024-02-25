import { useState } from "react";

const Early = () => {
  const [error, seterror] = useState(false);
  const hundelclick = (e) => {
    e.preventDefault();
    if (/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/g.test(e.target[0].value)) {
      seterror(false);
    } else {
      seterror(true);
    }
  };
  return (
    <div className="bg-gradient-to-b   text-center Parent from-main from-[50%] to-[50%] to-footer">
      <div className="bg-intro  max-w-[800px] rounded-lg gap-5 flex flex-col px-8 items-center py-16">
        <p className="heading"> Get early access today</p>
        <p className="w-5/6">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you
          have any questions, our support team would be happy to help you.
        </p>
        <form onSubmit={hundelclick} className="relative flex flex-col w-5/6 md:flex-row  gap-5">
          <input
            placeholder="email@example.com"
            className="text-black caret-black grow rounded-full py-3 pl-5 outline-none"
            type="text"
            name="email"
            id="email"
          />
          <button className="btn w-[230px]">Get Started For Free</button>
          {error && (
            <p className="text-error bottom-[-35px] left-[20px] absolute items-start">
              please a valid email address{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Early;
