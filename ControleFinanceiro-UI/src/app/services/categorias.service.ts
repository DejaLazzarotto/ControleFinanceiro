import { Categoria } from './../models/Categoria';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpoptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('TokenUsuarioLogado')}`
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {
  url = 'api/Categorias';

  constructor(private http: HttpClient) {}

  PegarTodos(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.url);
  }

  PegarCategoriaPeloId(categoriaId: number): Observable<Categoria> {
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.get<Categoria>(apiUrl);
  }

  NovaCategoria(categoria: Categoria): Observable<any> {
    return this.http.post<Categoria>(this.url, categoria, httpoptions);
  }

  AtualizarCategoria(
    categoriaId: number,
    categoria: Categoria
  ): Observable<any> {
    const apiUrl = `${this.url}/${categoriaId}`;
    return this.http.put<Categoria>(apiUrl, categoria, httpoptions);
  }

}
