"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
var score_js_1 = require("./score.js");
var Food = /** @class */ (function () {
    function Food(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    Food.prototype.clickEventHandler = function () {
        this.element.classList.toggle('food--active');
        var score = score_js_1.Score.getInstance();
        score.render();
    };
    return Food;
}());
exports.Food = Food;
