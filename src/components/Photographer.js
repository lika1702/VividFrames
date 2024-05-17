import React from "react";

class Photographer extends React.Component {
    render() {
        return (<div>
            <img src={this.props.imageSrc} alt="Фотограф" />
            <h4>{this.props.name}</h4>
            <p>{this.props.credo}</p>
        </div>)
    };
}

export default Photographer;