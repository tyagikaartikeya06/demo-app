import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ItemCard } from './item-card/item-card';
import { LoginForm } from './login-form/login-form';

export const routes: Routes = [
    {
        path:"login",component: LoginForm
    }
];
