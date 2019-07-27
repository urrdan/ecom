import React from 'react';
import Data from './Data.js';

var myContext= React.createContext()

class Provide  extends React.Component {
    constructor(){
        super()
        this.state = { 
            data: Data,
            detail: '',
            search: []
        }
        this.addCart=this.addCart.bind(this)
        this.removeCart=this.removeCart.bind(this)
        this.addDetail=this.addDetail.bind(this)
        this.quantity=this.quantity.bind(this)
        this.size=this.size.bind(this)
        this.searcher=this.searcher.bind(this)
    }
    addCart(id){
        this.setState(prev=>{
            const updated = prev.data.map(item=>{
                if(item.id===id){
                    item.cart=true
                }
                return item
            })
            return {data: updated}
        })
    }

    removeCart(id){
        this.setState(prev=>{
            const updated=prev.data.map(item=>{
                if(item.id===id){
                    item.cart=false
                }
                return item
            })
            return {data: updated}
        })
    }

    addDetail(id){
        this.setState(prev=>{
            const updated=prev.data.filter(item=>{
                if(item.id===id){
                    return true
                }
            })
            return {detail: updated[0]}
        })
        console.log('excited')
    }

    quantity (e,id) {
        e.persist()
        this.setState(prev=>{
            const updated=prev.data.map(item=>{
                if(item.id===id){
                    item.quantity= e.target.value
                }
                return item
            })
            return {data: updated}
        
        })
        
    } 
    size (e,id) {
        e.persist()//need to learn more about this interesting phenomenon
        this.setState(prev=>{
            const updated=prev.data.map(item=>{
                if(item.id===id){
                    item.size= e.target.value
                }
                return item
            })
            return {data: updated}
        
        })
        
    } 
    searcher (e) {
        e.persist()//need to learn more about this interesting phenomenon
        this.setState(prev=>{
            var valstr=e.target.value.toLowerCase()
            console.log('searcher')
            if(!valstr){console.log('e==')}
            const updated=prev.data.filter(item=>{
                if(item.name.toLowerCase().includes(valstr) && valstr ){
                    var n=item.name.toLowerCase().indexOf(valstr)
                    var le=valstr.length
                    item.subname1=item.name.slice(0,n)
                    item.subname2=item.name.slice(n,n+le)
                    item.subname3=item.name.slice(n+le)
                    
                    //console.log('in')
                    return true
                }
                //return item

            })
            //console.log(this.state.search)
            return {search: updated}
            
            
            
        
        })
    } 


    render() { 
        return ( 
            <myContext.Provider value={{
                data:this.state.data, addCart:this.addCart,removeCart:this.removeCart,addDetail:this.addDetail,
                detail:this.state.detail, quantity:this.quantity, size:this.size, searcher:this.searcher, search:this.state.search
            }}>
                {this.props.children}
            </myContext.Provider>
         )
    }
}

const Consume= myContext.Consumer
export {Consume,Provide};