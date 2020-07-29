import React from 'react';

const Meals = ({items}) => {
    const menuitems = items.map(item => <li key={item.id}>{item.name}</li>);
    return(
        <div>
            <ul>
               {menuitems} 
            </ul>
        </div>
    )
}

export default Meals;