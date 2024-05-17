import React from "react";

class Photo extends React.Component {
    render() {
        return (<div className="photo" style={{ width: 31 + '%', height: 200 + 'px' }}>
            <img src={this.props.photo.imageSrc} alt="Photo" />
            <div className="photo-header">
                <p>{this.props.photo.name}</p>
                <p>{this.props.photo.title}</p>
            </div>
        </div>)
    };
}

export default Photo;