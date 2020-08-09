var fs = require('fs');
const { exit } = require('process');
const { isNull } = require('util');
var myargs = process.argv.slice(2);
var arr = new Array();
var fileName = '';
if(myargs[0] ==null)
{
    console.log('Please pass the file name');
    exit();
}
else
{
    fileName= myargs[0];
}

fs.readFile('./ListFileNames.txt', function(err, data)
{
    if(data.toString() == '' || data.toString() == null)
    {
        arr.push(fileName);
        fs.appendFileSync('ListFileNames.txt', arr);
        fs.writeFileSync(fileName,'You are awesome');
    }
    else if (!data.includes(fileName))
    {
        arr.push(fileName);
        fs.appendFileSync('ListFileNames.txt', arr);
        fs.writeFileSync(fileName,'You are awesome');
    }
    else{
        console.log("The File name you entered is already present. Please enter new file name");
        exit();
    }
});

