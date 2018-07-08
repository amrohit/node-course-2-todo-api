//const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

//object destructuring -> new variable from object properties
var user = {name: "Rohit", age: 25};

var {name} = user;
console.log(name);

MongoClient.connect(
    "mongodb://localhost:27017/TodoApp",
    {
        useNewUrlParser: true
    },
    (err, client) => {
        if (err) {
            console.log("Unable to connect to MongoDB server", err);
        }
        console.log("Connected To MonogDB server");
        const db = client.db("TodoApp");
        // db.collection("Todos").insertOne(
        //     {
        //         text: "Something to do",
        //         completed: false
        //     },
        //     (err, result) => {
        //         if (err) {
        //             return console.log("Unable to insert todo", err);
        //         }

        //         console.log(JSON.stringify(result.ops, undefined, 2));
        //     }
        // );

        //Insert new doc into Users {name, age, location}
        /*
            db.collection('Users').insertOne({
                name: 'Rohit Sharma',
                age: 25,
                location: 'Pune'
            }, (err, result) => {
                if (err) {
                    console.log('Unable to insert Users', err);
                }
                console.log(JSON.stringify(result.ops, undefined, 2));
                console.log(result.ops[0]._id.getTimestamp());
            });
    
            */

        client.close();
    }
);

/* 
what is _id in the doc 5b40e057c967430564870a6d
12 bytes values
first 4 bytes are timestamps (when id was created)
next 3 bytes are machine identifier
next 2 bytes are process id
next 3 bytes are counter like mysql
=> we can set _id our own like _id:123
*/
