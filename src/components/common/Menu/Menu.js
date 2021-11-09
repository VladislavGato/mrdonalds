import React from "react";
import dbMenu from '../../DBMenu';
import ListItem from "../ListItem/ListItem";
import Banner from "../Banner/Banner";

import './styles.scss';

const Menu = ({ setOpenItem }) => (
  <main className="menu">
    <Banner />
    <section className="menu-section">
      <h2>Бургеры</h2>
      <ListItem
        itemList={dbMenu.burger}
        setOpenItem={setOpenItem}
      />
    </section>

    <section className="menu-section">
      <h2>Закуски / Напитки</h2>
      <ListItem
        itemList={dbMenu.other}
        setOpenItem={setOpenItem}
      />
    </section>
  </main>
)

export default Menu;