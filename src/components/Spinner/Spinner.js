import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Spinner.module.scss';

export default function Spinner() {
  return (
    <div className={s.spinner}>
      <Loader
        type="ThreeDots"
        color="#ff4500"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  );
}
