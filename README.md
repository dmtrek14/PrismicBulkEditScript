# PrismicBulkEditScript
 Node.js script to iterate through json files and make changes

 ## How to use
 1. Run ```npm install``` to get the packages
 2. Place files you wish to edit in the "For Editing" folder. 
 3. Run ```doe JsonFileIterateAndEdit.js``` in the console.
   
## Other considerations
This script was written to bulk edit just the "content" type of item. The script deletes the other documents from the folder since we don't want to edit and upload anything other than "content" items. 

For future use in bulk edits, simply change as needed. Change the content type to target the Prismic type you want to edit, and make edits in the loop to handle whatever edits you need to make. In this case we are slug-ifying the existing title field and adding it as a 'uid' field
 
