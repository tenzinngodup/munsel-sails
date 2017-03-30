angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.course', {
    url: '/course/:courseId',
    views: {
      'tab2': {
        templateUrl: 'templates/course.html',
        controller: 'courseCtrl'
      }
    }
  })

  .state('tabsController.week1', {
    url: '/week',
    views: {
      'tab1': {
        templateUrl: 'templates/week1.html',
        controller: 'week1Ctrl'
      }
    }
  })

  .state('tabsController.account', {
    url: '/account',
    views: {
      'tab3': {
        templateUrl: 'templates/account.html',
        controller: 'accountCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});