import Features from "./components/Features";
import Feedbacks from "./components/Feedbacks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import SystemRequirements from "./components/SystemRequirements";

function App() {
  return (
    <>
      <Hero/>
      {/* <Component/> */}
      <Features/>
      <SystemRequirements/>
      <Feedbacks/>
      <Footer/>
    </>
  );
}

export default App;
