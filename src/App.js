import React, { useEffect, useState } from 'react';
import Navbar from './components/common/Navbar';
import Menu from './components/common/Menu';
import ModalItem from './components/common/ModalItem';

function App() {
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    console.log('openItem: ', openItem);
  })

  return (
    <div className="App">
      <Navbar />
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem} />
    </div>
  );
}

export default App;
