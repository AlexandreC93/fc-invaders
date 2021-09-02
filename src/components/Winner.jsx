import React from 'react'
import ImgWinner from '../img/youWin.jpg'


class Winner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (

            <img src={ImgWinner} alt="winner" className="winner" />

        );
    }
}

export default Winner;