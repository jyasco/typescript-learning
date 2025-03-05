"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Score = void 0;
var foods_js_1 = require("./foods.js");
var Score = /** @class */ (function () {
    function Score() {
    }
    Object.defineProperty(Score.prototype, "totalScore", {
        get: function () {
            var foods = foods_js_1.Foods.getInstance();
            return foods.activeElementsScore.reduce(function (total, score) { return total + score; }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Score.prototype.render = function () {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    };
    Score.getInstance = function () {
        if (!Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    };
    return Score;
}());
exports.Score = Score;
