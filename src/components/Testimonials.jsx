const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="relative w-[350px]  ">
        <img className="quotes z-10 " src={require("../images/bg-quotes.png")} alt="" />
        <div className="relative !w-auto warper z-20 ">
          <p>
            {" "}
            Fylo has improved our team productivity by an order of magnitude. Since making the
            switch our team has become a well-oiled collaboration machine.
          </p>
          <div>
            <img src={require("../images/profile-1.jpg")} alt="" />
            <div>
              <p>Satish Patel</p>
              <p>Founder & CEO, Huddle</p>
            </div>
          </div>
        </div>
      </div>
      <div className="warper">
        <p>
          {" "}
          Fylo has improved our team productivity by an order of magnitude. Since making the switch
          our team has become a well-oiled collaboration machine.
        </p>
        <div>
          <img src={require("../images/profile-2.jpg")} alt="" />
          <div>
            <p>Bruce McKenzie</p>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className="warper">
        <p>
          {" "}
          Fylo has improved our team productivity by an order of magnitude. Since making the switch
          our team has become a well-oiled collaboration machine.
        </p>
        <div>
          <img src={require("../images/profile--3.jpg")} alt="" />
          <div>
            <p>johan jonson</p>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
