 const path = require('path');

 function processpath(filepath){

    const directoryname = path.dirname(filepath);
    console.log('nome do diretorio:', diretoryname);


    const extension = path.extname(filepath);
    console.log('extensão do arquivo:', extension);

    const absolutepath = path.resolve(filepath);
    console.log('caminho absoluto:', absolutepath);


    const pathsegments = filepath.split(path.sep);
    console.log('segmentos do caminho:', pathsegments);
 }

 const filepath = '/caminho/para/o/arquivo.txt';
 processpath(filepath)