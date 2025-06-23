import { Routes } from '@angular/router';
import { Listar } from './Componente/listar/listar';
import { Guardar } from './Componente/guardar/guardar';
import { Editar } from './Componente/editar/editar';
import { ListarU } from './Componente/listar-u/listar-u';
import { GuardarU } from './Componente/guardar-u/guardar-u';
import { EditarU } from './Componente/editar-u/editar-u';

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
    },
    {
        path: 'listarU',
        component:ListarU
    },
    {
        path: 'guardarU',
        component:GuardarU
    },
    {
        path: 'editarU',
        component:EditarU
    }

];
