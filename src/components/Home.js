import React, { Component } from 'react';
import Item from './Item'
import {Consume} from '../context.js'
import twitter from '../svg/twitter.svg'
import fb from '../svg/facebook.svg'
import instagram from '../svg/instagram.svg'

class Home extends Component {
    render() { 
        return (
            <div className='Home'>
                <div className='home-intro'>
                    <section>
                        <p>SHOES</p> 
                        <p>That will leave you with a lasting smile</p>  
                    </section>   
                    <div className='contacts'>
                        <img src={twitter} alt='Home' height='25px'/>
                        <img src={fb} alt='Home' height='25px'/>  
                        <img src={instagram} alt='Home' height='25px'/>  
                    </div>       
                </div>

                <Consume>
                        {val=>
                            {
                                const onsale=val.data.filter(item=>{if(item.onsale){return true}})
                                const trending=val.data.filter(item=>{if(item.id>15&&item.id<19){return true}})
                                return [
                                    <h2 className='heading'>On Sale</h2>,
                                    onsale.map(item=><Item key={item.id} x={item} addCart={val.addCart} addDetail={val.addDetail}/>),
                                    <h2 className='heading'>Trendings</h2>,
                                    trending.map(item=><Item key={item.id} x={item} addCart={val.addCart} addDetail={val.addDetail}/>)
                                ]
                            }
                        }
                </Consume>
                <button className='all-btn' onClick={function(){
                    //if(document.querySelector('.all-collection').clientHeight>0){
                    document.querySelector('.all-collection').style.display='block'
                    document.querySelector('.all-btn').style.display='none'
                    //}else{document.querySelector('.all-collection').style.display='block'}
                    }}>See All Collection</button>
                <Consume>
                    {val=>
                        <div className='all-collection'>
                            <h2>ALL COLLECTION</h2>
                            {val.data.map(item=><Item key={item.id} x={item} addCart={val.addCart} addDetail={val.addDetail}/>)}
                        </div>
                    }
                </Consume>
            </div>
        )
    }
}
 
export default Home;