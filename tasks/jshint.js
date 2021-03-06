var srcDir   = __dirname + "/../";

module.exports = {
    options: {
        force: true
    },
    all: [
        srcDir + "*.js",
        srcDir + "lib/*.js",
        srcDir + "adapter/**/*.js",
        srcDir + "tasks/**/*.js",
        srcDir + "www/**/*.js",
        '!' + srcDir + "www/lib/**/*.js",
        '!' + srcDir + 'node_modules/**/*.js',
        '!' + srcDir + 'adapter/admin/www/lib/**/*.js',
        '!' + srcDir + 'adapter/*/node_modules/**/*.js',
        '!' + srcDir + 'adapter/legacy/www/*/**/*.js'
    ]
};