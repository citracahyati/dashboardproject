import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function Candlestick() {
  const listmenit = [
    {
      waktu: '1m',
    },
    {
      waktu: '5m',
    },
    {
      waktu: '15m',
    },
    {
      waktu: '1h',
    },
    {
      waktu: '4h',
    },
    {
      waktu: '1d',
    },
  ];

  return (
    <div className=" d-flex flex-row mt-5 mx-3">
      {listmenit.map(({ waktu }) => (
        <button type="button" className="btn btn-secondary text-center mx-3">
          {waktu}
        </button>
      ))}
    </div>
  );
}

export default Candlestick;
