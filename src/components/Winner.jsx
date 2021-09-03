import React from 'react'
import ImgWin from '../img/winer.jpg'

class Winner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (

            <img src={ImgWin} alt="winner" className="winner" />

        );
    }
}

export default Winner;