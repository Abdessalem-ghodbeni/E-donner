import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { isResponsable } from "../utils/storage";

@Injectable({
  providedIn: "root",
})
export class ResponsableGuard implements CanActivate {
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
    
    if (!responsable) {
      // this.router.navigate(["/unauthorized"]);
    //  return this.router.parseUrl("/unauthorized");
    }
    return true;
  }
}
