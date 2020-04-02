import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "Login",
    templateUrl: "./login.component.html",
    styleUrls:["./login.component.css"]
})
export class LoginComponent implements OnInit {

    constructor(private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    onTap(flag:string){
        

        if(flag=='singup')
            this.router.navigate(['singup'], { clearHistory: true });
        else if(flag =='home'){
            this.router.navigate(['home'], { clearHistory: true } );
        }
    }
}
