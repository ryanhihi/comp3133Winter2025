import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroesComponent } from './heroes/heroes.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';


@NgModule({
  imports:      [ BrowserModule,
                FormsModule
   ],
  declarations: [ AppComponent, 
                HeroesComponent,
                RemoveSpacesPipe
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }