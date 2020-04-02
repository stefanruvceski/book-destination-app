import { Component, OnInit, ViewContainerRef} from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "../nativescript-cardview";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";

import { ModalComponent } from "../modal/modal.component";
import { RouterExtensions } from "nativescript-angular/router";

registerElement("CardView", () => CardView);

@Component({
    selector: "Home",
    providers: [ModalDialogService],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    data = []
   
    constructor(private router: RouterExtensions,private modalService: ModalDialogService, private viewContainerRef: ViewContainerRef) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        for (let i = 0; i < 20; i++) {
            this.data.push({ image:"https://i.pinimg.com/474x/e4/f8/a6/e4f8a6d019c9a95fc1ecc4183e855a71.jpg",
                             heading: "Mexico" + (i + 1), 
                             content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus quam velit, non viverra felis ullamcorper sed. Vivamus dui magna, cursus vitae varius eget, lobortis sit amet eros. Mauris ligula elit, sollicitudin ut semper non, dapibus ut eros. Duis scelerisque nunc id odio consectetur sagittis. Suspendisse sollicitudin est quis lorem dapibus egestas. Pellentesque tempus metus sapien, at cursus neque bibendum et. Quisque fringilla in erat eget facilisis.\n\nSed rhoncus urna tortor, ut elementum nunc vulputate luctus.Fusce sit amet felis ac augue lobortis venenatis.Nunc mollis ex vehicula velit bibendum facilisis.Cras sit amet eros eros.Nulla faucibus, nisl a dignissim bibendum, lorem neque sollicitudin neque, at tincidunt massa elit vel odio.Sed pulvinar magna dui, nec luctus ipsum vehicula in.Ut sit amet risus dui.Proin rhoncus sapien elit.Etiam vestibulum posuere consectetur.Aenean et turpis ut orci semper placerat sed ac mauris.Cras elementum volutpat gravida.Ut ut eros non arcu placerat egestas.Cras at pharetra quam.Phasellus rutrum nisi sit amet sapien posuere, sed fringilla arcu semper.Integer gravida cursus interdum.Donec ultrices urna ac est aliquam posuere."
                            });
        }
    }
    onX(){
        this.router.navigate(['login'], { clearHistory: true });
    }
    ontap(item:Card){
        const options: ModalDialogOptions = {
            viewContainerRef: this.viewContainerRef,
            fullscreen: false,
            context: {item}
        };
        this.modalService.showModal(ModalComponent, options);
    }

}
class Card{
    heading:string;
    content:string;
    image: string
}