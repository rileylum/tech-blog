module.exports = {
    belongsTo: function(currentUser, postUser) {
        if(currentUser == postUser) {
            return true;
        } else {
            return false;
        }
    }
}