## tw_moment_url_api
### Usage
```bash
# 1st terminal
$ git clone https://github.com/redpeacock78/tw_moment_url_api
$ cd tw_moment_url_api/
$ yarn install
$ yarn build
$ node dist/main.js
start

######################################################################################

# 2nd terminal
$ curl -v 'http://localhost:3000?url=https://twitter.com/i/events/1250404129383395328'
* Rebuilt URL to: http://localhost:3000/?url=https://twitter.com/i/events/1250404129383395328
*   Trying ::1...
* TCP_NODELAY set
* Connected to localhost (::1) port 3000 (#0)
> GET /?url=https://twitter.com/i/events/1250404129383395328 HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.54.0
> Accept: */*
> 
< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 911
< ETag: W/"38f-T2Ae4T/StJvq8Qte3GXGwNJA6HU"
< Date: Wed, 20 May 2020 20:39:04 GMT
< Connection: keep-alive
< 
* Connection #0 to host localhost left intact
["https://twitter.com/thakaome_uzzaki/status/1243002276408524801","https://twitter.com/thakaome_uzzaki/status/1243002281819160576","https://twitter.com/thakaome_uzzaki/status/1243002287791849474","https://twitter.com/thakaome_uzzaki/status/1243002294209134595","https://twitter.com/thakaome_uzzaki/status/1243002299141591041","https://twitter.com/thakaome_uzzaki/status/1243178958180343808","https://twitter.com/thakaome_uzzaki/status/1250404013633236993","https://twitter.com/thakaome_uzzaki/status/1250404018834173953","https://twitter.com/thakaome_uzzaki/status/1250404023741497350","https://twitter.com/thakaome_uzzaki/status/1251371116368588800","https://twitter.com/thakaome_uzzaki/status/1258365095781883904","https://twitter.com/thakaome_uzzaki/status/1261546420714127360","https://twitter.com/thakaome_uzzaki/status/1261546426812624897","https://twitter.com/thakaome_uzzaki/status/1261546432269414401"]
```
