# Prismic Bulk Edit Script
 Node.js script to iterate through json files and make changes. Written to add a field to a Prismic type and populate it programmatically so that users wouldn't have to edit a lot of records. This can be used as the basis for future needs to bulk edit data from Prismic (which is exported as individual json files for each record).

 ## How to use
 1. If you are using this to populate a new Prismic field, make sure you have added that field to your model in Prismic.
 2. Clone or fork this repo.
 3. Run ```npm install``` to get the packages.
 4. Add a "ForEditing" folder (at the same level as the node_modules folder). Place files you wish to edit in the "For Editing" folder. 
 5. Run ```node JsonFileIterateAndEdit.js``` in the console.
 6. Your files have been edited and you can now re-import them to Prismic. 
 7. Once you're done, you can clear the files out of "For Editing."
   
## Other considerations
This script was written to bulk edit a specific Prismic type of item. The script deletes any documents of a different type since we don't want to edit and upload anything other than the items of the target type. 

For future use in bulk edits, simply change as needed. Change the ```targetPrismicType``` variable to target the Prismic type you want to edit, and make edits in the loop to handle whatever edits you need to make. In this case we are slug-ifying the existing title field and adding it as a 'uid' field.
 
