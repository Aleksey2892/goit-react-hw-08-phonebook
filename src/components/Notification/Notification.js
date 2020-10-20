import React from 'react';

import s from './Notification.module.scss';

export default function Notification({ contact, onClick }) {
  return (
    <div onClick={onClick} className={s.notification}>
      {contact && `${contact} is already in contacts`}
      {!contact && 'Close'}
    </div>
  );
}
