angular.module('bniDirect.LoginCtrl', [])

  .controller('LoginCtrl', function ($scope, $ionicSideMenuDelegate,$state,$ionicHistory,$ionicPopup,IonicClosePopupService) {
    $ionicSideMenuDelegate.canDragContent(false);

    // Form data for the login modal
    $scope.loginData = {};

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);
      if($scope.loginData.username === 'asd' && $scope.loginData.password === 'asd'){
        $ionicHistory.nextViewOptions({
          disableBack: true
        });
        $state.go('app.landingPage');
      }
      else{
        var failedAlert = $ionicPopup.alert({
          title: 'FAILED',
          subTitle: 'CHECK YOUR USERNAME AND PASSWORD'
        });
        IonicClosePopupService.register(failedAlert);
      }
    };

  });


