 angular.module('myApp')
.directive('getnewdate',function(){
     return{
         restrict :'A',
         template:'{{header}} <span class="label label-danger">New</span>',
         link:function(scope,elem,attrs){
             scope.header = attrs.header ;
         }
     }
 })
.directive('getblogsdir',function(){
     return {
         restrict: 'E',         
         templateUrl:'IncludeComponents/Getblogsdir.html',
         scope:{},
        
          controller:function($scope, $attrs, bolgService, $filter ){
         $scope.filterByLikes = $attrs.filterbylikes;
         $scope.filterByComments = $attrs.filterbycomments;
              
//              console.log($scope.filterByLikes);
//              console.log($scope.filterByComments);
              
              bolgService.getBlogs().then(function(response){
                  
              $scope.getBlogs = response ;
                  
                  if($scope.filterByLikes){
                    $scope.getBlogs = $filter('orderBy')($scope.getBlogs,$scope.filterByLikes,true )
//                      console.log($scope.getBlogs   );
//                      console.log($scope.filterByLikes  ); 
 

                  }
                  
                  if($scope.filterByComments){
                      $scope.getBlogs = $filter('orderBy')($scope.getBlogs,$scope.filterByComments,true)
//                      console.log($scope.getBlogs);
                  }
                  
                  
            },function(){console.log("Failed")});
            
              
         }
     }
 })