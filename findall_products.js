var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://vishnur:Betac1032116!@vishnutrainingust.mongocluster.cosmos.azure.com/?tls=true&authMechanism=SCRAM-SHA-256&retrywrites=false&maxIdleTimeMS=120000";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("testDB");
  dbo.collection("products").find({}).toArray( function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});