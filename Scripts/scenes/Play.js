"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            // initialization
            _this._playLabel = new objects.Label();
            _this._nextButton = new objects.Button();
            _this._ocean = new objects.Ocean();
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            //instantiate a new Text object
            this._playLabel = new objects.Label("Play Scene", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
            this._nextButton = new objects.Button('./Assets/images/nextButton.png', 320, 430, true);
            this._ocean = new objects.Ocean();
            this.Main();
        };
        Play.prototype.Update = function () {
            this._ocean.Update();
        };
        Play.prototype.Main = function () {
            this.addChild(this._ocean);
            this.addChild(this._playLabel);
            this.addChild(this._nextButton);
            this._nextButton.on("click", function () {
                config.Game.SCENE = scenes.State.END;
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map