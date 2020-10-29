import React from 'react';
import s from './HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <div className={s.titleWrapper}>
        <h3 className={s.titleHomeRu}>
          Добро пожаловать в приложение "Контакты"! Для ознакомления Вы можете
          использовать мои данные для входа или зарегистрировать свой аккаунт!
        </h3>
        <h3 className={s.titleHomeEn}>
          Welcome to the app "Phonebook"! For review, You can use my login or
          register your account!!
          <p className={s.details}>email: "aleksey2892@gmail.com",</p>
          <p className={s.details}>password: "87654321".</p>
        </h3>
      </div>
    </>
  );
}
