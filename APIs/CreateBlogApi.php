<?php  
ob_start();  

 
 //if($HTTP_RAW_POST_DATA){ 
    
   
  //$json_input_data= json_decode(file_get_contents('php://input'),TRUE);
 $json_input_data= (array)json_decode(trim(file_get_contents('php://input')));
//Extracting from array   
 $blogHeading = $json_input_data['blogHeading'] ;
 $blogContent = $json_input_data['blogContent'] ;
 $blogAuthor = $json_input_data['blogAuthor'] ;
 
    
 //}

//echo $blogHeading."---". $blogAuthor."---".$blogContent;
// Check if the fields are empty ?

if($blogHeading && $blogContent){
$link = mysqli_connect("localhost","root","","cmsdb");
}else {echo "Empty";}


//Check Injection error
$blogHeading =  mysqli_real_escape_string ($link,$blogHeading);
$blogAuthor  =  mysqli_real_escape_string ($link,$blogAuthor);
$blogContent =  mysqli_real_escape_string ($link,$blogContent);

 

//Checkif linked
if(!$link){
    
        die("connection failed".mysqli_error($link));    
    
          }else{
     
// Check if already present

$sql=" ";
$sql= "INSERT INTO blogs (blogAuthor,blogHeading,blogContent ) VALUES  ";
$sql .= "  ( '$blogAuthor','$blogHeading' ,'$blogContent' ) " ;
  
//firing the query
    
$fire= mysqli_query($link,$sql);
    
//confirming the if succesfull    
  
if(!$fire){    
    die("Error".mysqli_error($link));    
}     
     
echo "done" ;
    
}
  
 
?>