import React from 'react';

import Bullet from './Bullet'
import Monster from './Monster.jsx'
import Ship from './Ship'



class Windows extends React.Component {


    // onKeyDown = (e)=> {
    //     let key = e.keyCode
    //     switch (key){

    //         case 81: 
    //         this.setState({
    //             l: true 
    //         })
    //         break; 

    //         case 68: 
    //         this.setState({
    //             r: true
    //         })
    //         break;
    //         default: 
    //             break;

    //     }
    // }


    render() {

        return (

            <div id="window">
                {/* <Score /> */}


                <Ship />
               

            </div>

        );
    }
}

export default Windows;