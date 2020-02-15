module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _playLabel: objects.Label;
        private _nextButton: objects.Button;
        private _ocean: objects.Ocean;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this._playLabel = new objects.Label();
            this._nextButton = new objects.Button();
            this._ocean = new objects.Ocean();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this._playLabel = new objects.Label("Play Scene", "80px", "Consolas", "#FFFF00", 320, 180, true);
            // buttons
             this._nextButton = new objects.Button('./Assets/images/nextButton.png', 320, 430, true);
            
            this._ocean = new objects.Ocean();
            
             this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);
       
            this.addChild(this._playLabel);

        
            this.addChild(this._nextButton);

            this._nextButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.END;
            });

        }

        
    }
}