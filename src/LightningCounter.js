import React from "react";

class LightningCounter extends React.Component {
    constructor ( props ) {
        super ( props ) ;
        
        this.state = {
            strikes : 0
        }

        this.timerTick = this.timerTick.bind ( this ) ;
    }

    render () {
        return (
            <h1>{this.state.strikes}</h1>
        )
    }

    componentDidMount () {
        setInterval ( this.timerTick, 1000 ) ;
    }

    timerTick () {
        this.setState ( ( prevState ) =>  
            {
                return {
                    strikes : prevState.strikes + 1
                }
            } ) ;
    }
}

export default LightningCounter ;