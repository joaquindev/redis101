TRY REDIS
===

Source: [Try Redis majestic tutorial][url-tutorial]



Redis is a key-value store, often referred as a NoSQL database. 

###Basic store and retrieve actions

With ```SET``` we set the key to hold the string value. Its time complexity is O(1) and we can also use some options like setting the specified expire time, in seconds or miliseconds. Also with ```NX``` sets the key if it only does not already exists and with ```XX``` we'll set the key only if it already exists. Later on, with ```GET``` which has a time complexity of O(1) as well. Regarding what GET can receive, it can also get a ```Null Bulk String``` which is a special way of representing a Null value ```$-1\r\n```. 

```
SET server:name "fido"
GET server:name => "fido"
```
###Other common operations

With ```DEL``` we delete a given key and associated value. With ```SETNX``` (set-if-not-exists) 

```
DEL
```


[url-tutorial]: http://try.redis.io/
