import { Routes, RouterModule } from '@angular/router';
import { ParamsActivate } from '../core/guards/params.activate';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
    {
        path: 'user-list',
        component: UserListComponent
    },
    {
        path: 'user-detail',
        pathMatch: 'full',
        redirectTo: '/user-list'
    },
    {
        path: 'user-detail/:id',
        component: UserDetailComponent,
        canActivate: [ParamsActivate],
        data: {
            ParamsActivate: ['id'],
            ParamsActivateRedirectUrl: '/user-list'
        }
    }
];

export const UserRoutingModule = RouterModule.forChild(routes);

