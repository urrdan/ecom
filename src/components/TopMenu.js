import React from 'react';
import {NavLink} from 'react-router-dom'
import Cart from '../svg/cart.svg'
import Home from '../svg/home.svg'
import Search from '../svg/search.svg'
import {Consume} from '../context.js'
const TopMenu = () => {
    return ( 
            <Consume>
                {val=>{
                    
                    const cartTotal=val.data.reduce((total,item)=>total+(item.cart ? 1 : 0),0)
                    return(
                        <div className='TopMenu'>
                            <div className='TopMenu1'>
                                <div className='max-width'>
                                <div>
                                    <NavLink to='/'>
                                        <img src={Home} alt='Home' height='20px'/>
                                    </NavLink>
                                </div>
                                {/* <select className='gender' >
                                    <NavLink to='/detail'><option value= 'XS' >--All--</option></NavLink>
                                    <option value='S'>Men</option>
                                    <option value='M'>Women</option>
                                    <option value='Kids'>Kids</option> 
                                </select> */}
                                <div className='search'>
                                    {<input type='text' placeholder='Search'/>} <img src={Search} alt='Search' height='20px' className='srch'/>
                                </div>
                                <div>
                                    <NavLink to='/cart'>
                                        <img src={Cart} alt='Cart' height='20px'/> <p className='cartTotal'>{cartTotal>0 && `(${cartTotal})`}</p>
                                    </NavLink>
                                </div>
                            </div>
                            </div>
                            <div className='TopMenu2'>
                                <ul>
                                <NavLink to='/men'><li>Men</li></NavLink>
                                <NavLink to='/women'><li>Women</li></NavLink>
                                <NavLink to='/kids'><li>Kids</li></NavLink>
                                </ul>
                            </div>
                        </div>
                    )
                }}
               
            </Consume>
        
    );
}
export default TopMenu;
