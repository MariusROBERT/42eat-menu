import React from 'react';
import './App.css';
import {MantineProvider} from "@mantine/core";
import MainHeader from "./components/MainHeader";
import Display from "./components/Display";
import Food from "./components/Food";
import Drinks from "./components/Drinks";
import Snacks from "./components/Snacks";

function App() {
  const [primaryColor, setPrimaryColor] = React.useState("blue");

  return (
      <MantineProvider
          theme={{
            primaryColor: primaryColor,
          }}
          withCSSVariables
          withGlobalStyles
          withNormalizeCSS
      >
        <MainHeader/>
        <Display/>
        <hr id={"food"}/>
        <Food/>
        <hr id={"drink"}/>
        <Drinks/>
        <hr id={"snacks"}/>
        <Snacks/>
      </MantineProvider>
  );
}

export default App;
