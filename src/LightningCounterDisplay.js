import React from "react";

import LightningCounter from "./LightningCounter.js" ;

class LightningCounterDisplay extends React.Component {
    render () {
        const divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        } ;

        const textStyles = {
            emphasis: {
                fontSize: 38,
                margin: 0,
                padding: 0 
            },
            smallEmphasis: {
                margin: 0,
                padding: 0
            },
            small: {
                fontSize: 17,
                opacity: 0.5,
                margin: 0,
                padding: 0
            }
        };

        return (
            <div style = {divStyle}>
                <LightningCounter />
                <h2 style={textStyles.smallEmphasis}>ВСПЫШКИ МОЛНИИ</h2>
                <h2 style={textStyles.emphasis}>НА ПЛАНЕТЕ</h2>
                <p style={textStyles.small}>(с момента запуска пользовательского кода)</p>
            </div>
        )
    }
}

export default LightningCounterDisplay ;