import { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import './BookList.css';
$.DataTable = require('datatables.net');

const ListBook = () => {
  const [books, setBooks] = useState([] as any);

  useEffect(() => {
    $('#myTable').DataTable().destroy();
    $('#myTable').DataTable({
      scrollX: false,
      tabIndex: 0,

      columns: [
        {
          data: 'title',
          title: 'Title',
        },
        {
          data: 'author',
          title: 'Author',
        },
        {
          data: 'publication_year',
          title: 'Publication Year',
        },
        {
          data: 'description',
          title: 'Description',
        },
      ],
      data: books,
    });
  }, [books]);

  useEffect(() => {
    console.log(books);
  }, [books]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    await axios
      .get('http://localhost:8080/books')
      .then((response) => setBooks(response.data));
  };

  return (
    <div className='wrapper'>
      <table className='display' id='myTable'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publication Year</th>
            <th>Description</th>
          </tr>
        </thead>
      </table>
      <div>
        <a href='/findbook'>
          <button>Find By Author or Publication Year</button>
        </a>
      </div>
    </div>
  );
};

export default ListBook;
