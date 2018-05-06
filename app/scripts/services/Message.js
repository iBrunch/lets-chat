(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("message");
    var messages = $firebaseArray(ref);
    Message.all = messages;
    
    Message.getByRoomId = function (roomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    };
    
    Message.send = function(newMessage) {
      newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
      messages.$add(newMessage);
    };
    
    return Message;
    }

  angular
    .module('letsChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
