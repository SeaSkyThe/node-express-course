// Global objects in NodeJS

// We have some important global objects in Node, to view all them acess https://nodejs.org/api/globals.html

// The important ones to remember are:

// __dirname    - The directory name of the current module. This is the same as the path.dirname() of the __filename.
// __filename   - The file name of the current module. This is the current module file's absolute path with symlinks resolved.
// require      - Used to import modules, JSON, and local files.
// module       - A reference to the current module.
// process      - Info about env where the program is being executed.

console.log("\n DirName: ", __dirname)
console.log("\n\n FileName: ", __filename)
//console.log("\n\n Require ", require)
//console.log("\n\n Module ", module)
//console.log("\n\n Process ", process)
console.log("\n")