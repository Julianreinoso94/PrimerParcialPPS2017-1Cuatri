import { Injectable } from '@angular/core';
import { Cuestionario } from './Cuestionario';
import { CUESTIONARIOS } from './Cuestionarios';



@Injectable()
export class CuestionarioService {
  getCuestionarios(): Promise<Cuestionario[]> {
    return Promise.resolve(CUESTIONARIOS);
  }
}
