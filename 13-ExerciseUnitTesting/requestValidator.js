function requestValidator(httpRequest){

    if (httpRequest.method === undefined || httpRequest.method !== 'GET' && httpRequest.method !== 'POST'
        && httpRequest.method !== 'DELETE' && httpRequest.message !== 'CONNECT'){

        throw new Error('Invalid request header: Invalid Method');

    }


    const uriPattern = /^[a-z.0-9]+$/gm;
    if (httpRequest.uri === undefined || httpRequest.uri === '' || !uriPattern.test(httpRequest.uri.trim())){
        throw new Error('Invalid request header: Invalid URI');
    }

    if (httpRequest.version === undefined || httpRequest.version !== 'HTTP/0.9' && httpRequest.version !== 'HTTP/1.0'
        && httpRequest.version !== 'HTTP/1.1' && httpRequest.version !== 'HTTP/2.0'){

        throw new Error('Invalid request header: Invalid Version');
    }

    const messagePattern = /(^$)|^[- \\/*:%a-z.0-9]+$/gm;
    if (httpRequest.message === undefined || !messagePattern.test(httpRequest.message)){
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpRequest;
}
try {

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})
}
catch (err){
    console.log(err)
}

//Second solution:
function httpValidator(headerObj){
    const {method,uri,version,message} = headerObj;
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validMethods.includes(method) || method === undefined) {
        throw new Error(`Invalid request header: Invalid Method`);
    }

    const uriPattern = /^([\w.])+$|^\*$/;

    if (!uriPattern.exec(uri) || uri === undefined) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (!validVersions.includes(version) || version === undefined) {
        throw new Error(`Invalid request header: Invalid Version`);
    }

    const messagePattern = /^[^<>\\&\'\"]+$/;

    if ((!messagePattern.exec(message) && message !== '') || message === undefined) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    return headerObj;
}

try {
    httpValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    })
}catch (err){
    console.log(err)
}