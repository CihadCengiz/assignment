import { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import './BookList.css';
import { Link } from 'react-router-dom';
$.DataTable = require('datatables.net');

const ListBook = () => {
  const [books, setBooks] = useState([] as any); //Books Array

  useEffect(() => {
    $('#myTable').DataTable().destroy(); //Destroy DataTable to prevent errors
    $('#myTable').DataTable({
      //Create DataTable after fetch
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
    getBooks();
  }, []);

  //Get Books from Database
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
        <Link to={'/findbook'}><button>Find By Author or Publication Year</button></Link>
      </div>
    </div>
  );
};

export default ListBook;
