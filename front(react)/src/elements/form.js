import React, { useState } from 'react';
import style from '../elements/form.module.css';

function Formm() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Номер замовлення:', orderNumber);
    console.log('Пошта:', email);
    console.log('Причина:', reason);
  };
  return (
    <>
    <div className={style.complaintFormContainer}>
      <h2 className={style.formTitle}>Форма надсилання жалоби</h2>
      <form onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="orderNumber" className={style.label}>Номер замовлення:</label>
          <input
            type="text"
            id="orderNumber"
            className={style.input}
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.label}>Пошта:</label>
          <input
            type="email"
            id="email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="reason" className={style.label}>Причина:</label>
          <textarea
            id="reason"
            className={style.textarea}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={style.submitButton}>Надіслати</button>
      </form>
    </div>
    </>
  );
}

export default Formm;
