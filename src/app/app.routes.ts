import { CommerceslistComponent } from './commerceslist/commerceslist.component';
import { RouterModule, Routes } from '@angular/router'
import { CommerceComponent } from './commerce/commerce.component';

const APP_ROUTES: Routes = [
    { path: 'commerces', component: CommerceslistComponent },
    { path: 'commerce/:id', component: CommerceComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'commerces' }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
