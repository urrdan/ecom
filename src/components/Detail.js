import React from 'react'
import {Consume} from '../context.js'
import {NavLink} from 'react-router-dom'
const Detail = () => {
    return (
        <Consume>
            {val=>
            <div className='Detail'>
                {val.detail ?
                <div>
                    <div className='detail-head'>
                        <h2>{val.detail.name}</h2>
                        <div className='cart-btns cart-btn-top'>
                            <NavLink to='/cart'><button onClick={val.addCart.bind(this,val.detail.id)}>add to cart</button></NavLink>
                            <NavLink to='/'><button>Cancel</button></NavLink>
                        </div>
                    </div>
                    <div className='detail-info'>
                        
                        <p>{val.detail.details}</p>
                        <p className='size-p'>select size: </p>
                        <select className='size'  onChange={(e)=>{val.size(e,val.detail.id)}}>
                            <option value= 'XS' >XS</option>
                            <option value='S'>S</option>
                            <option value='M'>M</option>
                            <option value='L'>L</option>
                            <option value='XL'>XL</option>
                            <option value='XXL'>XXL</option> 
                        </select>
                        <p className='detail-price'>${val.detail.price}</p>
                        <div className='cart-btns cart-btn-btm'>
                            <NavLink to='/cart'><button onClick={val.addCart.bind(this,val.detail.id)}>add to cart</button></NavLink>
                            <NavLink to='/'><button>Cancel</button></NavLink>
                        </div>
                    </div>
                    <img className='detail-pic' src={require(`../images/${val.detail.pic}`)} alt=''/>
                    {/* <div className='detail-pic' style={{backgroundImage: `url(${require(`../images/${val.detail.pic}`)})` ,backgroundPosition: 'center'  }}></div> */}
                </div>
                :<h2>house</h2> }
            </div>
            }
        </Consume>
    );
}
 
export default Detail