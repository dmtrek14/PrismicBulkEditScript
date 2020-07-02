const fs = require('fs');
const path = require('path')
const urlSlug = require('url-slug')

//to run, run 'node Uidgenerator.js' in the console
//change directory path as needed

const directoryPath = path.join(__dirname, './ForEditing');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(function (file) {
        fs.readFile((directoryPath + '/' + file), (err, data) => {
            if (err){
                console.log(err);
            } else {
            let obj = JSON.parse(data);
            //if it isn't a content item, just delete it - we don't want to make any changes to or re-import those, anyway
            if(obj.type !== 'content'){
                fs.unlink((directoryPath + '/' + file), (err) => {
                    if (err) throw err;
                    console.log('successfully deleted ' + obj.type + ' ' + file);
                })
            } else {
            //add uid with slugified-version of title
            obj.uid = urlSlug(obj.title)

            json = JSON.stringify(obj);

            fs.writeFile((directoryPath + '/' + file), json, (err) => {
                if (err) throw err;
                console.log(file + ' has been saved!');
            });
            }
        }});
    });
});