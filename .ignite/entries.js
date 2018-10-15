const readDir = require('fs').readdirSync;
const path = require('path');

/*
The format for entries is like this:
{
    'entry_name_1': {
        folder: ''
        inputFile: 'inputfile1',
        templateFile: '',
        outputFilename: 'outputfile1',
        outputTemplateFile: 'outputfile1'
    },
    'vue_main': {
        inputFile: 'vue_main',
        outputFilename: 'vue_main',
        outputTemplateFile: 'vue_page'
    }
}

You should not set extensions on the properties of the object 
and all are optional. They will be set as follows if omitted:

inputFile = name of the entry (e.g. 'entry_name_1')
outputFilename = inputFile
outputTemplateFile = outputFilename 

As long as you export an object that looks like this, 
you can use whatever method you want to get the entries.

For instance you could iterate the filesystem to pull all
templates from the public folder, or all the JS files in
the root of src etc...
*/


// - Automatic
const entryFiles = readDir(path.join(__dirname, '..', 'src/js/pages'));
const dynamicEntries = {};
if(entryFiles) entryFiles.forEach(file => {
    if(/\.js/.test(file)) {
        const basefilename = path.parse(file).name
        dynamicEntries[basefilename] = {
            inputFile: `js/pages/${basefilename}`,
            templateFile: `${basefilename}`,
        }
    }
});
module.exports = dynamicEntries;


// - Manual
// const _entries = {
//     'vue_example': {
//         inputFile: 'vue_example/vue_example',
//         outputFilename: 'vue_example/index'
//     },
//     'index': {}
// }
// const configureEntries = (input) => {
//     let entries = Object.assign({}, input);
//     Object.keys(entries).forEach(key => {
//         entries[key].inputFile = entries[key].inputFile || key;
//         entries[key].outputFilename = entries[key].outputFilename || entries[key].inputFile;
//         entries[key].outputTemplateFile = entries[key].outputTemplateFile || entries[key].outputFilename;
//     });
//     return entries;
// }
// module.exports = configureEntries(_entries);