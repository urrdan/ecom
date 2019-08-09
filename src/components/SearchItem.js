import React from 'react';
import {NavLink} from 'react-router-dom'

const SearchItem = (prop) => {
    return (
        <div className='SearchItem' onClick={function(){prop.addDetail.call(this,prop.x.id); document.querySelector('.search-result').style.display='none'}}>
            <NavLink to='/detail'>
            <img src={require(`../images/${prop.x.pic}`)}   alt=''/>
            {/* <p>{prop.type}</p> */}
            <p className='search-name'><span>{prop.x.subname1}</span><span>{prop.x.subname2}</span><span>{prop.x.subname3}</span></p>
            <p className='search-price'>${prop.x.price}</p>
            </NavLink>
        </div>
        
    )
}
 
export default SearchItem;