var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + 
            '@cluster0.extvy.mongodb.net/nodetodosample?retryWrites=true&w=majority'
    }
}