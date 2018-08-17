import * as React from 'react';
import { Button } from 'evergreen-ui';

import { Footer } from './Footer/index';
import { Header } from './Header/index';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
        <div className="Body">
          <Button appearance="blue">Connect!</Button>
        </div>
      </div>
    );
  }
}
