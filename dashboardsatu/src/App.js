import Header from "./komponen/Header";
import Dropdown from "./komponen/Dropdown";
import Search from "./komponen/Search";
import TokenCoin from "./komponen/TokenCoin";
import "./App.css";
import Candlestick from "./komponen/Candlestick";
import Dashboard from "./komponen/Dashboard";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Dropdown />
      <Candlestick />
      <TokenCoin />
    </>
  );
}

export default App;
