const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        console.log('Unable to connect MongoDB server');
    }
    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');
    /*
    //deleteMany
    db.collection('Todos').deleteMany({
        text:'Eat lunch'
    }).then((result) => {
        console.log(result);
    })
   */

    //deleteOne
    /*    db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
            console.log(result);
        })
    */
    //findOneAndDelete
    /*  db.collection('Todos').findOneAndDelete({
        completed: false
    }).then((result) => {
        console.log(result);
    });
*/

    db.collection('Users').deleteMany({
        name: 'Rohit Sharma'
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b40e057c967430564870a6d')
    }).then((results) => {
        console.log(JSON.stringify(results, undefined, 2));
    })

})