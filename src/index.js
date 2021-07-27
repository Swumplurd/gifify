import React from 'react';
import ReactDOM from 'react-dom';
import { Gifify } from './components/Gifify/Gifify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <div className="container">
    <div className="row">
      <div className="col">
        <Gifify />
      </div>
    </div>
  </div>,
  document.querySelector('#root')
);