import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AltertifyService } from '../_services/altertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class MemberDetailResolver implements Resolve<User>{

    constructor(private userService: UserService, private router: Router, private alertify: AltertifyService)
    {}
    resolve(route: ActivatedRouteSnapshot): Observable<User>{
        // when we use resolves it automatically subscribes so need for that
        // pipe is used for error catching. rxjs
        return this.userService.getUser(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Problem retrieving data');
                this.router.navigate(['/members']);
                return of(null); // of is type of observeable
            })
        );
    }
}