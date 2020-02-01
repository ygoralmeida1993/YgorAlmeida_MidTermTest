"use strict";
//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
var Game = (function () {
    // variable declarations
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var helloLabel;
    var goodByeLabel;
    var dy = 2;
    var clickMeButton;
    var resetButton;
    var background;
    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start() {
        console.log("%c Game Started!", "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Main();
    }
    function CheckBounds() {
        // check bottom border
        if (goodByeLabel.y >= 480 - goodByeLabel.getMeasuredHeight() * 0.5) {
            dy = -2;
        }
        // check the top border
        if (goodByeLabel.y <= goodByeLabel.getMeasuredHeight() * 0.5) {
            dy = 2;
        }
    }
    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn
     */
    function Update() {
        helloLabel.rotation += 5;
        goodByeLabel.y += dy;
        CheckBounds();
        stage.update();
    }
    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main() {
        console.log("%c Main Started...", "color: green; font-size: 16px;");
        background = new createjs.Bitmap("./Assets/images/background.png");
        stage.addChild(background);
        //instantiate a new Text object
        helloLabel = new objects.Label("Hello, World!", "40px", "Consolas", "#FFFFFF", 320, 240, true);
        stage.addChild(helloLabel);
        goodByeLabel = new objects.Label("Good Bye", "30px", "Arial", "#FFFFFF", 320, 300, true);
        stage.addChild(goodByeLabel);
        // buttons
        clickMeButton = new objects.Button('./Assets/images/clickMeButton.png', 550, 430, true);
        stage.addChild(clickMeButton);
        clickMeButton.on("click", function () {
            helloLabel.setText("clicked!");
        });
        resetButton = new objects.Button('./Assets/images/resetButton.png', 150, 430, true);
        stage.addChild(resetButton);
        resetButton.on("click", function () {
            helloLabel.setText("Hello, World!");
        });
        var vector1 = new objects.Vector2(100, 200);
        console.log(vector1.toString());
    }
    window.addEventListener('load', Start);
})();
//# sourceMappingURL=game.js.map