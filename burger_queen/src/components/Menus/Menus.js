import React from 'react';

import Breakfast from '../Breakfast/Breakfast';
import Meals from '../Meals/Meals';



const Menus = ({menuType, setMenu, breakfast, meals}) => {
    // const { breakfast , meals} = menus;
    //console.log('breakfast', breakfast);
    
    // const item = (type) => {
    //     type.map(item => <li>{item.name}</li >)
    // }
 
    return(
        <section>
            <button className='button' onClick={setMenu('breakfast')}>Breakfast</button>
            <button className='button' onClick={setMenu('meals')}>Meals</button>
            {menuType === 'breakfast' &&
                <Breakfast items={breakfast}/>
            }
            {menuType === 'meals' &&
                <Meals items={meals}/>
            }
        </section>
    )
};

export default Menus;