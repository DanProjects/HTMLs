<?php
class synchronizer{
    private $serv;
    private $root;
    private $pass;
    private $db;
    private $connect;
    protected function sync(){
        $this->serv = "localhost";
        $this->root = "root";
        $this->pass = "Rdk77anf";
        $this->db = "test";
        $this->connect = new mysqli($this->serv,$this->root,$this->pass,$this->db);
        return $this->connect;
    }
}
?>