import * as React from 'react';

import { Footer } from './Footer/index';
import { Header } from './Header/index';
import { Body } from './Body/index';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <Body />
      </div>
    );
  }
}
