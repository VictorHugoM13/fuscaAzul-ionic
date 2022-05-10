import { Produto } from './produto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{ 
  public produtos : Array<Produto> = [
    new Produto('1425', 'Armortecedor', 56, 110, 60),
    new Produto('5532', 'Biela', 29, 100, 50),
    new Produto('3425', 'Pneu', 10, 100, 2),
    new Produto('4564', 'Carburador', 45, 50, 25),
    new Produto('4234', 'Radiador', 30, 50, 25),
    new Produto('6666', 'Cabeçote', 10, 30, 15)
  ]

  constructor() {}
 
  public getProdutos(){
    for (let i = 0; i < this.produtos.length; i++) {
      this.produtos[i].setColor();
      this.produtos[i].setFaltaDePecas()
    }
    return this.produtos.sort((a, b) => a.faltaDePecas - b.faltaDePecas); 
  }

  public editProduto(cod:String, produto:Produto){
    for(let i=0; i < this.produtos.length; i++){
      if(this.produtos[i].cod === cod){
        this.produtos[i] = produto;
      }
    }
  }
  
}

