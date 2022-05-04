import { Produto } from './produto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos : Array<Produto> = [
    new Produto(1425, 'Biela', 10, 10, 5),
    new Produto(2532, 'Armortecedor', 10, 10, 5),
    new Produto(3425, 'Pneu', 10, 10, 5),
    new Produto(4564, 'Radiador', 10, 10, 5)
  ]


  constructor() { }

  public getProdutos(){
    return this.produtos; 
  }
}
