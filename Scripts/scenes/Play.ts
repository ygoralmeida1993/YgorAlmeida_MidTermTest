module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        playLabel: objects.Label;
        nextButton: objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this.playLabel = new objects.Label();
            this.nextButton = new objects.Button();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS
        public Start(): void 
        {
             //instantiate a new Text object
            this.playLabel = new objects.Label("Play Scene", "80px", "Consolas", "#000000", 320, 180, true);
            // buttons
             this.nextButton = new objects.Button('./Assets/images/nextButton.png', 320, 430, true);
            this.Main();
        }        
        
        public Update(): void 
        {
           
        }
        
        public Main(): void 
        {
       
            this.addChild(this.playLabel);

        
            this.addChild(this.nextButton);

            this.nextButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.END;
            });

        }

        
    }
}