import React from 'react';
import { render } from 'react-dom';
import Button from 'd2-ui/Button';

function App() {
  return (
    <Button variant="raised" color="primary">
      Hello World
    </Button>
  );
}

render(<App />, document.querySelector('#app'));
