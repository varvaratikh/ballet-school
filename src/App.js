import React from "react";

import {MainPage} from "./pages/main_page/MainPage";
import {InfoPage} from "./pages/info_page/InfoPage";
import {BecomeBallerina} from "./pages/to_become_ballerina/BecomeBallerina";

export const App = () => {
  return (
    <div className="App">
      <MainPage/>
      <InfoPage/>
      <BecomeBallerina/>
    </div>
  );
}
