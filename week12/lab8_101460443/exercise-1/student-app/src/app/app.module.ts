import { AppComponent } from "./app.component";
import { StudentsComponent } from "../students.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    imports: [BrowserModule],

    declarations: [
        AppComponent,
        StudentsComponent
    ],

    bootstrap: [ AppComponent ]
})

export class AppModule { }
