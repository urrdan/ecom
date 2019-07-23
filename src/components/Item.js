import React from 'react';
import {NavLink} from 'react-router-dom'

const Item = (prop) => {
    return (
        <div className='Item'>
            <div className='pic'>
                <div className='pic-bg'></div>
                <NavLink to='/detail'><img src={require(`../images/${prop.x.pic}`)}  onClick={prop.addDetail.bind(this,prop.x.id)} alt=''/></NavLink>
            </div>
            <section>
                <p>important</p>
                <h1>{prop.x.name}</h1> 
                <h3>${prop.x.price}</h3>
            </section>
        </div>
        
    )
}
 
export default Item;