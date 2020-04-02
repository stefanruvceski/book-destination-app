import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";

@Component({
    selector: "modal",
    templateUrl: "./modal.component.html",
    styleUrls:["./modal.component.css"],

})

export class ModalComponent implements OnInit {
   

    constructor(private params: ModalDialogParams) { 
        console.log(params.context.item.heading);
    }

    ngOnInit() { }

    close() {
        this.params.closeCallback();
    }
}

