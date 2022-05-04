export class Produto {
    public cod: number;
    public descricao: string;
    public qtdDisponivel: number;
    public capMaxima: number;
    public qtdMinima: number;

    constructor(cod: number, descricao: string, qtdDisponivel: number, capMaxima: number, qtdMinima: number) {
        this.cod = cod;
        this.descricao = descricao;
        this.qtdDisponivel = qtdDisponivel;
        this.capMaxima = capMaxima;
        this.qtdMinima = qtdMinima;
    }
}