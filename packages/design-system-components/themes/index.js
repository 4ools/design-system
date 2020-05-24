"use strict";
exports.__esModule = true;
var grid_1 = require("./grid");
var colors_1 = require("./colors");
var text_scale_1 = require("./text-scale");
var typography_1 = require("./typography");
var themes = {
    dark: {
        backgroundColor: '#121212',
        textColor: '#ffffff',
        borderColor: '#333333',
        grid: grid_1["default"],
        colors: colors_1["default"],
        textScale: text_scale_1["default"],
        primaryFont: typography_1["default"]
    },
    light: {
        backgroundColor: '#ffffff',
        textColor: '#121212',
        borderColor: '#cccccc',
        grid: grid_1["default"],
        colors: colors_1["default"],
        textScale: text_scale_1["default"],
        primaryFont: typography_1["default"]
    }
};
exports["default"] = themes;
