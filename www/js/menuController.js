angular.module('bniDirect.MenuCtrl', [])

.controller('MenuCtrl', function($scope, $state, $ionicHistory) {

  $scope.hideSidemenuBackButton = true;
  var topLevelMenu = $scope.menuList = [
    {
      id: 1,
      name: 'Pending Task',
      url : 'app.pendingTask',
      child: [],
      is_first_level: true
    },
    {
      id: 2,
      name: 'Account Information',
      child: [
        {
          id: 6,
          name: 'Balance Inquiry',
          url : 'app.balanceInquiry',
          child: [],
          is_first_level: false
        },
        {
          id: 7,
          name: 'Transaction Inquiry',
          url : 'app.transactionInquiry',
          child: [],
          is_first_level: false
        }
        ],
      is_first_level: true
    },
    {
      id: 3,
      name: 'Transfer Management',
      child: [
        {
          id: 9,
          name: 'Inhouse Transfer',
          url : 'app.inhouseTransfer',
          child: [],
          is_first_level: false
        }
        ],
      is_first_level: true
    },
    {
      id: 4,
      name: 'Change Language',
      url : 'app.changeLanguage',
      child: [],
      is_first_level: true
    },
    {
      id: 5,
      name: 'Change Password',
      url : 'app.changePassword',
      child: [],
      is_first_level: true
    }
  ];

  var getByParentId = function(id) {
    for (var i = 0; i < topLevelMenu.length; i++) {
      if (topLevelMenu[i].id === id) {
        return topLevelMenu[i].child;
      }
    }
  };

  $scope.showSubmenu = function(category) {
    $scope.menuList = getByParentId(category.id);
    $scope.hideSidemenuBackButton = false;
  };

  $scope.showTopLevelMenu = function () {
    $scope.menuList = topLevelMenu;
    $scope.hideSidemenuBackButton = true;
  };

  $scope.goTo = function(path){
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go(path);
  };

});


