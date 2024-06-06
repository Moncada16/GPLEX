module.exports = {
    entry:{
        "index": "./scripts/index.js",
        "moviesAdd" : "./pages/moviesAdd.js"
    },
    
    

    output: {
        path: __dirname + "/public",
        filename:`[name].bundle.js`,
    },
};