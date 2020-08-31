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
  min-width: 380px;
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

export const Order = ({ orders }) => {

	const total = orders.reduce((result, order) =>
		totalPriceItems(order) + result, 0);

	return (
		<OrderStyled>
			<OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
			<OrderContent>
				{orders.length ?
					<OrderList>
						{orders.map((order, index) => <OrderListItem order={order} key={index} />)}
					</OrderList> :
					<EmptylIst>Список заказов пуст</EmptylIst>
				}
			</OrderContent>
			<Total>
				<span>Итого</span>
				<span>5</span>
				<TotalPrice>{formatCurrency(total)}</TotalPrice>
			</Total>
			<ButtonCheckout>Оформить</ButtonCheckout>
		</OrderStyled>
	)
};