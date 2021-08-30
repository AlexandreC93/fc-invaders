import React from 'react';

import Bullet from './Bullet'
import Monster from './Monster'
import Start from './Start'
import Score from './Score'
import Ship from './Ship'

class Windows extends React.Component {
    
    state = {  }
    render() { 
        return ( 

            <div id="window">
            <Ship/>
            </div>

         );
    }
}
 
export default Windows;