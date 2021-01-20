import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import zero from './img/zero.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={zero}
                        alt="Water"
                    />
                    <Carousel.Caption>
                        <h3>Water Images</h3>
                        <p>Drinking water is a clear liquid without taste,
                        color and smell, which is intended for safe consumption, cooking and drinks.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        )
    }
}