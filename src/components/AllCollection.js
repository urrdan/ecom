import React from 'react';
import {Consume} from '../context.js'
import Item from './Item'


const AllCollection = () => {
    return ( 
        <Consume>
            {val=>
                <div className='all-collection'>
                    <h2>ALL COLLECTION</h2>
                    {val.data.map(item=><Item key={item.id} x={item} addCart={val.addCart} addDetail={val.addDetail}/>)}
                </div>
            }
        </Consume>
    );
}

export default AllCollection;


