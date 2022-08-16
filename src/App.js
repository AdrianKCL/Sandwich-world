import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Type from "./components/Type";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

function App() {
  const [sandwich, setSandwich] = useState({ base: "", toppings: [] });

  const addType = (base) => {
    setSandwich({ ...sandwich, base });
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
      <Switch>
        <Route path="/base">
          <Type addType={addType} sandwich={sandwich} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} sandwich={sandwich} />
        </Route>
        <Route path="/order">
          <Order sandwich={sandwich} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
