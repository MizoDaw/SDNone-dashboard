import React from 'react';

import './style.css'
import { useTranslation } from 'utility/language';
function ContactLetter({ letter }) {

    const t = useTranslation()
  return (
    <div className="contact-letter">
      <h3>{t('contact_us_letter')}</h3>
      <div className="letter-content">
        <p><strong>{t('name')}:</strong> {letter.name}</p>
        <p><strong>{t("email")}:</strong> {letter.email}</p>
        <p><strong>{t("phone")}:</strong> {letter?.phone}</p>
        <p><strong>{t("message")}:</strong> <p>{letter.content}</p></p>
      </div>
    </div>
  );
}

export default ContactLetter;