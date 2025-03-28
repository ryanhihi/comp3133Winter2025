import { Component } from "@angular/core";

@Component({
    selector: 'students',
    template: `
    <h2>{{ getTitle() }}</h2>
    <h3>Today is: </h3>
    <p>{{ getCurrentDay() }}</p>
    `
    ,
    styles: [

    ],
})

export class StudentsComponent {
    title = "My List of Students"

    getTitle() {
        return this.title;
    }

    getCurrentDay() {
        return new Date().toDateString();
    }
}