import React from 'react';
import Navbar from './components/navbar/Navbar';
import Title from './components/welcome/Title';
import Link from './components/welcome/Link';
import AllBooks from './components/allBooks/AllBooks';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Navbar/>
      <Title/>
      <Link
      variant={'info'}
      />
      <AllBooks/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
