var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var ImageModule=require('docxtemplater-image-module');
var request = require('request');
sizeOf=require('image-size');
var fs = require('fs');
var url = require("url");
var path = require("path");



var opts = {}
opts.centered = false;
opts.getImage=function(tagValue, tagName) {
    return fs.readFileSync(tagValue);
}

/*opts.getSize=function(img,tagValue, tagName) {
    return [300,300];
}
*/

opts.getSize=function(img) {
   sizeObj=sizeOf(img);
   return [sizeObj.width,sizeObj.height];
}

function getFileNameFromUrl(urli){  
    var parsed = url.parse(urli);
    return path.basename(parsed.pathname);
}

var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
   // console.log('content-type:', res.headers['content-type']);
   // console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

function generateDocxData(TextData){
    //console.log(fileTextData);
    var fileTextData = TextData;
    return new Promise(function (resolve, reject) {
        var counter=0;
        for(i=0;i<fileTextData.length;i++){
           // console.log(fileTextData[i]);
            try{
                download(fileTextData[i].image, ".\\tmp\\"+getFileNameFromUrl(fileTextData[i].image), function(){
                    //console.log(fileTextData[i]);
                    // 
                    counter++;
                    if(counter==fileTextData.length){
                        for(j=0;j<fileTextData.length;j++)
                        {
                            fileTextData[j].image = ".\\tmp\\"+getFileNameFromUrl(fileTextData[j].image);
                        }
                        var profiles={"profiles":fileTextData};
                        resolve(profiles);
                    }
                });
                
            }
            catch(error){
                counter++;
                fileTextData[i].image = ".\\tmp\\camera_200.png";
                if(counter==fileTextData.length){
                        for(j=0;j<fileTextData.length;j++)
                        {
                            fileTextData[j].image = ".\\tmp\\"+getFileNameFromUrl(fileTextData[j].image);
                        }
                        var profiles={"profiles":fileTextData};
                        resolve(profiles);
                }
                console.log(error.message);
            }
        }
        
    });
    //var resultData ={"profiles"}
}

function generateDocxFile(fileTextData)
{
        //Load the docx file as a binary
    var content = fs
        .readFileSync(path.resolve(__dirname, 'template.docx'), 'binary');

    var zip = new JSZip(content);

    var doc = new Docxtemplater();
    var imageModule=new ImageModule(opts);
    doc.attachModule(imageModule);
    doc.loadZip(zip);


    //set the templateVariables
    generateDocxData(fileTextData).then(function (value3) {
        var dataToWrite = value3;
        //console.log(dataToWrite);
        doc.setData(dataToWrite);
        try {
            
            doc.render()
        }
        catch (error) {
            var e = {
                message: error.message,
                name: error.name,
                stack: error.stack,
                properties: error.properties,
            }
            console.log(JSON.stringify({error: e}));
            
            throw error;
        }

        var buf = doc.getZip()
                    .generate({type: 'nodebuffer'});

        
        fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);
        
    });
   

}

exports.generateDocxFile = generateDocxFile;