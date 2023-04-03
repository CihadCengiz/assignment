<?php
namespace App\Database\Migrations;
use CodeIgniter\Database\Migration;
class Books extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id'    => [
                'type'          => 'INT',
                'constraint'    => 11,
                'auto_increment'    => True
            ],
            'title'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 200
            ],
            'author'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 200,                
            ],
            'publication_year'    => [
                'type'          => 'INT',
                'constraint'    => 4,                
            ],
            'description'    => [
                'type'          => 'VARCHAR',
                'constraint'    => 200,                
            ]
        ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('books', true);
    }
    public function down()    
    {        
        $this->forge->dropTable('books');
    }
}