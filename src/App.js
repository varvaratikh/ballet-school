import React from "react";

import {MainPage} from "./pages/main_page/MainPage";
import {InfoPage} from "./pages/info_page/InfoPage";

export const App = () => {
  return (
    <div className="App">
      <MainPage/>
      <InfoPage/>
    </div>
  );
}
