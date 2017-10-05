// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module(
  'bniDirect',['ionic','ionic.closePopup','ionic.contrib.drawer', 'ionic-datepicker',
    'bniDirect.LoginCtrl',
    'bniDirect.MenuCtrl',
    /*'bniDirect.LandingPageCtrl',*/
    'bniDirect.PendingTaskCtrl',
    'bniDirect.BalanceInquiryCtrl',
    'bniDirect.TransactionInquiryCtrl',
    'bniDirect.TransactionInquirySummaryPageCtrl',
    'bniDirect.InhouseTransferCtrl',
    'bniDirect.ChangePassCtrl',
    'bniDirect.ChangeLangCtrl'
  ])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, ionicDatePickerProvider) {
  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'views/sideMenu.html',
    controller: 'MenuCtrl'
  })
    .state('app.sideMenuChild', {
      url: '/sideMenuChild',
      views: {
        'side-menu-child': {
          templateUrl: 'views/sideMenuChild.html'
        }
      }
    })

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'views/login.html',
          controller: 'LoginCtrl'
        }
      }
    })

    .state('app.landingPage', {
      url: '/landingPage',
      views: {
        'menuContent': {
          templateUrl: 'views/landingPage.html'
          /*controller: 'LandingPageCtrl'*/
        }
      }
    })

    .state('app.pendingTask', {
      url: '/pendingTask',
      views: {
        'menuContent': {
          templateUrl: 'views/pendingTask.html',
          controller: 'PendingTaskCtrl'
        }
      }
    })

    .state('app.balanceInquiry', {
      url: '/balanceInquiry',
      views: {
        'menuContent': {
          templateUrl: 'views/balanceInquiry.html',
          controller: 'BalanceInquiryCtrl'
        }
      }
    })

    .state('app.balanceInquiryDetailPage', {
      url: '/balanceInquiryDetailPage',
      views: {
        'menuContent': {
          templateUrl: 'views/balanceInquiryDetailPage.html'
        }
      }
    })

    .state('app.transactionInquiry', {
      url: '/transactionInquiry',
      views: {
        'menuContent': {
          templateUrl: 'views/transactionInquiry.html',
          controller: 'TransactionInquiryCtrl'
        }
      }
    })

    .state('app.transactionInquirySummaryPage', {
      url: '/transactionInquirySummaryPage',
      views: {
        'menuContent': {
          templateUrl: 'views/transactionInquirySummaryPage.html'
        }
      }
    })

    .state('app.inhouseTransfer', {
      url: '/inhouseTransfer',
      views: {
        'menuContent': {
          templateUrl: 'views/inhouseTransfer.html',
          controller: 'InhouseTransferCtrl'
        }
      }
    })

    .state('app.changePassword', {
      url: '/changePassword',
      views: {
        'menuContent': {
          templateUrl: 'views/changePassword.html',
          controller: 'ChangePassCtrl'
        }
      }
    })

    .state('app.changeLanguage', {
      url: '/changeLanguage',
      views: {
        'menuContent': {
          templateUrl: 'views/changeLanguage.html',
          controller: 'ChangeLangCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');

  //ionic datepicker
  var datePickerObj = {
    inputDate: new Date(),
    titleLabel: 'Select a Date',
    setLabel: 'Set',
    todayLabel: 'Today',
    closeLabel: 'Close',
    mondayFirst: false,
    weeksList: ["S", "M", "T", "W", "T", "F", "S"],
    monthsList: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
    templateType: 'popup',
    from: new Date(2012, 8, 1),
    to: new Date(2018, 8, 1),
    showTodayButton: true,
    dateFormat: 'dd MMMM yyyy',
    closeOnSelect: false,
    disableWeekdays: []
  };
  ionicDatePickerProvider.configDatePicker(datePickerObj);
});
