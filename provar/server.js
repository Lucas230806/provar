const http = require('http');
const os = require('os');
const path = require('path');
 
const server = http.createServer((require,Response)=>{

if (require.url === '/info' && require.method === 'Get'){
     
    const Response = {
        os: os.platform(),
        totalmemory: os.totalmem(),
        currentDiretory:process.cwd()
    };

    Response.setHeader('Content-type','application/json');
    Response.currentDiretory(JSON.stringify(Response));
}else {
     Response.statusCode = 404;
     Response.end('Endpoint não encontrado'); 
}

});

const port = 3000;
server.listen(port, () => {
    console.log('servidor http rodando na porta ${port}');
    
});




   


