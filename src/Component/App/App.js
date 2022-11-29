import '../../CSS/style.css';
import '../../CSS/style.min.css';
import TopBar from "../Dashboard/TopBar";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Footer/Footer";
import BackToTop from "./BackToTop";
import {Outlet} from "react-router-dom";

const App = (props) => {
    return (
      <div>
          <TopBar/>
          <Navbar/>
          <Outlet/>
          <Footer/>
          <BackToTop/>
      </div>
  )
}

export default App;
