import { Produto } from './produto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{ 
  public produtos : Array<Produto> = [
    new Produto(1425, 'Armortecedor', 56, 110, 60),
    new Produto(5532, 'Biela', 29, 100, 500),
    new Produto(3425, 'Pneu', 10, 100, 2),
    new Produto(4564, 'Radiador', 23, 50, 25)
  ]

  constructor() {}
    

  public getProdutos(){
    return this.produtos.sort((a, b) => a.faltaDePecas - b.faltaDePecas); 
  }
}
