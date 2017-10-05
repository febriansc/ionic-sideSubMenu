angular.module('bniDirect.BalanceInquiryCtrl', [])

.controller('BalanceInquiryCtrl', function($scope, $ionicModal, $timeout, $state) {
  $scope.selectAccount = [
    {
      id: 1,
      text: 'Single Account'
    },
    {
      id: 2,
      text: 'Multiple Account'
    }
  ];

  $scope.selectAccountType = [
    {
      id: 3,
      text: 'Account Type (Optional)',
    }
  ];

  $scope.goToDetailPage = function () {
    $state.go('app.balanceInquiryDetailPage');
  };

});


