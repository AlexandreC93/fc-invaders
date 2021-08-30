import React from 'react';

import Bullet from './Bullet'
import Monster from './Monster'
import Start from './Start'
import Score from './Score'
import Ship from './Ship'

class Windows extends React.Component {

    constructor(props){
        super(props)
        this.state = { 
            l: false,
            r: false
         }

    }

    setY = (y) => {
        this.y = y
    }

    mooveKey = (e) =>{
        if(e.keyC === "q"||"Q"){
            this.setState({
                l: true
            })
            console.log("q");
        }

        if(e.key === "d"||"D"){
            this.setState({
                r: true
            })
            console.log("d");
        }
        
    }
    render() { 
        return ( 

            <div id="window">
            <Ship key={this.mooveKey}/>
            </div>

         );
    }
}
 
export default Windows;