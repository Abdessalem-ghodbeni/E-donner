import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { isAdmin, isCitoyen } from "../utils/storage";

@Injectable({
  providedIn: "root",
})
export class AdminOrCitoyenGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const citoyen = isCitoyen();
    const admin = isAdmin();
    if (!admin && !citoyen) {
      return this.router.parseUrl("/unauthorized");
    }
    return true;
  }
}
