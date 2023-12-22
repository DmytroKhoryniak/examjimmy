import React from 'react';
import Info from '../header/header_top/info';
import Menu from '../header/header_button/menu';
import Carousel_brands from '../main/content/carousel_brands';
import Menu_footer from '../footer/menu_footer';

function Layout(props) {
  return (
    <>
        <Info/>
        <Menu/>
        {props.children}
        <br></br>
        {/* <Carousel_brands/> */}
        <Menu_footer/>
    </>
  );
}

export default Layout;
