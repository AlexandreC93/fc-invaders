import React from 'react'
import OverImg from '../img/gameover.jpg'


class Over extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div className="divGame">
                <img className="over" src={OverImg} alt="over" />
            </div>
        );
    }
}

export default Over;