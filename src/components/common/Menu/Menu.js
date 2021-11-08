import React from "react";
import dbMenu from '../../DBMenu';
import ListItem from "../ListItem/ListItem";
import Banner from "../Banner/Banner";

import './styles.scss';

const Menu = () => (
  <main className="menu">
    <Banner />
    <section className="menu-section">
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </section>

    <section className="menu-section">
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </section>
  </main>
)

export default Menu;