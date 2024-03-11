import { Routes } from '@angular/router';
import { ExportHrisComponent } from './export-hris/export-hris.component';
import { ImportBreaksComponent } from './import-breaks/import-breaks.component';
import { ViewReducersComponent } from './view-reducers/view-reducers.component';
import { DynamicWrapperComponent } from './dynamic-wrapper/dynamic-wrapper.component';

const routeConfig: Routes = [
    {
        path:'home',
        component: DynamicWrapperComponent,
        title: 'Home Page'
    },
    {
        path:'hris-export',
        component: ExportHrisComponent,
        title: 'Export HRIS File'
    },
    {
        path:'break-import',
        component: ImportBreaksComponent,
        title: 'Import Training Breaks'
    },
    {
        path:'view-reducers',
        component: ViewReducersComponent,
        title: 'Generate Reducers View'
    },
    {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

export default routeConfig;
