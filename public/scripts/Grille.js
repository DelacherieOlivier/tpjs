export class Grille {
    //private _vue: IView3D
    constructor(config) {
        this._canvas = config.canvas;
        this._ctx = this._canvas.getContext('2d');
        this._data = config.data;
        this.nbColonnes = this._data[0].length;
        this.nbLignes = this._data.length;
        this.blockStyles = config.blockStyles;
        this.couleurFond = config.couleurFond;
        this.couleurGrille = config.couleurGrille;
        this.blockHeight = this._canvas.height / this.nbLignes;
        this.blockWidth = this._canvas.width / this.nbColonnes;
        //this.rayons = []
        //this.intersections = []
        this.angleRayons = config.angleRayons;
        //this._vue = config.vue
    }
    get data() {
        return this._data;
    }
    set data(value) {
        this._data = value;
        this.nbColonnes = this._data[0].length;
        this.nbLignes = this._data.length;
        this.blockHeight = this._canvas.height / this.nbLignes;
        this.blockWidth = this._canvas.width / this.nbColonnes;
    }
    dessineGrille() {
        this._ctx.fillStyle = this.couleurFond;
        this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this._ctx.strokeStyle = this.couleurGrille;
        this._ctx.beginPath();
        for (let i = 1; i < this.data.length; i++) {
            const y = i * this.blockHeight;
            this._ctx.moveTo(0, y);
            this._ctx.lineTo(this._canvas.width, y);
        }
        for (let i = 1; i < this.data[0].length; i++) {
            const x = i * this.blockWidth;
            this._ctx.moveTo(x, 0);
            this._ctx.lineTo(x, this._canvas.height);
        }
        this._ctx.closePath();
        this._ctx.stroke();
    }
    dessineBlocks() {
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].length; j++) {
                const blockValue = this.data[i][j];
                if (blockValue == 1) {
                    const x = j * this.blockWidth;
                    const y = i * this.blockHeight;
                    this._ctx.fillStyle = this.blockStyles[blockValue];
                    this._ctx.fillRect(x + 1, y + 1, this.blockWidth - 2, this.blockHeight - 2);
                }
            }
        }
    }
    dessine() {
        this.dessineGrille();
        this.dessineBlocks();
    }
}
//# sourceMappingURL=Grille.js.map