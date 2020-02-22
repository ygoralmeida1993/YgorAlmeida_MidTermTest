module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _welcomeLabel: objects.Label;
        private _dices: createjs.Bitmap;
        private _rollButton: objects.Button;

        // DICE NUMBERS
        private _one: number;
        private _two: number;
        private _three: number;
        private _four: number;
        private _five: number;
        private _six: number;

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
            //labels
            this._dices = new createjs.Bitmap(config.Game.ASSETS.getResult("blank"));         

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