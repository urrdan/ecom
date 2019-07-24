import React from 'react';
import Item from './Item'
import {Consume} from '../context.js'

class Men extends React.Component {
    state = {  }
    render() { 
        return (
                <Consume>
                    {val=>{
                        const men=val.data.filter(item=>{
                            if(item.type.includes('men')){
                                return true
                            }
                        })

                        return[
                            <div className='Men'>
                                <h2 className= 'heading'> Men's Collection</h2>
                                <div className= 'wo-men-kids'>
                                    {men.map(item=><Item key={item.id} type='men' x={item} addCart={val.addCart} addDetail={val.addDetail}/>)}
                                </div>
                            </div>

                        ]
                    }}
                        
                </Consume>
            
        );
    }
}
 
export default Men;