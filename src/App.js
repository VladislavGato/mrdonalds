import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './components/navBar/NavBar';
import { Menu } from './components/menu/Menu';
import { GlobalStyle } from './components/style/GlobalStyle';
import { ModalItem } from './components/modal/ModalItem';
import { Order } from './components/order/Order';
import { useOpenItem } from './components/hooks/useOpenItem';
import { useOrders } from './components/hooks/useOrders';
import { useAuth } from './components/hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyBh29VhUYRGPZ0laMwNg6AbA-y84Z7nR4o",
  authDomain: "mrdonalds-6d50f.firebaseapp.com",
  databaseURL: "https://mrdonalds-6d50f.firebaseio.com",
  projectId: "mrdonalds-6d50f",
  storageBucket: "mrdonalds-6d50f.appspot.com",
  messagingSenderId: "688613189074",
  appId: "1:688613189074:web:bf67002c0efd7cb3bb140b"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem &&
        <ModalItem {...openItem} {...orders}  />
      }
    </>
  );
}

export default App;
