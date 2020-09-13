import React, { useContext } from 'react';
import styled from 'styled-components';
// import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

import { Preloader } from './Preloader';
import { Context } from '../functions/context';

const MenuStyled = styled.main`
	background-color: #ccc;
	margin-top: 80px;
	margin-left: 380px;
`;

const SectionMenu = styled.section `
	padding: 30px;
`;

export const Menu = () => {
	const { dbMenu } = useContext(Context);
	console.log('dbMenu: ', dbMenu);

	return (
		<MenuStyled>
			<Banner />
			{/* {res.response ? */}
			{dbMenu ?
				<>
					<SectionMenu>
						<h2>Бургеры</h2>
						<ListItem 
							itemList={dbMenu.burger}
						/>
					</SectionMenu>

					<SectionMenu>
						<h2>Закуски / Напитки</h2>
						<ListItem
							itemList={dbMenu.other}
						/>
					</SectionMenu>
				{/* </> : res.error ?
					<div>Sorry, we will fix it soon...</div> : */}
				</> : <Preloader />
			}
		</MenuStyled>
	)
};