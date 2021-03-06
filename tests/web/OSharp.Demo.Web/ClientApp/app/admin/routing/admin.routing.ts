import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MenuService } from '../../shared/angle/core/menu/menu.service';
import { menu } from "./menu";
import { LayoutComponent } from '../layout/layout.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: HomeComponent, data: { title: '信息汇总 - 管理' } },
            { path: 'identity', loadChildren: '../identity/identity.module#IdentityModule' },
            { path: 'security', loadChildren: '../security/security.module#SecurityModule' },
            { path: 'system', loadChildren: '../system/system.module#SystemModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
    constructor(public menuService: MenuService) {
        menuService.addMenu(menu);
    }
}
