import { Injectable } from '@angular/core';
import { DynamicItem } from './dynamic.types';
import { ExportHrisComponent } from './export-hris/export-hris.component';
import { ImportBreaksComponent } from './import-breaks/import-breaks.component';
import { ViewReducersComponent } from './view-reducers/view-reducers.component';

@Injectable({
  providedIn: 'root'
})
export class DcService {
  getDynamicComponents() {
    const components = [
      new DynamicItem(ExportHrisComponent, { name: 'Generar Fichero HRIS' }),
      new DynamicItem(ImportBreaksComponent, { name: 'Importar Pausas Formación' }),
      new DynamicItem(ViewReducersComponent, { name: 'Generar Vista Reductores' }),
    ];

    return components;
  }

  constructor() { }
}
