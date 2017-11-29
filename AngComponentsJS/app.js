angular.module('myApp', ['ngRoute', 'ui.router'])
    //.config(['$routeProvider',function($routeProvider){
    //    
    //    $routeProvider.when('/signin',{
    //        templateUrl:'IncludeComponents/LoginSignup.html',
    //        controller:'signupCtrl' 
    //    }) .when('/',{
    //        templateUrl:'IncludeComponents/BlogThumbnails.html',
    //        controller:'blogDisplayCtrl'
    //    })
    //    .when('/blog',{
    //        templateUrl:'IncludeComponents/BlogThumbnails.html',
    //        controller:'blogDisplayCtrl'
    //    })
    //     .when('/admin',{
    //        templateUrl:'IncludeComponents/AdminPanelBlogs.html',
    //        controller:'blogAdiminCtrl'
    //    })
    //        .when('/comments',{
    //        templateUrl:'IncludeComponents/AdminPanelComments.html',
    //        controller:'commentAdiminCtrl'
    //    })
    //    
    //     .when('/indblog/:param',{
    //        templateUrl:'IncludeComponents/IndividualBlog.html',
    //        controller:'IndBlogDisplayCtrl'
    //    })
    //    .otherwise({template:'<div> sorry page not found </div>'})
    //}]);
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('signin', {
                    url: '/signin',
                    templateUrl: 'IncludeComponents/LoginSignup.html',
                    controller: 'signupCtrl'
                })

                .state('blog', {
                    url: '/blog',
                    templateUrl: 'IncludeComponents/BlogThumbnails.html',
                    controller: 'blogDisplayCtrl'
                })

                // we are implimenting Views
                .state('admin', {
                    url: '/admin',
                  views : {
                      '':{
                      templateUrl: 'IncludeComponents/AdminPanelBlogs.html',
                      controller: 'blogAdiminCtrl'
                      },
                      'adminForm@admin': {
                                templateUrl: 'IncludeComponents/AdminBlogEntryForm.html'
                                //controller:'adminBlogEntryCtrl'
                            },
                            'adminTable@admin': {
                                templateUrl: 'IncludeComponents/AdminPanelTable.html',
                                //controller:'adminTableCtrl'
                            }                  
                       
                      }

                })
        
        
        
        
//                .state('admin.child', {  // it will inherit the views from parent 
//                        views: {
//                            'child@admin': {
//                                templateUrl: 'IncludeComponents/AdminBlogEntryForm.html'
//                                //controller:'adminBlogEntryCtrl'
//                            }
//                        }
//                    }


           


        .state('home', {
            url: '/home',
            templateUrl: 'IncludeComponents/BlogThumbnails.html',
            controller: 'blogDisplayCtrl'
            })
        .state('indblog', {
            url: '/indblog/:param',
            templateUrl: 'IncludeComponents/IndividualBlog.html',
            controller: 'IndBlogDisplayCtrl'

            //        params:{
            //          param :{value:'1'} // works only with sref, if u not provide it'll make it 1 by default
            //        }



        });
//        .state('otherwise',{
//        url:'*path',
//        template:'<h1> No Page Found , Sorry !!</h1>'                
//        })

    $urlRouterProvider.otherwise('/home');

    }]);