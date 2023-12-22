import React from 'react';
import style from '../header_middle/search.module.css';

function Search() {
  return (
    <>
    <header className={style.headerContainer}>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="Пошук"
          className={style.searchInput}
        />
        <button className={style.searchButton}>Пошук</button>
      </div>
    </header>
    </>
  );
}

export default Search;
