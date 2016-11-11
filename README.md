# node-overwrite-res

It is an example of overwriting res.send function. A functionality of loging every detail from request and response data is needed, building a middleware to log request and overwiting res.send to manipulate respose information.


## Initial
```js
$ npm install
```

## Test
```js
$ mocha test.js
```

## Usage
#### To log data from request 
```js
// middleware function
app.use(function (req, res, next) {
  console.log('Log before every request')
  next()
})
```

#### To log data from response 
```js
// Overwrite res.send
app.use(function(req, res, next) {
  var temp = res.send
  res.send = function(str) {

      //manipulating information of res, req 
      var payload = {
          protocol: req.protocol,
          host: req.get('host'),
          originalUrl: req.originalUrl,
          body: req.body,
          cookies: req.cookies,
          header: req.headers
      }
      for (var key in payload) {
          console.log(key + ' ' + payload[key]);
      }
      temp.call(this, str)
  }
  next();
})
```


## License


[MIT](http://vjpr.mit-license.org)