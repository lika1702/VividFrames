import React from "react";

class Controller extends React.Component {

    controls = []

    constructor(props) {
        super(props)
        for (let i = 0; i < this.props.count; i++ ) {
            this.controls.push(<div className="square" key={i}></div>)
        }
    }

    render() {
        return (<div className="controls">
            {this.controls}
        </div>)
    };
}

export default Controller;