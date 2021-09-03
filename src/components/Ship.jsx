import React from 'react'
import ImgShip from '../img/ship.png'
import ImgBull from '../img/bullet.png'
import Monster from './Monster'
import Bullet from './Bullet'
import Winner from "./Winner"
import Over from './Over'


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
            bulletHidden: true,
            monsters: [

                { mx: 2, my: 5 },
                { mx: 3, my: 5 },
                // { mx: 4, my: 5 },
                // { mx: 5, my: 5 },
                // { mx: 6, my: 5 },
                // { mx: 7, my: 5 },
                // { mx: 8, my: 5 },
                // { mx: 9, my: 5 },
                // { mx: 10, my: 5 },



                // { mx: 5, my: 2 },
                // { mx: 7, my: 2 },
                // { mx: 6, my: 1 },

                { mx: 6, my: 2 },
                { mx: 7, my: 3 },
                { mx: 3, my: 4 },
                { mx: 4, my: 4 },
                { mx: 5, my: 4 },
                { mx: 6, my: 4 },
                // { mx: 7, my: 4 },
                // { mx: 8, my: 4 },
                // { mx: 9, my: 4 },
                // { mx: 8, my: 3 },

                // { mx: 4, my: 3 },

                // { mx: 5, my: 3 },

                // { mx: 6, my: 3 },

            ],
            stage: "playing"


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

        // if (this.state.onHit) {
        //     this.setState({
        //         onHit: false
        //     })
        // }

        if (!this.state.onHit) {

            for (let i = 0; i < this.state.monsters.length; i++) {

                console.log(this.state.monsters[i], "monster")

                if (this.state.monsters[i].my === this.state.y && this.state.x === this.state.monsters[i].mx) {

                    this.setState({
                        bulletHidden: true,
                        y: 10
                    })

                    this.state.monsters.splice(i, 1)

                    console.log("hit")


                }

                console.log(this.state.monsters, "monster");
                console.log(i, "i");


                if (this.state.monsters.length > 1 && this.state.stage !== "finished" && this.state.monsters.my === 11) {

                    console.log(this.state.monsters[i].my, "my dans if");
                    this.setState({
                        stage: "finished",
                        // monsters: this.state.monsters[3].my

                    })
                }

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

            // console.log(2);

            // if (prevState.bulletHidden !== this.state.bulletHidden && prevProps.y !== this.props.y && this.props.y >= 9 || this.props.y < 2) {
            if (prevState.bulletHidden === this.state.bulletHidden && this.state.bulletHidden === false && this.state.y < 2) {

                this.setState({
                    bulletHidden: true,
                    y: 9
                })

                console.log("condition yes");
            }
        }



        if (this.state.monsters.length === 0 && this.state.stage !== "win") {
            console.log("win");
            this.setState({
                stage: "win",
                
            })

        }







        if (prevState.monsters.my !== this.state.monsters.my)
            setInterval(() => {
                console.log("monster");
                for (let i = 0; i < this.state.monsters.length; i++) {
                    if (this.state.monsters.length > 0) {
                        console.log("monster moove");
                        let monster = this.state.monsters[i]
                        monster.my += 1



                    }

                }
            }, 4000)
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

        if (e.key == " " || e.key == "Space") {


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
        // this.winCondition()

        console.log(this.state);


        return (
            <>
                {this.state.stage === "playing" &&
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


                        {/* {!this.state.onHit &&
                    <Monster mx={this.state.mx} my={this.state.my} x={this.state.x} y={this.state.y} />

                } */}


                        {this.state.monsters.map((elem) => {

                            return (

                                <Monster mx={elem.mx} my={elem.my} />


                            )
                        })}


                        {!this.state.bulletHidden &&
                            <Bullet x={this.state.x} y={this.state.y} isHidden={this.state.bulletHidden} />
                        }
                    </>
                }


                {this.state.stage === "win" &&
                    <Winner />}

                {this.state.stage === "finished" &&
                    <Over />}
            </>

        );
    }
}

export default Ship;

// style={{gridRow: this.state.y}}  