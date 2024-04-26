import React, { useState, useEffect, useContext } from 'react';
import Navbar from './components/navbar/Navbar';
import Title from './components/welcome/Title';
import Link from './components/welcome/Link';
import AllBooks from './components/allBooks/AllBooks';
import Footer from './components/footer/Footer';
import fantasyBooks from './dataBooks/fantasy.json';
import historyBooks from './dataBooks/history.json';
import horrorBooks from './dataBooks/horror.json';
import romanceBooks from './dataBooks/romance.json';
import scifiBooks from './dataBooks/scifi.json';
import { ThemeContext } from '../src/contexts/ThemContext';

const arrayAllBooks = [...fantasyBooks, ...historyBooks, ...horrorBooks, ...romanceBooks, ...scifiBooks];

const App = () => {
  const [books, setBooks] = useState(arrayAllBooks);
  const [filteredBooks, setFilteredBooks] = useState(arrayAllBooks);
  const [booksNotFiltered, setBooksNotFiltered] = useState(arrayAllBooks); // Stato per i libri non filtrati

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredBooks(booksNotFiltered); // Ripristino i libri non filtrati quando l'input di ricerca è vuoto
    } else {
      const filtered = arrayAllBooks.filter((book) => {
        return book.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredBooks(filtered);
    }
  };

  const {isDarkMode} = useContext(ThemeContext);

  const changeBgBody = () => {
    isDarkMode? document.body.classList.add('bg-black') : document.body.classList.remove('bg-black');
  }

  useEffect(() => {
    changeBgBody();
  },[isDarkMode])


  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Title />
      <Link variant="danger" text="This is where you can find whatever you like" />
      <AllBooks books={filteredBooks} />
      <Footer />
    </>
  );
}

export default App;
