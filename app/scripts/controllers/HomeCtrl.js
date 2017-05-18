(function() {
     function HomeCtrl(Room, $uibModal) {
         this.rooms = Room.all;
         var $ctrl = this;
         
         $ctrl.open = function () {
           var modalInstance = $uibModal.open({
             templateUrl: '/templates/modal.html',
             controller: 'ModalCtrl',
             controllerAs: '$ctrl',
             size: 'sm'
           });
         };
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
