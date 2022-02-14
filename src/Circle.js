import React from "react";

export default class Circle extends React.Component {

    render () {

        const CircleStyle = {
            padding: 10,
            margin: 20,
            display: "inline-block",
            backgroundColor: this.props.bgColor,
            borderRadius: "50%",
            width: 100,
            height: 100
        }

        return (
            <div style={CircleStyle}></div>
        )
    }

}