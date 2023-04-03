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
        $data = $model->findAll();
        return $this->respond($data);
    }

    public function findBook() {
        
        $author = $this->request->getGet('author');
        $year = $this->request->getGet('year');
        $model = new BookModel();
        $find = $model->like('author',$author)->like('publication_year', $year)->find();
         
        if ($find){
            $response = [
                'status' => 200,
                'error' => null,
                'data'  => $find
            ];
        } else {
            $response = [
                'status' => 404,
                'error' => null,
                'data'  => 'No Data Found'
            ];
        }
        
        return $this->respond($response);
    }
}