module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _rollButton: objects.Button;


        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void 
        {
            this._welcomeLabel = new objects.Label("The Dice Roller", "40px", "Consolas", "#000000", 320, 180, true);
            // buttons
             this._rollButton = new objects.Button(config.Game.ASSETS.getResult("rollButton"), 320, 430, true);

            
             this.Main();
        }        
        
        public Update(): void 
        {

        }
        
        public Main(): void 
        {

            this.addChild(this._welcomeLabel);

        
            this.addChild(this._rollButton);

            this._rollButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });

        }

        
    }
}