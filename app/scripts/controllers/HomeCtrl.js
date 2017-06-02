(function() {
     function HomeCtrl(Room, Message, $uibModal, $scope, $cookies) {
         $scope.master = {};
         var $ctrl = this;
         $ctrl.rooms = Room.all;
         $ctrl.currentRoom = null;
         $ctrl.currentUser = $cookies.get('blocChatCurrentUser');
         
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
        
        $ctrl.sendMessage = function () {
            $ctrl.newMessage.roomId = $ctrl.currentRoom.$id;
            $ctrl.newMessage.username = $ctrl.currentUser;
            Message.send($ctrl.newMessage);
            $scope.home.newMessage.content = "";
        };
        
        $scope.reset = function() {
          $scope.newMessage = angular.copy($scope.master);
        };
     }
 
     angular
         .module('blocChat')
         .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$scope', '$cookies', HomeCtrl]);
})();
