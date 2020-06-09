import React from "react";
import "./App.css";

import Textbox from "./components/Textbox";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem nulla, rutrum vitae ex a, finibus facilisis lacus. Integer non nisi nisl. Duis pretium elit urna. Vestibulum dignissim condimentum magna, vel consequat nisi elementum a."

const App = () => {
  return (
    <div class="main">
      <Textbox
        backgroundColor = "#FFF"
        title = "algum titulo"
        subtitle = "algum subtitulo"
        textArray = {[text, text]}
      />
    </div>
  );
};

export default App;
