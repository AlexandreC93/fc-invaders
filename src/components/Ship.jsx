import React from 'react'
import ImgShip from '../img/ship.png'
import ImgBull from '../img/bullet.png'

const maxY = 1000
const minY = 0
const maxX = 1000
const minX = 0

class Ship extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dx: 6,
            y: 9,
            mx: 6,
            x: 6
        }

        //  const keys = {
        //      l: false,
        //      r: false,
        //      ['']: false 
        //  }

        this.keyDownHandler = this.keyDownHandler.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.y > 1 && this.state.y <= 8) {
            setTimeout(() => {
                let position = +this.state.y

                position -= 1

                this.state.y -= position

                this.setState({
                    y: position
                })
                console.log(position, "salut");
            }, 300)

        }
    }

    keyDownHandler(e) {
        if ((e.key == "D" || e.key == "d" || e.key == "ArrowRight" || e.key == "Right") && this.state.dx < 11) {

            this.setState({ dx: this.state.dx + 1 })
        }
        else if ((e.key == "Q" || e.key == "q" || e.key == 'ArrowLeft' || e.key == "Left") && this.state.dx > 1) {

            this.setState({ dx: this.state.dx - 1 })
        }
        // console.log(
        //     "before", this.state.y);

        if (e.key == "e" || e.key == "E" && this.state.y < 230) {


            let position = +this.state.y

            position -= 1

            this.state.y -= position

            this.setState({
                y: position,
                x: this.state.dx
            })

            // console.log(this.state.y);


            // setTimeout(()=>
            // document.getElementsByClassName('bullet').remove
            // , 5000)

        }

        console.log(e.key);

    }


    render() {
        // monsterMoove()
        console.log(this.state);
        return (
            <>
                <div id="ship"
                    onKeyDown={(e) => this.keyDownHandler(e)}
                    tabIndex="0"
                    style={{ gridColumn: this.state.dx }}>

                    <img src={ImgShip} alt="ship" className="ship" />
                </div>
                <img src={ImgBull} alt="bullet" className="bull-img" style={{ gridColumn: this.state.x, gridRow: this.state.y,
                  display: this.state.y >= 9 && "none"}}  />
            </>

        );
    }
}

export default Ship;

// style={{gridRow: this.state.y}}