import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
	name: item,
	checked: false,
}));


export function useToppings(openItem) {
	// const [toppings, setToppings] = useState(openItem.toppings ? getTopping(openItem.toppings) : null );

	const readyTopping = openItem.topping ? openItem.topping :
		openItem.toppings ? getTopping(openItem.toppings) : [];
	// const readyTopping = ( openItem.toppings && getTopping(openItem.toppings) ) || [];
	const [toppings, setToppings] = useState(readyTopping);

	const checkToppings = index => {
		setToppings(toppings.map((item, i) => {
			const newItem = {...item};
			if (i === index) {
				newItem.checked = !newItem.checked;
			}

			return newItem;
		}));
	};

	return {toppings, checkToppings};
}