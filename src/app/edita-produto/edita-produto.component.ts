import { Produto } from '../produto.model';
import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edita-produto',
  templateUrl: './edita-produto.component.html',
  styleUrls: ['./edita-produto.component.scss'],
})
export class EditaProdutoComponent implements OnInit {

  public cod : string;
  public produto : Produto;
  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cod = this.route.snapshot.paramMap.get('cod');
    let produtos: Array<Produto> = this.produtoService.getProdutos();
    for (let i=0; i < produtos.length; i++) {
      if (produtos[i].cod === this.cod) {
        this.produto = produtos[i];
      }
    }
   
  }
    
  
}
