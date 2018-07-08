const {
    MongoClient,
    ObjectID
} = require('mongodb');

var user = {name: "Rohit", age: 25};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true},  (err, client) => {
    if (err) {
        console.log('Unable to connect MongoDB server', err);
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');
    //.find() is cursor and we have lot of methods like to array() 
    // db.collection('Todos').find({
    //     _id: new ObjectID('5b40def876120200ec1555dd')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });
    
    /*
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err);
    });
    */

    db.collection('Users').find({
        name: "Mohit Sharma"
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch Users', err);
    })

    client.close();
});