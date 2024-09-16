import React from "react";

import {MainPage} from "./pages/main_page/MainPage";
import {InfoPage} from "./pages/info_page/InfoPage";
import {BecomeBallerina} from "./pages/to_become_ballerina/BecomeBallerina";
import {Photo} from "./components/photo/Photo";
import {Choreographers} from "./pages/choreographers/Choreographers";
import {Numbers} from "./pages/numbers/Numbers";
import {Offer} from "./pages/order/Offer";
import {Classes} from "./pages/classes/Classes";
import {OscarWilde} from "./pages/oscar_wilde/OscarWilde";
import {Contacts} from "./pages/contacts/Contacts";
import {MapComponent} from "./components/map/MapComponent";
import {Footer} from "./components/footer/Footer";
import {Footer1} from "./components/footer/Footer1";


export const App = () => {
  return (
    <div className="App">
      <MainPage/>
      <InfoPage/>
      <BecomeBallerina/>
      <Photo/>
      <Choreographers/>
      <Numbers/>
      <Offer/>
      <Classes/>
      <OscarWilde/>
      <Contacts/>
      <MapComponent/>
      <Footer1/>
      <Footer/>
    </div>
  );
}
