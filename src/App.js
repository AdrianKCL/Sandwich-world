import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Type from "./components/Type";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/Modal";

function App() {
  const location = useLocation();
  const [sandwich, setSandwich] = useState({ type: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addType = (type) => {
    setSandwich({ ...sandwich, type });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!sandwich.toppings.includes(topping)) {
      newToppings = [...sandwich.toppings, topping];
    } else {
      newToppings = sandwich.toppings.filter((item) => item !== topping);
    }
    setSandwich({ ...sandwich, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => setShowModal(false)}
      >
        <Switch location={location} key={location.key}>
          <Route path="/type">
            <Type addType={addType} sandwich={sandwich} />
          </Route>
          <Route path="/toppings">
            <Toppings addTopping={addTopping} sandwich={sandwich} />
          </Route>
          <Route path="/order">
            <Order sandwich={sandwich} setShowModal={setShowModal} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
