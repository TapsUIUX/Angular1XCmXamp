angular.module('myApp')
    .controller('blogDisplayCtrl', ['$scope', 'bolgService', function ($scope, bolgService) {

        bolgService.getBlogs().then(function (response) {
            $scope.getBlogs = response;
        }, function () {
            console.log("Failed")
        });

}])


.controller('blogAdiminCtrl', ['$scope','$rootScope', 'bolgService', '$log', '$q', '$http', function ($scope,$rootScope, blogService, $log, $q, $http) {
        
        //$scope.getBlogRows = blogService.getBlogRows();
    
        blogService.getBlogs().then(function (response) {
                        $scope.getblogTableRows = response;
//                        var blogData = $scope.getblogTableRows2;
//                        $log.info('from $brodcast :' , blogData);
//                        $rootScope.$broadcast("getblogTableRows",blogData);
//            
            //Brodcast is used to communicat between controller... Brodcast, Emit on
            
            
        }, function () {
            $log.info("blogService call failed in blogAdiminCtrl L-23-C-JS")
        });
        
        
        //var blogData = $scope.getblogTableRows;
        //$log.info($scope.getblogTableRows);
        //$rootScope.$broadcast("getblogTableRows",blogData);        
        

        $scope.createblogForm = {};

        $scope.CreateBlogSubmit = function (input) {

            $log.info("displayying:", input);

            var deferred = $q.defer();

            $http.post('Apis/CreateBlogApi.php', input).then(function (response) {
                deferred.resolve(response.data);
                $log.info(response);

                if (response.data == "done") {
                    $log.info('blog inserted');
                    $scope.createblogForm = {};

                } else {
                    $log.warn('blog inserted Bad response' + response.data)
                }

            }, function (error) {
                return defered.reject('Error occured in comment request');
            })

            return deferred.promise;



            // We will check this later why the scope in failing to invoke blog service thru FORM

            //        bolgService.CreateBlog(input).then(function(response){
            //          console.log(response ) ;
            //            },function(){console.log("Failed")});




        }

}])

//

.controller('adminTableCtrl',['$scope','$rootScope','$http','$log','$timeout','$state',function($scope,$rootScope,$http,$log,$timeout,$state){
    
    
//   $scope.$on("getblogTableRows",function(e,blogData){
//        $log.info( 'from $on :',blogData);
//             $scope.getblogTableRow = blogData ; 
//       return blogData ;
//            // $scope.$apply($scope.getblogTableRow);
//        //$log.info( 'from $on :',$scope.getblogTableRow);
//        })
    
   
    // $scope.getblogTableRow = blogData ;
     
 // $timeout(function(){$log.info( 'from admintC ' + $scope.$parent.getblogTableRow)},500);
//    
//    $scope.getblogTableRows =  $scope.$parent.getblogTableRows ;
    
//         $scope.$parent.bolgService.then(function (response) {
//            $scope.getblogTableRows = response;
//        }, function () {
//            $log.info("Failed")
//        });
    
    
//     $scope.$parent.bolgService.getBlogs().then(function (response) {
//            $scope.getblogTableRows = response;
//        }, function () {
//            $log.info("Failed")
//        });
    
}])



    .controller('signupCtrl', ['$scope', function ($scope) {

        $scope.signupFormObj = {
            userName: ''
        }

        $scope.formSubmitted = function (formData) {

            console.log("forsubmitted");
        };


}])
    .controller('IndBlogDisplayCtrl', ['$scope', '$routeParams', '$stateParams', 'bolgService', '$filter', '$log', '$route', '$state', function ($scope, $routeParams, $stateParams, bolgService, $filter, $log, $route, $state) {

        // $scope.indBlogParam = $routeParams.param;  
        $scope.indBlogParam = $stateParams.param;

        bolgService.getBlogs().then(function (response) {
            $scope.getIndBlogs = response;

            $scope.getIndBlogs = $filter('filter')($scope.getIndBlogs, {
                'blogId': $scope.indBlogParam
            })

            //console.log($scope.getIndBlogs);     

        }, function () {
            console.log("Failed")
        });



        bolgService.getComments().then(function (response) {

            $scope.getComments = response;

            $scope.getComments = $filter('filter')($scope.getComments, {
                'comment_blog_id': $scope.indBlogParam
            })

            //console.log($scope.getComments);     

        }, function () {
            console.log("Failed")
        });


        $scope.comments_content = "";


        $scope.postComments = function (comments, id) {

            bolgService.postComments(comments, id).then(function (response) {

                //$log.info("inserted")
                $scope.comments_content = "";

                //$route.reload();
                $state.reload();
                //$scope.$apply;
                //$state.transitionTo('indblog');
                //$state.transitionTo($state.current, $state.$current.params, { reload: true, inherit: true, notify: true });

            });


            //$state.go('redirect', {to: $state.current.name}, {reload: true}); 
        }

        $scope.reset = function () {
            $scope.comments_content = "";
        }




 }])


;