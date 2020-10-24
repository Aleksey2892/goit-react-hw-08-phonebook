import React from 'react';
import s from './Header.module.scss';

export default function Header({ children }) {
  return (
    <header className={s.header}>
      <div className={s.headerIn}>{children}</div>
    </header>
  );
}
