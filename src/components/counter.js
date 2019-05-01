import React,{Component} from 'react';

const style ={
    display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   marginTop: '70px'
}

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            seconds: "00",
            value: "00",
        }
    }
    componentWillUnmount = ()  => {
        clearInterval(this.timer)
    }
    
    startTick() {
        var min = Math.floor(this.calculateTime/ 60);
        var sec = this.calculateTime- min * 60;
        this.setState({
          value: min,
          seconds: sec
        });

        if (sec < 10) {
            this.setState({
            seconds: "0" + this.state.seconds
          });
        }

        if (min < 10) {
            this.setState({
            value: "0" + min
          });
        }
        this.calculateTime++;
      }
    
      startCountDown() {
        this.timer = setInterval(() => {this.startTick()}, 100);
        let time = this.state.value;
        this.calculateTime = time * 60;
      }

      stopCountDown () {
        clearInterval(this.timer)
      }

    render(){
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems: 'center',justifyContent: 'center'}}>
                <div 
                    className= 'ui content' 
                    style={{textAlign:'center'}}>
                    <h1>
                        {this.state.value}:{this.state.seconds}
                    </h1>
                </div>
                <div 
                style={style}>
                    <button 
                        className = 'ui basic button blue' 
                        onClick ={() =>this.startCountDown()}
                    >
                        START
                    </button>
                    <button 
                        className = 'ui basic button red' 
                        onClick={()=>this.stopCountDown()}
                    >
                        SOTP
                    </button>
                </div>
            </div>
        );
    }
}