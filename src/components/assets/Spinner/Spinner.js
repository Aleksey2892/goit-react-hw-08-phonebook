import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';

export default function Spinner({ ...spinnerConfig }) {
  const {
    className = 'lazySpinner',
    type = 'Grid',
    height = 100,
    width = 100,
  } = spinnerConfig;

  return (
    <div className={className}>
      <Loader
        type={type}
        color="#ff4500"
        height={height}
        width={width}
        timeout={0}
      />
    </div>
  );
}
