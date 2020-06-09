import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";

const App = () => {
  return (
    <div class="main">
      <Screen
        imageUrl={ursinho_pandinha_ok}
        bgColor={colors.red}
        textColor={colors.white}
        title="Estes são Ursinho e Pandinha"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie odio at maximus dictum. Maecenas consectetur suscipit ipsum, sed efficitur erat porta ac. In in tincidunt est."
        btnText="Continuar"
      />
      <Screen
        imageUrl={ursinho_pandinha_ok}
        bgColor={colors.green}
        textColor={colors.white}
        title="Estes são Ursinho e Pandinha"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie odio at maximus dictum. Maecenas consectetur suscipit ipsum, sed efficitur erat porta ac. In in tincidunt est."
        btnText="Continuar"
      />
    </div>
  );
};

export default App;
