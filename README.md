# Webpack Configuration Project

This is a small front-end development coding project that includes a webpack configuration written from scratch.

## Author

Daphne Dang

## Webpack Config Specs

- Has a single javascript file as the entrypoint into the application
- Handles Javascript/ES6/React code with both .js and .jsx file extensions; should output a single ES5 .js bundle with a unique hash added to the filename
- Handles SCSS code with .scss extensions; should output a single .css file with a unique hash added to the filename
- Handles IMG file with .jpeg, .jpg, .png, and .gif extensions; should return a link referencing the file
- Handles SVG file with .svg extension; return a base-64 data-encoded string if the file is < 1mb and a link to the file otherwise