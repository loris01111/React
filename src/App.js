import React, { useState } from 'react';
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

  return (
    <React.Fragment>
      <Navbar onSearch={handleSearch} />
      <Title />
      <Link variant={'info'} />
      <AllBooks books={filteredBooks} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
