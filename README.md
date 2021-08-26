<h1 align="center">Pulse Animation for React Native</h1>
<p align="center">tinder-like pulse animation for your react native app (works on Android & iOS)</p>

<!-- <p align="center">
  <img src="http://i.giphy.com/l0MYz2cMbOryuyPZu.gif" />
</p> -->

### Installation
```bash
npm install https://github.com/mertozylmz/react-native-pulse-anim --save
```
or

```bash
yarn add https://github.com/mertozylmz/react-native-pulse-anim
```

### Example

```js
import React from 'react';
import styles from '../styles';
import PulseAnim from 'react-native-pulse-anim';

const App = ({}) => (
  <PulseAnim style={[styles.container]} avatar={this.props.Img} />
);
```


### API

| Property       | Type          | Default             | Description |
| -------------  |:-------------:|:------------:       | ----------- |
| interval       | number        | 2000                | action buttons visible or not
| size           | number        | 100                 | width and height of the avatar
| pulseMaxSize   | number        | 200                 | maximum size of the pulse in the background
| avatar         | any           | undefined           | **required** avatar url or local path to display
| borderColor    | string        | '#D8335B'           | border color of the pulse
| backgroundColor| string        | '#ED225B55'         | background color of the pulse
