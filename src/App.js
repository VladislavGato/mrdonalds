import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalItem } from './components/ModalItem';

function App() {
  const [ openItem, setOpenItem ] = useState(null);

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </>
  );
}

export default App;
