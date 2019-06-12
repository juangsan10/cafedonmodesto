import {Routes} from "@angular/router"
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { FacturacionComponent } from './Components/facturacion/facturacion.component';




export const ROUTES: Routes =[

    {path: 'login', component: LoginComponent},
    {path: 'index', component: IndexComponent},
    {path: 'facturacion', component: FacturacionComponent},
    {path: '', pathMatch:'full',redirectTo:'index'},
    {path: '**', pathMatch:'full',redirectTo:'index'}
];