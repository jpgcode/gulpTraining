module.exports = {
    appFolder: './app',
    distFolder: './build',
    watchPaths: {
        html: './build/**/*.html',
        css: './build/css/**/*.css',
        pug: './app/**/*.pug'
    },
    destFolders: {
        build: './build',
        css: './build/css',
        js: './build/js',
        images: './build/images' 
    },
    filePaths: {
        pug: './app/pages/*.pug',
        js: './app/assets/js/**/*.js',
        images: './app/assets/images/*',
        less: './app/assets/less/**/*.less',
        sass: './app/assets/sass/**/*.scss'
    }
};
