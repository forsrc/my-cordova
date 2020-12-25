import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChatModule } from './chat/chat.module';
import { DemoComponent } from './demo/demo.component';
import { DemoModule } from './demo/demo.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { TableComponent } from './table/table.component';
import { TableModule } from './table/table.module';
import { UserComponent } from './user/user.component';
import { UserModule } from './user/user.module';


const routes: Routes = [
  {
    path: '',
    // component: HomeComponent,
    //loadChildren: './home/home.module#HomeModule'
    // loadChildren: () => HomeModule
    component: HomeComponent
  },
  {
    path: 'home',
    // component: HomeComponent,
    // loadChildren: './home/home.module#HomeModule'
    // loadChildren: () => HomeModule
    component: HomeComponent
  },
  {
    path: 'login',
    // component: LoginComponent,
    // loadChildren: './login/login.module#LoginModule'
    // loadChildren: () => LoginModule
    component: LoginComponent
  },
  {
    path: 'logout',
    // component: LoginComponent,
    // loadChildren: './login/login.module#LoginModule'
    // loadChildren: () => LoginModule
    component: LoginComponent
  },
  {
    path: 'demo',
    // component: DemoComponent,
    // loadChildren: './demo/demo.module#DemoModule'
    // loadChildren: () => DemoModule
    component: DemoComponent
  },
  {
    path: 'user',
    // component: UserComponent,
    // loadChildren: './user/user.module#UserModule'
    // loadChildren: () => UserModule
    component: UserComponent
  },
  {
    path: 'table',
    // component: TableComponent,
    // loadChildren: './table/table.module#TableModule'
    // loadChildren: () => TableModule
    component: TableComponent
  },
  {
    path: 'chat',
    // component: DemoComponent,
    // loadChildren: './chat/chat.module#ChatModule'
    // loadChildren: () => ChatModule
    component: ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
