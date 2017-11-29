<?php  
ob_start();
   
 $json_input_data= (array)json_decode(trim(file_get_contents('php://input')));

//Extracting from array   
 $comment_content = $json_input_data['comment'] ;
 $comment_for_blog_id = $json_input_data['id'] ;

  
if($comment_content){
$link = mysqli_connect("localhost","root","","cmsdb");
}else {echo "Empty";}


//Check Injection error
$comment_content =  mysqli_real_escape_string ($link,$comment_content);
$comment_for_blog_id =  mysqli_real_escape_string ($link,$comment_for_blog_id);

  
//Checkif linked
if(!$link){
    
        die("connection failed".mysqli_error($link));    
    
          }else
    
// insert

{  

//declaring SQL    
$sql=" ";
$sql= "INSERT INTO blog_comments (comment_blog_id,comment_content,comment_status) VALUES  ";
$sql .= "  ( $comment_for_blog_id ,'$comment_content', 1 ) " ;
 
//firing the query
    
$fire= mysqli_query($link,$sql);
  
//confirming the if succesfull    
  
if(!$fire){
    echo  $comment_content ;
    die("Error".mysqli_error($link));
    
}     
     
echo "done" ;
}

 
 

?>