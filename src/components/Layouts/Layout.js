import React from 'react';
import s from './Layout.module.scss';

export default function Layout({ children }) {
  return <div className={s.wrapper}>{children}</div>;
}
