import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems, formatCurrency } from '../functions/secondaryFunction';

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

export const Order = ({ orders, setOrders, setOpenItem }) => {

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
			<ButtonCheckout>Оформить</ButtonCheckout>
		</OrderStyled>
	)
};