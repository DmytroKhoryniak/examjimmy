import React from 'react';
import style from '../footer/menu_footer.module.css';
import Logo from './logo';

function Menu_footer() {
  return (
    <>
    <footer className={style.footerContainer}>
      <Logo/>
      <div className={style.socialLinks}>
        <a
          href="https://www.tiktok.com/@jimmy_storage?_t=8goR1Ef6hSn&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className={style.socialLink}
        >
          TikTok
        </a>
        <a
          href="https://instagram.com/jimmy_storage?igshid=MzRlODBiNWFlZA==" // Посилання на Instagram
          target="_blank"
          rel="noopener noreferrer"
          className={style.socialLink}
        >
          Instagram
        </a>
      </div>
    </footer>
    </>
  );
}

export default Menu_footer;
