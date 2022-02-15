import React from "react";

import Counter from "./Counter";
import PlusButton from "./PlusButton";

export default class CounterParent extends React.Component {
    constructor ( props ) {
        super ( props ) ;

        this.state = {
            count : 0
        }

        this.encreace = this.encreace.bind ( this ) ;
    }

    encreace ( ev ) {

        console.log ( ev.target ) ;
        console.log ( this ) ;

        this.setState ( prevState => {
            return {
                count : ev.shiftKey ? ( prevState.count + 10 ) : ( prevState.count + 1 )
            }
        } )

    }

    render () {
        
        const backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        }

        return (
            <div style={backgroundStyle}>
                <Counter display = {this.state.count} />
                <PlusButton clickHandler = { this.encreace } />
            </div>
        )
    }
}