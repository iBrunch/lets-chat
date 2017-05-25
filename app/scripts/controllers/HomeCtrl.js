(function() {
     function HomeCtrl(Room, Message, $uibModal, $scope) {
         var $ctrl = this;
         $ctrl.rooms = Room.all;
         $ctrl.currentRoom = null;
         
         $scope.hoverIn = function(){
             this.timestamp = true;
         };
         
         $scope.hoverOut = function(){
             this.timestamp = false;
         };         
         $ctrl.open = function () {
           var modalInstance = $uibModal.open({
             templateUrl: '/templates/modal.html',
             controller: 'ModalCtrl',
             controllerAs: '$ctrl',
             size: 'sm'
           });
         };
                
        $ctrl.setCurrentRoom = function (room) {
            $ctrl.currentRoom = room;
            $ctrl.messages = Message.getByRoomId($ctrl.currentRoom.$id);
        };
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$scope', HomeCtrl]);
})();
