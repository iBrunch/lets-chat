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
    	$cookies.put('letsChatCurrentUser', this.newUsername);
    	if ($scope.newUsernameForm.$valid){
    		$uibModalInstance.close();
    	}
    };
	}
	
 angular
        .module('letsChat')
        .controller('ModalCtrl', [ 'Room', '$uibModalInstance', '$scope', '$cookies', ModalCtrl]);
})();
