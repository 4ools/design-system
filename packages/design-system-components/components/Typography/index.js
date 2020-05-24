"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var styled_components_1 = require("styled-components");
var HeadingOne = styled_components_1["default"].h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), function (props) { return props.theme.textScale.h1; });
var HeadingTwo = styled_components_1["default"].h2(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), function (props) { return props.theme.textScale.h2; });
var HeadingThree = styled_components_1["default"].h3(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), function (props) { return props.theme.textScale.h3; });
var HeadingFour = styled_components_1["default"].h4(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), function (props) { return props.theme.textScale.h4; });
var HeadingFive = styled_components_1["default"].h5(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), function (props) { return props.theme.textScale.h5; });
var BodyCopy = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: ", ";\n"], ["\n  font-size: ", ";\n"])), function (props) { return props.theme.textScale.copy; });
var Typography = {
    HeadingOne: HeadingOne,
    HeadingTwo: HeadingTwo,
    HeadingThree: HeadingThree,
    HeadingFour: HeadingFour,
    HeadingFive: HeadingFive,
    BodyCopy: BodyCopy
};
exports["default"] = Typography;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
