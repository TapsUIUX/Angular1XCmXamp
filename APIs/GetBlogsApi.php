<?php  
ob_start();  

$link=mysqli_connect("localhost","root","","cmsdb");

if(!$link){
    
        die("connection failed".mysqli_error($link));    
    
}


$sql="SELECT * FROM  blogs " ;
      
     $select_all_ad = mysqli_query($link,$sql);
      
      if(!$select_all_ad){
          
          echo "ERROR " .mysqli_error($link);
           
          
           }


$data = array();

                    While($row =  mysqli_fetch_assoc($select_all_ad)) 
                    {
                        
                    $data[] = $row ;                        
                                      
                    }
 
 
 echo json_encode($data);
 

?>