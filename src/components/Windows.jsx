import React from 'react';

import Bullet from './Bullet'
import Monster from './Monster'
import Start from './Start'
import Score from './Score'
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
                <Score />
                <div id="ship-cont">
<<<<<<< HEAD
                    
                    <Ship>
                        <Bullet />
                    </Ship>

                </div>


=======
                    <Ship>
                        <Bullet />
                    </Ship>
                </div>
>>>>>>> 644ff221949668ef5586915dcc00fbe9095796c2
            </div>

        );
    }
}

export default Windows;