import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { isCitoyen } from "../utils/storage";

@Injectable({
  providedIn: "root",
})
export class CitoyenGuard implements CanActivate {
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
    if (!citoyen) {
      // this.router.navigate(["/unauthorized"]);
      return this.router.parseUrl("/unauthorized");
    }
    return true;
  }
}
