export class Produto {
    public cod: string;
    public descricao: string;
    public qtdDisponivel: number;
    public capMaxima: number;
    public qtdMinima: number;
    public faltaDePecas?: number;
    public red?: boolean;
    public orange?: boolean;

    constructor(cod: string, descricao: string, qtdDisponivel: number, capMaxima: number, qtdMinima: number, faltaDePecas?: number, red?: boolean, orange?: boolean) {
        this.cod = cod;
        this.descricao = descricao;
        this.qtdDisponivel = qtdDisponivel;
        this.capMaxima = capMaxima;
        this.qtdMinima = qtdMinima;
        this.faltaDePecas = this.qtdDisponivel / this.qtdMinima;
        if (this.qtdDisponivel < this.qtdMinima && this.qtdDisponivel > this.capMaxima/3) {
            this.red = true;
        }
        else if (this.qtdDisponivel < this.capMaxima/3){
            this.orange = true;
        }
    }
}