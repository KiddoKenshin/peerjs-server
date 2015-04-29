var client = exports = module.exports = {};

client.initializeSession = function(id, room) {
  this.id = id;
  this.room = room;
}
