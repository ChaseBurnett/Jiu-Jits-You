import { JiuJitsYou } from "./components/JiuJitsYou";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/compat/app"; // Import Firebase!!
import { firebaseConfig } from "./ApiKeys"; // Import Your Config!!
import 'bootstrap/dist/css/bootstrap.min.css';

firebase.initializeApp(firebaseConfig);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <JiuJitsYou />
  </BrowserRouter>
);

