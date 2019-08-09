import React from 'react';
import Item from './Item'
import {Consume} from '../context.js'

class Kids extends React.Component {
    state = {  }
    render() { 
        return (
                <Consume>
                    {val=>{
                        const kids=val.data.filter(item=>{
                            if(item.type.includes('kids')){
                                return true
                            }
                        })

                        return[
                            <div className='Kids'>
                                <h2 className= 'heading'> Kids' Collection</h2>
                                <div className= 'wo-men-kids'>
                                    {kids.map(item=><Item key={item.id} type='kids' x={item} addCart={val.addCart} addDetail={val.addDetail}/>)}
                                </div>
                            </div>

                        ]
                    }}
                        
                </Consume>
            
        );
    }
}
 
export default Kids;