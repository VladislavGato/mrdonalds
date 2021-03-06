export const totalPriceItems = order => {
	const countTopping = order.topping && order.topping.filter(item => item.checked).length;
	const priceTopping = (order.price * 0.1) * countTopping;

	return (order.price + priceTopping) * order.count;
};

export const formatCurrency = value => value.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

// export const formatCurrency = item => {
// 	let str = item.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
// 	let a = str.split(',')[0];
// 	let b = str.split(',')[1].slice(2);
// 	let formatStr = a + ',..' + b;
// 	return formatStr;
// };

export const projection = rules => {
	const keys = Object.keys(rules);

	return obj => keys.reduce((newObj, key) => {
		newObj[key] = rules[key].reduce((val, fn, i) => (i ? fn(val) : obj[fn]), null);

		return newObj;
	}, {})
};