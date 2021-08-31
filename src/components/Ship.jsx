import React from 'react'
import ImgShip from '../img/ship.png'

const maxY = 1000
const minY = 0
const maxX = 1000
const minX = 0



class Ship extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            l: false,
            r: false,
            dx: 300,
            y: 30
            

        }

        //  const keys = {
        //      l: false,
        //      r: false,
        //      ['']: false 
        //  }
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.


    componentDidMount() {
        document.addEventListener('keydown', this.keyDownHandler.bind(this))
        document.addEventListener('keyup', this.keyUpHandler.bind(this))
    }



    keyDownHandler(e) {
        if (e.key == "D" || e.key == "d" || e.key == "ArrowRight" || e.key == "Right") {

            this.setState({
                r: true
            })

            this.mooveShip(50)
        }
        else if (e.key == "Q" || e.key == "q" || e.key == 'ArrowLeft' || e.key == "Left") {

            this.setState({
                l: true
            })

            this.mooveShip(50)
        }

        if (e.key == "e" || e.key == "E") {
            let position =  +this.state.y
            setInterval(()=>{

            position += 20
            let div = document.querySelector('#ship')
            let bullet = document.createElement('img')
            bullet.src = '../src/img/bullets.png'
            bullet.classList.add('bullet')
            div.appendChild(bullet)

            
            
            bullet.style.position = "inherit"
            bullet.style.right = "40px"
            bullet.style.bottom = this.state.y + position + "px"

            this.setState({
                y: position
            }) 
            setTimeout(()=>bullet.remove(bullet),500)
            console.log(bullet);
            },500)
            
        }

        console.log(e.key);

    }
    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight" || e.key == "d" || e.key == "D") {
            this.setState({
                r: false
            })

            // this.mooveShip(50)
        }
        else if (e.key == "Left" || e.key == "ArrowLeft" || e.key == "q" || e.key == "Q") {
            this.setState({
                l: false
            })
        }

        // this.mooveShip(50)
    }

    mooveShip(dx) {

        // const ship = document.querySelector('#ship')
        // let shipNumber = 0
        // let leftShip = ship.style.right
        // let rightShip = ship.style.left

        // if (this.state.l){
        //     shipNumber += 50
        //     leftShip = shipNumber + "px"
        //     ship.style.right += leftShip

        //     // console.log(ship)
        //     // console.log(leftShip)
        //     //     console.log(shipNumber);
        // } else if (this.state.r ){
        //     shipNumber += 50
        //     rightShip += shipNumber + "px";
        //     ship.style.left += rightShip
        //     // console.log("cc");

        // }

        const ship = document.querySelector("#ship")

        let position = +this.state.dx;


        if (this.state.l && this.state.dx < 800) {
            position += dx;
            this.setState({ dx: position })
            ship.style.right = this.state.dx + 'px';

        }
        if (this.state.r && this.state.dx > 100) {
            position -= dx;
            this.setState({ dx: position })
            ship.style.right = this.state.dx + 'px'

        }
        console.log(dx);


        // do{
        //     if(this.state.l){
        //         document.querySelector('.ship').style.right += 50 + "px";

        //     }
        //     if(this.state.r){
        //         document.querySelector('.ship').style.left += 50 + "px";
        //     }

        // } while (this.state.l)


    }










    render() {
        console.log(this.state);
        return (

            <div id="ship"

                onKeyDown={(e) => this.keyDownHandler(e)}
                onKeyUp={(e) => this.keyUpHandler(e)}
                tabIndex="0"
            >
                <img src={ImgShip} alt="ship" className="ship" />
            </div>

        );
    }
}

export default Ship;