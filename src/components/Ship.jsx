import React from 'react'
import ImgShip from '../img/ship.png'

const maxY = 1000
const minY = 0
const maxX = 1000
const minX = 0



class Ship extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            l: false,
            r: false,
            ['']: false 
         }

        //  const keys = {
        //      l: false,
        //      r: false,
        //      ['']: false 
        //  }
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    c

    
    componentWillMount() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
    }


    keyDownHandler(e) {
        if (e.key === "D" || e.key == "d") {

            this.setState({
                r: true
            })
        }

        else if (e.key == "Q" || e.key == "q") {

            this.setState({
                l: true
            })

        }
        console.log(e.key);
    }

    // keyUpHandler(e) {
    //     if (e.key == "Right" || e.key == "ArrowRight") {
    //         this.setState({
    //             r: false
    //         })
    //     }
    //     else if (e.key == "Left" || e.key == "ArrowLeft") {
    //         this.setState({
    //             l: false
    //         })
    //     }
    // }

    render() {
        console.log(this.state);
        return (

            <div id="ship"
               
                onKeyDown={(e)=> this.keyDownHandler(e)}
                tabIndex="0">
                <img src={ImgShip} alt="" className="ship" />
            </div>

        );
    }
}

export default Ship;