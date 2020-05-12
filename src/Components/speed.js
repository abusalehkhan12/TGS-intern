import React, { Component } from 'react'
import ReactSpeedometer from "react-d3-speedometer"
import axios from 'axios'

class speed extends Component {
    constructor(){
        super()
        this.state={
            speed:0,
        }
        //Comment It
        this.speedy=this.speedy.bind(this)
    }

    componentDidMount() {
        //Comment It
        setInterval(this.speedy,3000)
       /*
        setInterval(this.speedapi,3000)
        
        function speedapi(){
        let max=300
        axios.get('http://localhost:5000/')
        .then(res=>{
            this.state.speed=res.data
            this.state.speed=this.state.speed*max
            console.log(this.state.speed)
        })
        }
        */
    }
    //Comment the function
    speedy (){
        const max=300
        this.setState({
            speed: Math.random()*max
        })
    }
    render() {
        return (
            <div>
                <ReactSpeedometer
                    maxValue={300}
                    value={parseInt(this.state.speed)}
                    needleColor="red"
                    startColor="green"
                    segments={10}
                    endColor="red"
                    needleTransitionDuration={2500}
                    textColor="white"
                    ringWidth={10}
                    currentValueText="Speed"
                />
            </div>
        )
    }
}

export default speed
