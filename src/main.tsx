import ReactDOM from "react-dom/client";
import "./index.css";
import { Navbar } from "./components";
import { Projects } from "./views";

ReactDOM.createRoot(document.getElementsByTagName("body")[0]!).render(
  <>
    <Navbar />
    <Projects />
  </>
);
