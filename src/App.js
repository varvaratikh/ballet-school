import React from "react";

import {MainPage} from "./pages/main_page/MainPage";
import {InfoPage} from "./pages/info_page/InfoPage";
import {BecomeBallerina} from "./pages/to_become_ballerina/BecomeBallerina";
import {Photo} from "./components/photo/Photo";
import {Choreographers} from "./pages/choreographers/Choreographers";
import {Numbers} from "./pages/numbers/Numbers";

export const App = () => {
  return (
    <div className="App">
      <MainPage/>
      <InfoPage/>
      <BecomeBallerina/>
      <Photo/>
      <Choreographers/>
      <Numbers/>
    </div>
  );
}
