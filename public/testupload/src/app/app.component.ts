//import component and the oninit method from angular core
import { Component, OnInit } from '@angular/core';

//create the component properties
@Component({
    //define the element to be selected from the html structure.
    selector: 'app-root',
    //location of our template rather than writing in-line templates.
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    //This is the default title property created by the angular cli. Its responsible for the app works
    title = 'app works!';

    ngOnInit() {
       //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
       
    }
}
