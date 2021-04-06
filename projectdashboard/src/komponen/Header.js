import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function Header() {
  return (
    <div className="d-flex justify-content-start form-group mx-3 mt-2 w-25">
      <label for="exampleFormControlSelect1"></label>
      <select className="form-control" id="exampleFormControlSelect1">
        <option>HomeyStock</option>
        <option>HomeyKaggle</option>
        <option>HomeyWorks</option>
      </select>
    </div>
  );
}

export default Header;
