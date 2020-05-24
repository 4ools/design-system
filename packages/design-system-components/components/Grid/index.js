"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var Container = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: ", ";\n  grid-template-rows: ", ";\n  ", "\n  column-gap: ", ";\n  row-gap: ", ";\n  justify-items: ", ";\n  align-items: ", ";\n"], ["\n  display: grid;\n  grid-template-columns: ",
    ";\n  grid-template-rows: ",
    ";\n  ",
    "\n  column-gap: ",
    ";\n  row-gap: ",
    ";\n  justify-items: ",
    ";\n  align-items: ",
    ";\n"])), function (props) {
    return props.cols ? props.cols : props.theme.grid.cols;
}, function (props) {
    return props.rows ? props.rows : props.theme.grid.rows;
}, function (props) {
    return props.area && "grid-template-area: " + props.area + ";";
}, function (props) {
    return props.colGap ? props.colGap : props.theme.grid.colGap;
}, function (props) {
    return props.rowGap ? props.rowGap : props.theme.grid.rowGap;
}, function (props) {
    return props.justify ? props.justify : props.theme.grid.justify;
}, function (props) {
    return props.align ? props.align : props.theme.grid.align;
});
var Item = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  /* Note this one is not in edge so maybe will drop it? \uD83E\uDD37\u200D\u2640\uFE0F */\n  ", "\n"], ["\n  ",
    "\n  ", "\n  ",
    "\n  ", "\n  ", "\n  ", "\n  ", "\n  /* Note this one is not in edge so maybe will drop it? \uD83E\uDD37\u200D\u2640\uFE0F */\n  ", "\n"])), function (props) {
    return props.colStart && "grid-column-start: " + props.colStart + ";";
}, function (props) { return props.colEnd && "grid-column-end: " + props.colEnd + ";"; }, function (props) {
    return props.rowStart && "grid-row-start: " + props.rowStart + ";";
}, function (props) { return props.rowEnd && "grid-row-end: " + props.rowEnd + ";"; }, function (props) { return props.gridArea && "grid-area: " + props.gridArea + ";"; }, function (props) { return props.justify && "justify-self: " + props.justify + ";"; }, function (props) { return props.align && "align-self: " + props.align + ";"; }, function (props) { return props.place && "place-self: " + props.place + ";"; });
var Grid = {
    Container: Container,
    Item: Item
};
exports["default"] = Grid;
var templateObject_1, templateObject_2;
