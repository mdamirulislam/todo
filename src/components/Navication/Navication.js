import React from 'react';
import './Navication.css'
import { Link } from 'react-router-dom';

const Navication = () => {
    return (
        <div className='container'>
           <nav>
               
               <Link to='/'><p className='option'>Home</p></Link>
              
           
                   <Link to='./chart'><p className='option'>Chart</p></Link>
               
               
                   <Link to='/'><p className='option'>todo</p></Link>
            
           </nav>
        </div>
    );
};

export default Navication;