import "./App.css";
import { Form } from "react-bootstrap";
import { useState } from "react";

function App() {
  /*const [message, setMessage] = useState();*/

  const click_boom = () => {
    alert("Hai premuto il bottone!");
  };

   return (
    <div class="container">
  <div class="img-container">
    <img class="img-centered" src="demo_site_img.jpg" alt="Logo"></img>
    <span class="label-centered">Login</span>
    <textarea id="textarea" class="textbox-centered"></textarea>
  </div>
</div>
  );
}

export default App;
