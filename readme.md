# ReadMe

## Summary
Setup a quick Express proxy server for projects in development that are having issues with Cross-origin resource sharing(CORS) when making simple API calls to other servers. Host on local Docker container.

## NOTE
-Replace apiURL with your API endpoint URL (server.js)
-Replace the API key with your own valid key (server.js)


## Install
Change directory to source file where Dockerfile is located
```docker build . <your image name>```  
```docker run -d -p <open localhost port>:3000 <your image name>```
