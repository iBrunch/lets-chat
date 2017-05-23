(function() {
	function ModalCtrl(Room, $uibModalInstance, $scope){
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
	}
	
 angular
        .module('blocChat')
        .controller('ModalCtrl', [ 'Room', '$uibModalInstance', '$scope', ModalCtrl]);
})();
