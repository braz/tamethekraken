var MongoClient = require('mongodb').MongoClient 
  , format = require('util').format;

MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
  if(err) {
      console.warn(err.message);
      return;
  }
    var collection = db
      .collection('test2')
      .find({})
      .toArray(function(err, object) {
        if (err) console.warn(err.message);
        console.dir(object);
        db.close(function(err, result) {
        	if (err) console.warn(err.message);
        });
    });
});
