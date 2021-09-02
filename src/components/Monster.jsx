import React from 'react'
import ImgMonster from '../img/Space.png'



class Monster extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {}
  }


  render() {
    return (
      <>
      
        <img src={ImgMonster} alt="monster" className="monster" />
      </>

=======
    this.state = {
      
    }
  }
  render() {
    return (
      <>
      {
        <img src={ImgMonster} alt="monster" className="monster" style={{gridColumn: this.props.mx, gridRow: this.props.my}} />
      }
      </>

>>>>>>> bd0c4da72580079c219991ae5fdb3c8d0e378307
    );
  }
}
export default Monster;


<i aria-hidden="true" class="optin monster big icon"></i>