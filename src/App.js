import { useEffect } from 'react';
import './App.scss';
import AOS from 'aos';
import Header from './Components/Header';
import WebApp from './Components/WebApp';
import Games from './Components/Games';
import MobileApp from './Components/MobileApp';

function App() {

  useEffect(() => {
    AOS.init();
    document.title = "App List";
  });


  return (
    <>
      <Header />
      <WebApp />
      <Games />
      <MobileApp />
    </>
  );
}

export default App;
