import React from 'react';
import './App.css';
import {MantineProvider} from "@mantine/core";
import MainHeader from "./components/MainHeader";
import Display from "./components/Display";
import Food from "./components/Food";
import Drinks from "./components/Drinks";
import Snacks from "./components/Snacks";

function App() {
  return (
      <MantineProvider
          theme={{
            primaryColor: "blue",
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
