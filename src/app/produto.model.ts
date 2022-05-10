export class Produto {
    public cod: string;
    public descricao: string;
    public qtdDisponivel: number;
    public capMaxima: number;
    public qtdMinima: number;
    public faltaDePecas?: number;
    public qtdAtualizar?: number;
    public red?: boolean = false;
    public orange?: boolean = false;

    constructor(cod: string, descricao: string, qtdDisponivel: number, capMaxima: number, qtdMinima: number, faltaDePecas?: number, qtdAtualizar?: number, red?: boolean, orange?: boolean) {
        this.cod = cod;
        this.descricao = descricao;
        this.qtdDisponivel = qtdDisponivel;
        this.capMaxima = capMaxima;
        this.qtdMinima = qtdMinima;
        this.qtdAtualizar = qtdAtualizar;
        this.setFaltaDePecas();
        this.setColor();
        
    }
    public setColor() {
        if (this.qtdDisponivel < this.qtdMinima) {
            this.red = true;
            this.orange = false;
        }
        else if (this.qtdDisponivel < this.capMaxima/3){
            this.orange = true;
            this.red = false;
        }
        else {
            this.orange = false;
            this.red = false;
        }
    }

    public setFaltaDePecas() {
        this.faltaDePecas = this.qtdDisponivel / this.qtdMinima;
    }
    
}