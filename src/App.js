import { Fragment } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Upcoming from "./components/Upcoming/Upcoming";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <About />
      <Upcoming />
      <Footer />
    </Fragment>
  );
};

export default App;
