import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function Search() {
  return (
    <div
      className=" d-flex justify-content-start form-group mx-3 mt-3"
      style={{ width: 200 }}
    >
      <input type="email" className="form-control" placeholder="search.." />
    </div>
  );
}

export default Search;
