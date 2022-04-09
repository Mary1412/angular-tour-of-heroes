import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobVarService {

  constructor() { }

  public globalVar = '';
}
