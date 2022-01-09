const http = require("http");

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    getResult(request, response);
}).listen(8000,"127.0.0.1");

function getResult(request, response) {
    requestParameters = parseRequestUrl(request, response);
    let answerString = "";
    console.log("request parameters : ");
    console.log(requestParameters);
    if (requestParameters[0] === "add") {
        answerString = requestParameters[1] + " plus " + requestParameters[2] + " is : " + (requestParameters[1] + requestParameters[2]);
    } else if (requestParameters[0] === "sub") {
        answerString = requestParameters[1] + " minus " + requestParameters[2] + " is : " + (requestParameters[1] - requestParameters[2]);
    } else if (requestParameters[0] === "mul") {
        answerString = requestParameters[1] + " times " + requestParameters[2] + " is : " + (requestParameters[1] * requestParameters[2]);
    } else if (requestParameters[0] === "div") {
        answerString = requestParameters[1] + " divided by " + requestParameters[2] + " is : " + (requestParameters[1] / requestParameters[2]);
    }
    response.end(answerString);
}

function parseRequestUrl(request, response) {
    if (isValidRequestUrl(request,response)) {
        let requestArray = request.url.split("/");
        let requestParameters = [requestArray[1], parseInt(requestArray[2]), parseInt(requestArray[3])];
        return requestParameters;
    }
    return false;
}

function isValidRequestUrl(request, response) {
    let requestArray = request.url.split("/");
    console.log(requestArray);
    if (requestArray.length != 4) {
        invalidResponseInfo(response,"Invalid URL input.")
        return false;
    }

    if (isNaN(parseInt(requestArray[2])) || isNaN(parseInt(requestArray[3]))) {
        invalidResponseInfo(response, "Invalid input parameters");
        return false;
    }
    
    let operationsTypes = ["add", "sub", "mul", "div"];
    if (!operationsTypes.includes(requestArray[1])) {
        invalidResponseInfo(response, "Operation not supported");
        return false;
    }
    
    return true;
}

function invalidResponseInfo(response, responseMessage) {
    response.end(responseMessage);
}

