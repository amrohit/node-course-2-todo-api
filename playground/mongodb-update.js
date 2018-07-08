const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {

    if (err) {
        console.log('Unable to connect MongoDB server');
    }
    var db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b40fc26246af35c9e8e4f7d')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b40e36e1e07b1259877440d')
    }, {
        $set: {
            name: 'Rohit Sharma'
            // age: 26
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((results) => {
        console.log(results);
    })

});