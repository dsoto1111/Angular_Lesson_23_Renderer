import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { SetColorDirective } from './set-color.directive';
import { TestRendererDirective } from './test-renderer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SetColorDirective,
    TestRendererDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
