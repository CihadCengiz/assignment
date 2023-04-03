import { useState } from 'react';
import axios from 'axios';
import "./FindBook.css"

export default function FindBook() {
  const [books, setBooks] = useState([]);
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState<number>();

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(parseInt(e.target.value));
  };

  const handleChangeAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

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
        <a href='/'><button>Go Back</button></a>
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
