import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function Dropdown() {
  return (
    <div className="d-flex flex-row mt-2">
      <div
        className="d-flex justify-content-start form-group mx-3 mt-2"
        style={{ width: 200 }}
      >
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>Top Gainers</option>
          <option>Top Loser</option>
        </select>
      </div>

      <div
        className="d-flex justify-content-start form-group mx-3 mt-2"
        style={{ width: 200 }}
      >
        <label for="exampleFormControlSelect1"></label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>1m</option>
          <option>15m</option>
          <option>1h</option>
          <option>4h</option>
          <option>24h</option>
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
