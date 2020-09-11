import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency, projection } from '../functions/secondaryFunction';

const OrderStyled = styled.section`
	position: fixed;
	display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background-color: #fff;
  width: 380px;
	height: calc(100% - 80px);
	box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
	padding: 20px;
`;

const OrderTitle = styled.h2`
	text-align: center;
	margin-bottom: 30px;
`;

const OrderContent = styled.div`
	flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.ul`
	display: flex;
	margin: 30px;


	& span:first-child {
		flex-grow: 1;
	}
`;

const TotalPrice = styled.ul`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptylIst = styled.p`
	text-align: center;
`;

const rulesData = {
	itemName: ['name'],
	price: ['price'],
	count: ['count'],
	topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name),
		arr => arr.length ? arr : 'no topping'],
	choice: ['choice', item => item ? item : 'no choices'],
};

// 1
// export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, firebaseDatabase }) => {
// 2
export const Order = ({ orders, setOrders, setOpenItem, authentication, logIn, database }) => {
	//1
	// const dataBase = firebaseDatabase();

	const sendOrder = () => {
		// console.log('sendOrder -> orders: ', orders);
		const newOrder = orders.map(projection(rulesData));
		// console.log('sendOrder -> newOrder: ', newOrder);

		// 1
		// dataBase.ref('orders').push().set({
		// 2
		database.ref('orders').push().set({
			nameClient: authentication.displayName,
			email: authentication.email,
			order: newOrder
		});

		setOrders([]);
	}

	const deleteItem = index => {
		// const newOrders = [...orders];
		// newOrders.splice(index, 1);
		const newOrders = orders.filter((item, i) => index !== i);
		setOrders(newOrders);
	}

	const total = orders.reduce((result, order) =>
		totalPriceItems(order) + result, 0);

	const totalCounter = orders.reduce((result, order) =>
		order.count + result, 0);

	const confirmTheOrder = () => {
		if (authentication) {
			console.log('Уже были авторизованы. Заказ отправили: ', orders);
			sendOrder();
		} else {
			// logIn();
			logIn().then(() => console.log('Не были авторизованы. Авторизовались. Заказ не отправили: ', orders));
		}
	}

	return (
		<OrderStyled>
			<OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
			<OrderContent>
				{orders.length ?
					<OrderList>
						{orders.map((order, index) => <OrderListItem
							order={order}
							key={index}
							deleteItem={deleteItem}
							index={index}
							setOpenItem={setOpenItem}
						/>)}
					</OrderList> :
					<EmptylIst>Список заказов пуст</EmptylIst>
				}
			</OrderContent>
			<Total>
				<span>Итого</span>
				<span>{totalCounter}</span>
				<TotalPrice>{formatCurrency(total)}</TotalPrice>
			</Total>
			<ButtonCheckout onClick={confirmTheOrder} >Оформить</ButtonCheckout>
		</OrderStyled>
	)
};