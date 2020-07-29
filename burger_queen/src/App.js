import React, {useState} from 'react';
import './App.css';
import './App.sass';

import menus from './utils/menuitems';
import Header from './components/Header/Header';
import Menus from './components/Menus/Menus';

function App() {
  const [menuType, SetMenuType] = useState('');
  const breakfast = menus.breakfast;
  const meals = menus.meals;

  return (
    <div className="App">
      <Header />
      <Menus 
        menuType={menuType}
        setMenu={SetMenuType}
        meals={meals}
        breakfast={breakfast}
      />
    </div>
  );
}

export default App;
