import fileinclude from "gulp-file-include";
import removeHtmlComments from "gulp-remove-html-comments";

export const html = () => {
    return (
        app.gulp
            .src(app.path.src.html)
            .pipe(
                app.plugins.plumber({
                    errorHandler: app.plugins.notify.onError("Error: <%= error.message %>"),
                })
            )
            .pipe(fileinclude())
            .pipe(removeHtmlComments())
            .pipe(app.plugins.replace(/@img\//g, "img/"))
            .pipe(app.gulp.dest(app.path.build.html))
            .pipe(app.plugins.browsersync.stream())
    );
};
