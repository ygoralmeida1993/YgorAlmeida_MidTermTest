module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _ocean?: objects.Ocean;
        private _plane?: objects.Plane;

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
            
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            
             this.Main();
        }        
        
        public Update(): void 
        {
           this._ocean.Update();

           this._plane.Update();
        }
        
        public Main(): void 
        {
            this.addChild(this._ocean);

            this.addChild(this._plane);

        }

        
    }
}