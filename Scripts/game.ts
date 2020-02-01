//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
let Game = (function(){

    // variable declarations
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    let welcomeLabel: objects.Label;
    let startButton: objects.Button;

    /**
     * This method initializes the CreateJS (EaselJS) Library
     * It sets the framerate to 60 FPS and sets up the main Game Loop (Update)
     */
    function Start():void
    {
        console.log(`%c Game Started!`, "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        Main();
    }

    /**
     * This function is triggered every frame (16ms)
     * The stage is then erased and redrawn 
     */
    function Update():void
    {
        
        stage.update();
    }

    /**
     * This is the main function of the Game (where all the fun happens)
     *
     */
    function Main():void
    {
        console.log(`%c Main Started...`, "color: green; font-size: 16px;");

        //instantiate a new Text object
        welcomeLabel = new objects.Label("Hello, World!", "40px", "Consolas", "#FFFFFF", 320, 240, true);
        stage.addChild(welcomeLabel);

        // buttons
        startButton = new objects.Button('./Assets/images/clickMeButton.png', 550, 430, true);
        stage.addChild(startButton);

        startButton.on("click", function(){
            welcomeLabel.setText("clicked!");
        });

    }

    window.addEventListener('load', Start);


})();