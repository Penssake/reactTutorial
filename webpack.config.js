const webpack = require('webpack');
//REVIEW: require is built into noje.js - it loads your modules
//Modules are not global. You can export the value of
//the returns in the file using module.exports
const path = require('path');
//REVIEW: path is a module that works with directories and filepaths
const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');
//REVIEW: path.resolve()is a method that resolves a sequence of path segments into an absolute path....
//the sequence of paths is read right to left
//if a directory name has not been given as the first parameter the
//current working diretory is used
//if no path segments are given, path.resolve()will return the obsolute path of the current working directory.

//Path
//Windows vs. POSIX(Operating system for unix)
     //When working on a windows machine your path results will
     //differ than when working with POSIX
     //to achieve consistent result for linux use path.posix.basename('filepaths')
     //for windows use path.win32.basname(path)
//path.basename(path[, ext])
    //refer above. path.basename(path[, ext]) ;
    //path.basename('/foo/bar/baz/asdf/quux.html');
    // Returns: 'quux.html'
    //path.basename('/foo/bar/baz/asdf/quux.html', '.hmtl');
    //Returns: 'quux'
//path.delimiter
    //console.log(process.env.PATH);
    // Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'
    //process.env.PATH.split(path.delimiter);
    // Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']
//path.dirname(path)
    //path.dirname('/foo/bar/baz/asdf/quux');
    // Returns: '/foo/bar/baz/asdf'
//path.extname(path)
   //path.extname('index.html');
   // Returns: '.html'
   //path.extname('index.coffee.md');
   // Returns: '.md'

   //path.extname('index.');
   // Returns: '.'

   //path.extname('index');
   // Returns: ''

   //path.extname('.index');
   // Returns: ''
//path.format(pathObject)
   //the opposite of path.parse();
   //returns a path string from an object
//path.isAbsolute(path)
   //returns a boolean value
   //returns true or false as to whether the path is absolute
//path.join([...paths])
   //joins all the path segments
   //path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
   // Returns: '/foo/bar/baz/asdf'
//path.normalize(path)
   //gets rid of trailing separators
//path.parse(path)
   //path.parse('/home/user/dir/file.txt');
   // Returns:
     // { root: '/',
     //   dir: '/home/user/dir',
     //   base: 'file.txt',
     //   ext: '.txt',
     //   name: 'file' }
//path.posix
     //not for windows - specific to POSIX
//path.relative(from, to)
    //path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');
    // Returns: '..\\..\\impl\\bbb'
//path.resolve([...paths])
    //resolves 2 paths into an absolute path
//path.sep
    //'foo\\bar\\baz'.split(path.sep);
    // Returns: ['foo', 'bar', 'baz']
//path.win32
    //specific to windows.

//not entirely sure....
const config = {
  entry: APP_DIR + '/index.jsx', //application starts executing
  //and webpack starts bundling
  output: { //related to how the webpack emits results
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config; //assuming we are using this for reference
//later and can possibly call it like function considering the contents
//this file are not global without using module.exports???? 
