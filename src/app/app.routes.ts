import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './core/about-me/about-me.component';
import { ProyectsComponent } from './core/proyects/proyects.component';
import { ContactComponent } from './core/contact/contact.component';

export const routes: Routes = [
    {
        path: "",component: HomePageComponent
    }, 
    {
        path: "SobreMi",component: AboutMeComponent
    },
    {
        path: "Proyects",component: ProyectsComponent
    },
    {
        path: "Contact",component: ContactComponent
    },];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
        export class AppRoutesModule{ }
