<?php
namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\BookModel;
class Books extends ResourceController
{
    use ResponseTrait;
    public function index()
    {
        $model = new BookModel();
        $data = $model->findAll();      //Find and 
        return $this->respond($data);  //return all books in the database
    }

    public function findBook() {
        $author = $this->request->getGet('author');
        $year = $this->request->getGet('year');
        $model = new BookModel();
        $find = $model->like('author',$author)->like('publication_year', $year)->find(); //Find and return books based on "author" and "year" parameters
         
        if ($find){
            $response = [
                'status' => 200,
                'data'  => $find
            ];
        } else { //OnError response
            $response = [
                'status' => 404,
                'data'  => 'No Data Found'
            ];
        }
        
        return $this->respond($response);
    }
}