const { DateTime } = require('luxon');

module.exports = function (eleventyConfig) {
    eleventyConfig.setBrowserSyncConfig({
        files: '_site/css/**/*.css'
    });

    // Copy `img/favicon/` to `_site/`
    eleventyConfig.addPassthroughCopy({ "src/img/favicon.ico": "/" });
    
    // Watch the 'css' directory for changes
    eleventyConfig.addWatchTarget('src/sass');

    // Copy the compiled CSS directory to the output folder (_site/css folder)
    eleventyConfig.addPassthroughCopy('css');

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
            'dd LLL yyyy'
        );
    });

    eleventyConfig.addCollection("notes", function (collectionApi) {
        return collectionApi.getFilteredByTag("notes").sort((a, b) => b.date - a.date);
    });

    return {
        dir: {
            input: "src/",
            output: "_site",
        },
    };
};