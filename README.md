# gulp-xml

[![dependencies](https://david-dm.org/JounQin/gulp-xml.svg)](https://david-dm.org/JounQin/gulp-xml)
[![devDependency Status](https://david-dm.org/JounQin/gulp-xml/dev-status.svg)](https://david-dm.org/JounQin/gulp-xml#info=devDependencies)

a gulp plugin to process xml file with [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js).

The creation of this modules is due to that the module [gulp-xml2js](https://www.npmjs.com/package/gulp-xml2js) is not so powerful as the original [xml2js](https://github.com/Leonidas-from-XIV/node-xml2js).

---

## Usage

check the `gulpfile.js` in this module you will see the following:

``` bash
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    xml = require('.');

gulp.task('default', function () {
    gulp.src('./test/src.xml')
        .pipe(xml({
            // options to initialize an XML2JS PARSER
            parseOpts: {
                trim: true
            },
            // options to initialize an XML2JS BUILDER
            buildOpts: {
                renderOpts: {
                    pretty: false
                },
                allowSurrogateChars: true,
                cdata: true
            },
            // outType: build an xml file or a json string, DEFAULT ture
            // callback after building the output contents with the result passed in
            // besides, if the return value of callback equals null, undefinded or an empty string and so on,
            // it will be igored
            callback: function (result) {
                return result.replace(/search/g, 'MySearch');
            }
        }))
        // please handle renaming the files by yourself or not
        .pipe(rename({
            basename: 'dist'
        }))
        .pipe(gulp.dest('./test'));
});
```

---

Yeah, as yo see it's very simple. Just enjoy it!


## Test

run the following script:

``` bash
npm i
npm test
```


## Thanks

Thanks to the original author [@Leonidas-from-XIV](https://github.com/Leonidas-from-XIV) and the code pattern of [gulp-replace](https://github.com/lazd/gulp-replace).


## License

MIT License (Expat)
