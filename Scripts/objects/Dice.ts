module objects
{
    export class Dice extends GameObject
    {
        constructor(imageDice: String | Object = config.Game.ASSETS.getResult("blank")
            , x:number = 0, y:number= 0, isCentered:boolean = false)
        {
            super(imageDice, x, y, isCentered);

            this.on("mouseover", this.MouseOver);
            this.on("mouseout", this.MouseOut);

            this.Start();
        }
        
        // PRIVATE METHODS
        protected _checkBounds(): void {
            
        }

        // PUBLIC METHODS
        MouseOver():void
        {
            this.alpha = 0.7;
        }

        MouseOut():void
        {
            this.alpha = 1.0;
        }

        /**
         * This function is used for initialization
         *
         * @memberof Button
         */
        public Start(): void {
            this.name = "Dice";
        }

        public Update(): void {
            
        }

        public Reset(): void {
            
        }
    }
    
}