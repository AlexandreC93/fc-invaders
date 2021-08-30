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

    componentDidMount() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        document.addEventListener('keyup', this.keyUpHandler.bind(this))
    }

    

    keyDownHandler(e) {
        if (e.key === "D" || e.key == "d" || e.key == "ArrowRight" || e.key == "Right") {

            this.setState({
                r: true
            })
        }

        else if (e.key == "Q" || e.key == "q" || e.key == 'ArrowLeft' || e.key == "Left" ) {

            this.setState({
                l: true
            })

        }
        console.log(e.key);
        this.mooveShip()
    }

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
            this.setState({
                r: false
            })
        }
        else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "q" || e.key == "Q") {
            this.setState({
                l: false
            })
        }
        this.mooveShip()
    }

    mooveShip() {
        if (this.state.l === true){
            document.querySelector('#ship').style.left = "10px"
        } else if (this.state.r === true){
            document.querySelector('#ship').style.right = 100+"px";
        }
       
    }



    


    render() {
        console.log(this.state);
        return (

            <div id="ship"
               
                onKeyDown={(e)=> this.keyDownHandler(e)}
                onKeyUp={(e)=> this.keyUpHandler(e)}
                tabIndex="0"
                >
                <img src={ImgShip} alt="ship" className="ship" />
            </div>

        );
    }
}

export default Ship;