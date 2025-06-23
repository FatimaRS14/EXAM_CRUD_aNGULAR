import { Routes } from '@angular/router';
import { Listar } from './Componente/listar/listar';
import { Guardar } from './Componente/guardar/guardar';
import { Editar } from './Componente/editar/editar';

export const routes: Routes = [

    {
        path: 'listar',
        component:Listar
    }
    ,
    {
        path: 'guardar',
        component:Guardar
    },
    {
        path: 'editar',
        component:Editar
    }
];
