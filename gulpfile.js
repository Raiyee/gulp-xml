/**
 * Created by JounQin on 16/7/1.
 */
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    xml = require('.');

gulp.task('default', function () {
    gulp.src('./test/src.xml')
        .pipe(xml({
            parseOpts: {
                trim: true
            },
            buildOpts: {
                renderOpts: {
                    pretty: false
                },
                allowSurrogateChars: true,
                cdata: true
            },
            callback: function (result) {
                return result.replace(/search/g, 'MySearch');
                // throw Error('error');
            }
        }))
        .on('error',function (e) {
            console.log(e)
        })
        .pipe(rename({
            basename: 'dist'
        }))
        .pipe(gulp.dest('./test'));
});