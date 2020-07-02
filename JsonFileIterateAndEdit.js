const fs = require('fs');
const path = require('path')
const urlSlug = require('url-slug')

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
            //Checks Prismic type. If it isn't a content item, just delete it - we don't want to make any changes to or re-import those, anyway
            if(obj.type !== 'content'){
                fs.unlink((directoryPath + '/' + file), (err) => {
                    if (err) throw err;
                    console.log('successfully deleted ' + obj.type + ' ' + file);
                })
            } else {
            //add uid with slugified-version of title
            //This is where we would change code to add/edit other fields for different purposes
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