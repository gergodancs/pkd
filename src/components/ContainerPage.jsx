import Header from "./Header";
import TopPimcs from "./TopPimcs";
import IngatlanCard from "./cards/IngatlanCard";
import BiztositasCard from "./cards/BiztositasCard";
import { useState } from "react";
import Csalad from "./cards/Csalad";
import Contact from "./cards/Contact";
import Adozas from "./cards/Adozas";
import Polg from "./cards/Polg";
import Vallalkozas from "./cards/Vallalkozas";
import AboutMe from "./cards/AboutMe";

const ContainerPage = () => {
  const [showIng, setShowIng] = useState(false);
  const [showBizt, setShowBizt] = useState(false);
  const [showCsalad, setShowCsalad] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAdo, setShowAdo] = useState(false);
  const [showBus, setShowBus] = useState(false);
  const [showPolg, setShowPolg] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  const setBlank = () => {
    setShowCsalad(false);
    setShowBizt(false);
    setShowIng(false);
    setShowContact(false);
    setShowAdo(false);
    setShowBus(false);
    setShowPolg(false);
    setShowAbout(false);
  };

  const showHandlerIng = () => {
    setShowCsalad(false);
    setShowBizt(false);
    setShowContact(false);
    setShowAdo(false);
    setShowBus(false);
    setShowPolg(false);
    setShowAbout(false);
    setShowIng(true);
  };

  const showHandlerBizt = () => {
    setShowCsalad(false);
    setShowIng(false);
    setShowContact(false);
    setShowAdo(false);
    setShowBus(false);
    setShowPolg(false);
    setShowAbout(false);
    setShowBizt(true);
  };
  const showHandlerCsalad = () => {
    setShowIng(false);
    setShowBizt(false);
    setShowContact(false);
    setShowAdo(false);
    setShowBus(false);
    setShowPolg(false);
    setShowAbout(false);
    setShowCsalad(true);
  };
  const showHandlerContact = () => {
    setShowIng(false);
    setShowBizt(false);
    setShowCsalad(false);
    setShowAdo(false);
    setShowBus(false);
    setShowPolg(false);
    setShowAbout(false);
    setShowContact(true);
  };
  const showHandlerAdo = () => {
    setShowIng(false);
    setShowBizt(false);
    setShowCsalad(false);
    setShowAdo(false);
    setShowContact(false);
    setShowBus(false);
    setShowPolg(false);
    setShowAbout(false);
    setShowAdo(true);
  };
  const showHandlerBus = () => {
    setShowIng(false);
    setShowBizt(false);
    setShowCsalad(false);
    setShowAdo(false);
    setShowContact(false);
    setShowBus(false);
    setShowAdo(false);
    setShowAbout(false);
    setShowPolg(false);
    setShowBus(true);
  };
  const showHandlerPolg = () => {
    setShowIng(false);
    setShowBizt(false);
    setShowCsalad(false);
    setShowAdo(false);
    setShowContact(false);
    setShowBus(false);
    setShowAdo(false);
    setShowBus(false);
    setShowAbout(false);
    setShowPolg(true);
  };
  const showHandlerAbout = () => {
    setShowIng(false);
    setShowBizt(false);
    setShowCsalad(false);
    setShowAdo(false);
    setShowContact(false);
    setShowBus(false);
    setShowAdo(false);
    setShowBus(false);
    setShowPolg(false);
    setShowAbout(true);
  };
  const noShowHandlerIng = () => setShowIng(false);
  const noShowHandlerBizt = () => setShowBizt(false);
  const noShowHandlerCsalad = () => setShowCsalad(false);
  const noShowHandlerContact = () => setShowContact(false);
  const noShowHandlerAdo = () => setShowAdo(false);
  const noShowHandlerBus = () => setShowBus(false);
  const noShowHandlerPolg = () => setShowPolg(false);
  const noShowHandlerAbout = () => setShowAbout(false);

  return (
    <div className="wrapper">
      <Header
        onClickIng={showHandlerIng}
        onClickBizt={showHandlerBizt}
        onClickCsalad={showHandlerCsalad}
        onClickContact={showHandlerContact}
        onClickAdo={showHandlerAdo}
        onClickBus={showHandlerBus}
        onClickPolg={showHandlerPolg}
        onClickAbout={showHandlerAbout}
      />
      {/* <TopPimcs noShowIng={setBlank} /> */}
      {showIng ? <IngatlanCard onClick={noShowHandlerIng} /> : null}
      {showBizt ? <BiztositasCard onClick={noShowHandlerBizt} /> : null}
      {showCsalad ? <Csalad onClick={noShowHandlerCsalad} /> : null}
      {showContact ? <Contact onClick={noShowHandlerContact} /> : null}
      {showAdo ? <Adozas onClick={noShowHandlerAdo} /> : null}
      {showBus ? <Vallalkozas onClick={noShowHandlerBus} /> : null}
      {showPolg ? <Polg onClick={noShowHandlerPolg} /> : null}
      {showAbout ? <AboutMe onClick={noShowHandlerAbout} /> : null}
    </div>
  );
};

export default ContainerPage;
