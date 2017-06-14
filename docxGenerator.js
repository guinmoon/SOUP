var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');
var ImageModule=require('docxtemplater-image-module');
var request = require('request');
sizeOf=require('image-size');
var fs = require('fs');
var url = require("url");
var path = require("path");
var randomstring = require("randomstring");


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
    var imageName=path.basename(parsed.pathname);
    imageName = imageName.toLowerCase();
    //console.log(imageName);
    if(imageName!=undefined&&(imageName.indexOf(".jpg")==-1)&&(imageName.indexOf(".png")==-1)&&(imageName.indexOf(".gif")==-1))
        imageName = randomstring.generate(20)+".jpg";
    return imageName;
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
                var imgNewName=".\\tmp\\"+getFileNameFromUrl(fileTextData[i].image);
                var dwnLnk=fileTextData[i].image;
                fileTextData[i].image = imgNewName;
                download(dwnLnk, imgNewName, function(){
                    counter++;
                    if(counter==fileTextData.length){
                        var profiles={"profiles":fileTextData};
                        resolve(profiles);
                    }
                });
                
            }
            catch(error){
                counter++;
                fileTextData[i].image = ".\\tmp\\camera_200.png";
                if(counter==fileTextData.length){
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
    return new Promise(function (resolve, reject) {
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
                console.log(JSON.stringify(error));
               // throw error;
            }

            var buf = doc.getZip()
                        .generate({type: 'nodebuffer'});

            
            fs.writeFileSync(path.resolve(__dirname, 'output.docx'), buf);
            resolve("generated");
        });
    });
   

}

exports.generateDocxFile = generateDocxFile;