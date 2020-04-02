import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
@Component({
    selector: "Singup",
    templateUrl: "./singup.component.html",
    styleUrls: ["./singup.component.css"]
})
export class SingupComponent implements OnInit {

    constructor(private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your
    }
    onTap(flag:string){
        if(flag=='login')
            this.router.navigate(['login'], { clearHistory: true });
        else if(flag =='home'){
            this.router.navigate(['home'], { clearHistory: true });
        }
    }
}
