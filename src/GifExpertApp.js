import React, {  useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

//   const categories = ['One Puch', 'Samurai X', 'Dragon Ball'];

  const [categories, setCategories] = useState(['One Puch']);


//   const handleAdd = () => {
//       setCategories( [ 'HunteXHunter', ...categories] );
//   }

    return (
       <>
           <h2>GifExpertApp</h2>
           <AddCategory setCategories={ setCategories } />
           <hr/>
      
         
{/* React me pide que tenga un key para identificar cada elemento. La buena práctica es ponerlo así como está dentro del <li></li> */}
        <ul> 
           { 
             categories.map( category =>  (
                           <GifGrid 
                           key={category}
                           category= { category }
                          
                 />
             ))
           
           }

        </ul>


        </>
      
    )
}

export default GifExpertApp;
