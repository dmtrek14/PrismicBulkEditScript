const fs = require('fs');
const path = require('path')
const urlSlug = require('url-slug')

const directoryPath = path.join(__dirname, './ForEditing');
const targetPrismicType = 'content';

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
            //Checks Prismic type. If it isn't the specified type, just delete it - we don't want to make any changes to or re-import those, anyway
            if(obj.type !== targetPrismicType){
                fs.unlink((directoryPath + '/' + file), (err) => {
                    if (err) throw err;
                    console.log('successfully deleted ' + obj.type + ' ' + file);
                })
            } else {
            //Bulk editing section.
            //Case: adding a uid field and populating it from slugifying the title field
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