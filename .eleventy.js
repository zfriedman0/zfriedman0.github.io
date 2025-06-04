const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    //eleventyConfig.setBrowserSyncConfig({
    //    files: '_site/css/**/*.css'
    //});

    // Copy `img/favicon/` to `_site/`
    eleventyConfig.addPassthroughCopy({ "src/img/favicon.ico": "/" });
    
    // Watch the 'css' directory for changes
    eleventyConfig.addWatchTarget('src/sass');

    // Copy the 'css' directory to the output (_site folder)
    eleventyConfig.addPassthroughCopy('css');

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'dd LLL yyyy'
        );
    }); 

    return {
        dir: {
            input: "src",
            output: "_site",
        },
    };
};