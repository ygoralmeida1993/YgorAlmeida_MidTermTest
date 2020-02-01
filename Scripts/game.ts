//IIFE - Immediately Invoked Function Expression
//means -> self-executing anonymous function
let Game = (function(){

    // variable declarations
    let canvas:HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage:createjs.Stage;
    let welcomeLabel: objects.Label;
    let startButton: objects.Button;

    let player: objects.Player;

    

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
        player.Update();

        let topLeftPlayer = new objects.Vector2(player.position.x, player.position.y);
        let topLeftButton = new objects.Vector2(startButton.position.x - startButton.halfWidth,
            startButton.position.y - startButton.halfHeight);

            // AABB Collision Detection
       /*  if (topLeftPlayer.x < topLeftButton.x + startButton.width &&
            topLeftPlayer.x + player.width > topLeftButton.x &&
            topLeftPlayer.y < topLeftButton.y + startButton.height &&
            topLeftPlayer.y + player.height > topLeftButton.y) 
            {
                if(!startButton.isColliding)
                {
                    console.log("Collision!");
                    startButton.isColliding = true;

                
                }
                
            } */


        // squared radius check
        let radii = player.halfHeight + startButton.halfHeight;

        if(objects.Vector2.sqrDistance(player.position, startButton.position) < (radii * radii))
        {
            if(!startButton.isColliding)
                {
                    console.log("Collision!");
                    startButton.isColliding = true;
                }
        }
        else
        {
            startButton.isColliding = false;
        }


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
        welcomeLabel = new objects.Label("The Game", "80px", "Consolas", "#000000", 320, 180, true);
        stage.addChild(welcomeLabel);

        // buttons
        startButton = new objects.Button('./Assets/images/startButton.png', 320, 430, true);
        stage.addChild(startButton);

        startButton.on("click", function(){
            welcomeLabel.setText("clicked!");
        });

        player = new objects.Player();
        stage.addChild(player);


    }

    window.addEventListener('load', Start);


})();