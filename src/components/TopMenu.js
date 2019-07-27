import React from 'react';
import {NavLink} from 'react-router-dom'
import Cart from '../svg/cart.svg'
import Home from '../svg/home.svg'
import Search from '../svg/search.svg'
import {Consume} from '../context.js'
import SearchItem from './SearchItem'
const TopMenu = () => {
    return ( 
            <Consume>
                {val=>{
                    document.querySelector('body div').addEventListener('click' ,function(){document.querySelector('.search-result').style.display='none'; console.log('done')} )
                    const chnager= function(el){return val.searcher(el)}

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
                                    <img src={Search} alt='Search' height='20px' className='srch'/>
                                    <input type='text' placeholder='Search' className='inpute'
                                        //onBlur={function(e){setTimeout(function(){e.target.value=''; return val.searcher(e)},200)}} //takes me to details but breakes e is null
                                        
                                        
                                        onChange={function(el){chnager(el); document.querySelector('.search-result').style.display='block'} }//works
                                        
                                        //onChange={function(e){return function(){return val.searcher(e)}}} //doesnt work

                                        
                                    /> 
                                    

                                    <div className='search-result'>
                                    <Consume>
                                        {val=>
                                            val.search.map(item=><SearchItem key={item.id} x={item} addCart={val.addCart} addDetail={val.addDetail}/>)
                                        
                                        }
                                        
                                    </Consume>
                                    </div>
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
