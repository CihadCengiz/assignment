import { useState } from 'react';
import axios from 'axios';
import './FindBook.css';
import { Link } from 'react-router-dom';

export default function FindBook() {
  const [books, setBooks] = useState([]); //Books Array
  const [author, setAuthor] = useState(''); //Typed Author
  const [year, setYear] = useState<number>(); //Typed Year

  //Set "Year" on input change
  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(e.target.value));
  };

  //Set "Author" on input change
  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  //Get Books from Database based on "Author" and "Year" parameters
  const handleFindBook = async () => {
    await axios
      .get(
        `http://localhost:8080/findbook?author=${author}&year=${
          year === undefined || isNaN(year) ? '' : year
        }`
      )
      .then((response) => setBooks(response.data.data));
  };

  return (
    <div className='wrapper2'>
      <div className='input'>
        <input
          onChange={handleChangeYear}
          name='year'
          placeholder='Year'
          type='number'
        />
        <input
          onChange={handleChangeAuthor}
          name='author'
          placeholder='Author'
          type='text'
        />
        <button onClick={handleFindBook}>Find</button>
        <Link to={'/'}>
          <button>Go Back</button>
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>Title</td>
              <td>Author</td>
              <td>Publication Year</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 &&
              books.map((book: any, idx: number) => {
                return (
                  <tr key={idx}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.publication_year}</td>
                    <td>{book.description}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
