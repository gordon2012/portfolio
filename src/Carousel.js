import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0
  };

  handleThumbnailClick = event => {
    this.setState({ active: +event.target.dataset.index });
  };

  render() {
    return (
      <div className="carousel">
        <div className="carousel-larger">
          <img src={this.props.images[this.state.active]} alt="primary" />
        </div>

        {this.props.images.map((image, index) => (
          <div
            key={image}
            className={`carousel-smaller${
              index === this.state.active ? ' active' : ''
            }`}
          >
            {/* eslint-disable-next-line */}
            <img
              alt="thumbnail"
              data-index={index}
              src={image}
              onClick={this.handleThumbnailClick}
            />
            <div className="carousel-fadebox" />
          </div>
        ))}
      </div>
    );
  }
}

export default Carousel;
