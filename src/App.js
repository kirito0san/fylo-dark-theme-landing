
import Header from "./components/Header";
import Serves from "./components/Serves";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import Early from "./components/Early";
import Footer from "./components/Footer";
import Allyourfiles from "./components/Allyourfiles";

function App() {


  return (
    <div className="App relative  text-sm text-white  bg-main font-Open-sans">
      <div className="relative bg-gradient-to-b pt-10 from-intro from-[70%] to-[30%] to-main ">
        <Header />
        <Allyourfiles />
      </div>
      <div className="Parent">
        <Serves />
        <StayProductive />
        <Testimonials />
      </div>
      <Early />
      <Footer />
    </div>
  );
}

export default App;
