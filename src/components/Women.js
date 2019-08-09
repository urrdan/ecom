import React from 'react';
import Item from './Item'
import {Consume} from '../context.js'

class Women extends React.Component {
    state = {  }
    render() { 
        return (
                <Consume>
                    {val=>{
                        const women=val.data.filter(item=>{
                            if(item.type.includes('women')){
                                return true
                            }
                        })

                        return[
                            <div className='Women'>
                                <h2 className= 'heading'> Women's Collection</h2>
                                <div className= 'wo-men-kids'>
                                    {women.map(item=><Item key={item.id} type='women' x={item} addCart={val.addCart} addDetail={val.addDetail}/>)}
                                </div>
                            </div>

                        ]
                    }}
                        
                </Consume>
            
        );
    }
}
 
export default Women;