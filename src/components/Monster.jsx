import React from 'react'
import ImgMonster from '../img/Space.png'
class Monster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
      }
        render() { 
        return ( 
          <>
             <img src={ImgMonster} alt="monster" className="monster" />
             </>

         );
    }
}
export default Monster;