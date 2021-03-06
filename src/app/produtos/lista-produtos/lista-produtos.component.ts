import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../shared/produtos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {
  produtos: Observable<any[]>;

  constructor(private produtosService: ProdutosService, private toastr: ToastrService) { }

  ngOnInit() {
    this.produtos = this.produtosService.getAll();
  }

  remover(key: string, filePath: string) {
    this.produtosService.remove(key, filePath);
  }
}
