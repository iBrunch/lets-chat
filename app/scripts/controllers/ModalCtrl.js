(function() {
	function ModalCtrl(Room, $uibModalInstance, $scope, $cookies){
	  this.ok = function () {
			var createRoom = function(newRoomName) {
		  	Room.newRoom(newRoomName);
			};
      createRoom($scope.newRoomName);
	    if ($scope.newRoomForm.$valid) {
	    	$uibModalInstance.close();
	    }	
	  };
	  
	  this.cancel = function () {
	    $uibModalInstance.dismiss();
	  };
	  
	  this.createUsername = function () {
    	$cookies.put('blocChatCurrentUser', this.newUsername);
    	if ($scope.newUsernameForm.$valid){
    		$uibModalInstance.close();
    	}
    };
	}
	
 angular
        .module('blocChat')
        .controller('ModalCtrl', [ 'Room', '$uibModalInstance', '$scope', '$cookies', ModalCtrl]);
})();
