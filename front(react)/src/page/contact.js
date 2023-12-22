import React from 'react';
import Layout from '../component/layout/layout';
import style from '../page/contact.module.css';
import Formm from '../elements/form'

function Contact() {
  return (
    <>
    <Layout>
    <div className={style.contactsContainer}>
      <h2 className={style.contactTitle}>Контакти</h2>
      <div className={style.contactInfo}>
        <div className={style.contactField}>
          <p className={style.fieldLabel}>Власник</p>
          <p className={style.fieldValue}>Дмитро Хориняк</p>
        </div>
        <div className={style.contactField}>
          <p className={style.fieldLabel}>Назва компанії:</p>
          <p className={style.fieldValue}>Jimmy Storage</p>
        </div>
        <div className={style.contactField}>
          <p className={style.fieldLabel}>Пошта:</p>
          <p className={style.fieldValue}>jimmystorage@gmail.com</p>
        </div>
        <div className={style.contactField}>
          <p className={style.fieldLabel}>Номер телефону:</p>
          <p className={style.fieldValue}>+380 98 812 95 59</p>
        </div>
        <div className={style.contactField}>
          <p className={style.fieldLabel}>Адреса:</p>
          <p className={style.fieldValue}>Місто Тернопіль вулиця Руська 23</p>
        </div>
      </div>
    </div>
    <Formm/>
    </Layout>
    </>
  );
}

export default Contact;
