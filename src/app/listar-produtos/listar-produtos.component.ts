import { Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.component.html',
  styleUrls: ['./listar-produtos.component.scss'],
})
export class ListarProdutosComponent implements OnInit {


  public produtos: Array<Produto>;
  constructor(private ProdutoService: ProdutoService, private router: Router) {
    router.events.subscribe(() => {
      this.produtos = this.ProdutoService.getProdutos();
    })
   };
  
  ngOnInit() {
    
    
  }

}
