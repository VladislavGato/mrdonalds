import React from "react";

import './styles.scss';

const ListItem = ({ itemList }) => {

  return (
    <ul className="list">
      {itemList.map(item => (
        <li className="list-item" key={`${item.id}--${item.name}`} >
          <img className="list-item__img" src={item.img} alt={item.name} />
          <p className="list-item__name">{item.name}</p>
          <p className="list-item__price">
            {item.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default ListItem;