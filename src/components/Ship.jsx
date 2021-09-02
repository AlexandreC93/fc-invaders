import React from 'react'
import ImgShip from '../img/ship.png'
import ImgBull from '../img/bullet.png'
import Monster from './Monster'
import Bullet from './Bullet'


class Ship extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dx: 6,
            y: 9,
            x: 6,
            mx: 6,
            my: 7,
            onHit: false,
            bulletHidden: true
        }

        // this.didUpdate = false
        //  const keys = {
        //      l: false,
        //      r: false,
        //      ['']: false 
        //  }

        this.keyDownHandler = this.keyDownHandler.bind(this)
    }

    componentDidUpdate(prevProps, prevState) {

        if (!this.state.onHit) {

            if (this.state.y === this.state.my && this.state.x === this.state.mx) {
                this.setState({
                    onHit: true,
                    y: 10
                })
                console.log("hit");

            }
        }

        if (this.state.y > 1 && this.state.y <= 8 && prevState.y !== this.state.y) {

            setTimeout(() => {
                let position = +this.state.y

                position -= 1

                this.state.y -= position

                this.setState({
                    y: position
                })
                // console.log(position, "salut");
            }, 300)


        } else {

            console.log(2);

            // if (prevState.bulletHidden !== this.state.bulletHidden && prevProps.y !== this.props.y && this.props.y >= 9 || this.props.y < 2) {
            if (prevState.bulletHidden === this.state.bulletHidden && this.state.bulletHidden === false && this.state.y < 2) {

                this.setState({
                    bulletHidden: true,
                    y: 9
                })

                console.log("condition yes");
            }
        }

    }




    // mooveMonster = () => {

    //     let position = +this.state.mx


    //     this.setState({
    //         mx: position
    //     })
    // }

    keyDownHandler(e) {
        if ((e.key == "D" || e.key == "d" || e.key == "ArrowRight" || e.key == "Right") && this.state.dx < 11) {

            this.setState({ dx: this.state.dx + 1 })
        }
        else if ((e.key == "Q" || e.key == "q" || e.key == 'ArrowLeft' || e.key == "Left") && this.state.dx > 1) {

            this.setState({ dx: this.state.dx - 1 })
        }
        // console.log(
        //     "before", this.state.y);

        if (e.key == " " || e.key == "Space" ) {


            let position = +this.state.y

            position -= 1

            this.state.y -= position

            this.setState({
                y: position,
                x: this.state.dx,
                bulletHidden: false
            })

            // console.log(this.state.y);


            // setTimeout(()=>
            // document.getElementsByClassName('bullet').remove
            // , 5000)

        }

        // console.log(e.key);

    }


    render() {
        // monsterMoove()

        // console.log(this.state);
        return (
            <>
                <div id="ship"
                    onKeyDown={(e) => this.keyDownHandler(e)}
                    tabIndex="0"
                    style={{ gridColumn: this.state.dx }}
                >

                    <img src={ImgShip} alt="ship" className="ship" />
                </div>
                {/* <img src={ImgBull} alt="bullet" className="bull-img" style={{
                    gridColumn: this.state.x, gridRow: this.state.y,
                    display: this.state.y >= 9 && "none"
                }} /> */}

                {!this.state.onHit &&
                    <Monster mx={this.state.mx} my={this.state.my} x={this.state.x} y={this.state.y} />
                    
                }
                {!this.state.onHit &&
                    <Monster mx={this.state.mx} my={this.state.my} x={this.state.x} y={this.state.y} />
                    
                }
                {!this.state.onHit &&
                    <Monster mx={this.state.mx} my={this.state.my} x={this.state.x} y={this.state.y} />
                    
                }
                {!this.state.onHit &&
                    <Monster mx={this.state.mx} my={this.state.my} x={this.state.x} y={this.state.y} />
                    
                }

                {!this.state.bulletHidden &&
                    <Bullet x={this.state.x} y={this.state.y} isHidden={this.state.bulletHidden} />
                }
            </>

        );
    }
}

export default Ship;

// style={{gridRow: this.state.y}}  