import React from 'react';
import Button from './components/button/Button';
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Button
        title={'Hello'}
        variant='green'
      />
      
    </React.Fragment>
  );
}

export default App;
