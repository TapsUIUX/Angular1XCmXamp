angular.module('myApp')
.factory('bolgService',function($http,$q,$log){

    var factObj = {};

    factObj.getBlogs = function(data){

        var deferred = $q.defer();

        $http.post('Apis/GetBlogsApi.php').then(function(response){
            deferred.resolve(response.data);

        },function(error){
            return deferred.reject('Error occured in dtat request');
        })

        return deferred.promise;
    };


    factObj.getComments = function(data){

        var deferred = $q.defer();

        $http.post('Apis/GetCommentsApi.php').then(function(response){
            deferred.resolve(response.data);

        },function(error){
            return defered.reject('Error occured in comment request');
        })

        return deferred.promise;
     };



       factObj.postComments = function(comment,id){

        var deferred = $q.defer();

         var comment_data =  {'comment': comment ,'id' : id };

//converting the data in to JSON string
//         comment_data = 'Mydata='+JSON.stringify(comment_data) ;



        $http.post('Apis/PostCommentsApi.php',comment_data).then(function(response){
            deferred.resolve(response.data);

            if(response.data=="done"){
                $log.info('comment inserted')
            }else {
                 $log.warn('comment inserted Bad response' + response.data )
            }

        },function(error){
            return defered.reject('Error occured in comment request');
        })

        return deferred.promise;
    };


//    factObj.CreateBlog = function(data){
//
//        var deferred = $q.defer();
//
//        $http.post('Apis/CreateBlogApi.php',data).then(function(response){
//            deferred.resolve(response.data);
//
//            if(response.data=="done"){
//                $log.info('blog inserted')
//            }else {
//                 $log.warn('blog inserted Bad response' + response.data )
//            }
//
//        },function(error){
//            return defered.reject('Error occured in comment request');
//        })
//
//        return deferred.promise;
//    };
//


    factObj.getBlogRows = function (blogsAdminArray){

            var blogsAdminArray = [
                    {
                        blogHeading: 'This is a blog Heading',
                        blogContent: 'this is the blog content',
                        blogDate: '9/9/2017',
                        newBlogs: 34,
                        totalBlogs: 45,
                        blogLikes: 342
                    },
                    {
                        blogHeading: 'This is a blog Heading',
                        blogContent: 'this is the blog content',
                        blogDate: '9/9/2017',
                        newBlogs: 34,
                        totalBlogs: 45,
                        blogLikes: 342
                    },
                    {
                        blogHeading: 'This is a blog Heading',
                        blogContent: 'this is the blog content',
                        blogDate: '9/9/2017',
                        newBlogs: 34,
                        totalBlogs: 45,
                        blogLikes: 342
                    },
                    {
                        blogHeading: 'This is a blog Heading',
                        blogContent: 'this is the blog content',
                        blogDate: '9/9/2017',
                        newBlogs: 34,
                        totalBlogs: 45,
                        blogLikes: 342
                    }
             ];

        return blogsAdminArray ;


    };

















    return factObj;

})
