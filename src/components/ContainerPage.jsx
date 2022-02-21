import Header from "./Header";
import TopPimcs from "./TopPimcs";
import IngatlanCard from "./cards/IngatlanCard";
import GepjarmuCard from "./cards/Gepjarmu";
import { useState } from "react";
import Egyeb from "./cards/Egyeb";
import Contact from "./cards/Contact";

const ContainerPage = () => {
  const [showIng, setShowIng] = useState(false);
  const [showCar, setShowCar] = useState(false);
  const [showEgyeb, setShowEgyeb] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const setBlank = () => {
    setShowEgyeb(false);
    setShowCar(false);
    setShowIng(false);
    setShowContact(false);
  };

  const showHandlerIng = () => {
    setShowEgyeb(false);
    setShowCar(false);
    setShowContact(false);
    setShowIng(true);
  };

  const showHandlerCar = () => {
    setShowEgyeb(false);
    setShowIng(false);
    setShowContact(false);
    setShowCar(true);
  };
  const showHandlerEgyeb = () => {
    setShowIng(false);
    setShowCar(false);
    setShowContact(false);
    setShowEgyeb(true);
  };
  const showHandlerContact = () => {
    setShowIng(false);
    setShowCar(false);
    setShowEgyeb(false);
    setShowContact(true);
  };
  const noShowHandlerIng = () => setShowIng(false);
  const noShowHandlerCar = () => setShowCar(false);
  const noShowHandlerEgyeb = () => setShowEgyeb(false);
  const noShowHandlerContact = () => setShowEgyeb(false);

  return (
    <>
      <Header
        onClickIng={showHandlerIng}
        onClickCar={showHandlerCar}
        onClickEgyeb={showHandlerEgyeb}
        onClickContact={showHandlerContact}
      />
      <TopPimcs noShowIng={setBlank} />
      {showIng ? <IngatlanCard onClick={noShowHandlerIng} /> : null}
      {showCar ? <GepjarmuCard onClick={noShowHandlerCar} /> : null}
      {showEgyeb ? <Egyeb onClick={noShowHandlerEgyeb} /> : null}
      {showContact ? <Contact onClick={noShowHandlerContact} /> : null}
    </>
  );
};

export default ContainerPage;
