import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { isAdmin, isResponsable } from "../utils/storage";

@Injectable({
  providedIn: "root",
})
export class AdminOrResponsableGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const responsable = isResponsable();
    const admin = isAdmin();
    if (!admin && !responsable) {
      // this.router.navigate(["/unauthorized"]);
      return this.router.parseUrl("/unauthorized");
    }
    return true;
  }
}
