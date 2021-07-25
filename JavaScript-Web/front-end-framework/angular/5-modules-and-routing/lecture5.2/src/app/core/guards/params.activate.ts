import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';

@Injectable()

export class ParamsActivate implements CanActivate {
    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
        const { data: { ParamsActivate, ParamsActivateRedirectUrl } } = route;

        if (!ParamsActivate || !Array.isArray(ParamsActivate) || ParamsActivate.length == 0) {
            return true;
        }

        const hasAllRouteParams = ParamsActivate.reduce((acc, curParamName) => {
            return !!route.params[curParamName] && acc;
        }, true); 

        if (hasAllRouteParams) {
            return true;
        }

        return this.router.parseUrl(ParamsActivateRedirectUrl || '/');
    }
}