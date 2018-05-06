(function() {
  function LetsChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('letsChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        templateUrl: '/templates/new-user-modal.html',
        controller: 'ModalCtrl',
        controllerAs: '$ctrl',
        size: 'sm',
        keyboard: false,
        backdrop: 'static'
      });
    }
  }

  angular
    .module('letsChat')
    .run(['$cookies', '$uibModal', LetsChatCookies]);
})();
