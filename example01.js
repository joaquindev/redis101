var redis = require('redis');
var client = redis.createClient();
client.set("key1", "Message attached to key1");
client.set('key2', 'Message attached to key2');

//We retrieve the meesages from redis
client.get("key1", function(err, reply){
  console.log(reply);
});

 
