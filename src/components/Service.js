import React from "react";

class Service extends React.Component {
    render() {
        return (<div className="description">
            <h5>{this.props.service.title}</h5>
            <p className="price">{this.props.service.price} BYN</p>
            <p>{this.props.service.description}</p>
        </div>)
    };
}

export default Service;