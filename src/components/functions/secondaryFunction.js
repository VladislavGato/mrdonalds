export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = value => value.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});

// export const formatCurrency = item => {
// 	let str = item.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'});
// 	let a = str.split(',')[0];
// 	let b = str.split(',')[1].slice(2);
// 	let formatStr = a + ',..' + b;
// 	return formatStr;
// };