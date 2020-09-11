import React from 'react';
import styled from 'styled-components';
// import dbMenu from '../DBMenu';
import { ListItem } from './ListItem';
import { Banner } from './Banner';

// 1
// import { useFetch } from '../hooks/useFetch';

import { Preloader } from './Preloader';

const MenuStyled = styled.main`
	background-color: #ccc;
	margin-top: 80px;
	margin-left: 380px;
`;

const SectionMenu = styled.section `
	padding: 30px;
`;

// 1
// export const Menu = ({ setOpenItem }) => {
	// const res = useFetch();
	// const dbMenu = res.response;

// 2
export const Menu = ({ setOpenItem, dbMenu }) => {
	
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
							setOpenItem={setOpenItem}
						/>
					</SectionMenu>

					<SectionMenu>
						<h2>Закуски / Напитки</h2>
						<ListItem
							itemList={dbMenu.other}
							setOpenItem={setOpenItem}
						/>
					</SectionMenu>
				{/* </> : res.error ?
					<div>Sorry, we will fix it soon...</div> : */}
				</> : <Preloader />
			}
		</MenuStyled>
	)
};