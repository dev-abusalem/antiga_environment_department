import React, { Component } from 'react';
import Slider from './Home/Slider';
import Hsec1 from './Home/Hsec1';
import Hsec2 from './Home/Hsec2';
import Hsec3 from './Home/Hsec3';
import Hsec4 from './Home/Hsec4';

export default class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <Hsec1 />
        <Hsec2 />
        <Hsec3 />
        <Hsec4 />
      </>
    )
  }
}
