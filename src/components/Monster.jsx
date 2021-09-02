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
      {
        <img src={ImgMonster} alt="monster" className="monster" style={{gridColumn: this.props.mx, gridRow: this.props.my}} />
      }
      </>

    );
  }
}
export default Monster;


<i aria-hidden="true" class="optin monster big icon"></i>