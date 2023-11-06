import { NgModule } from '@angular/core';
import { NgTextWordHighlightComponent } from './ng-text-word-highlight.component';
import { HighlightDirective } from './ng-text-word-highlight.directive';



@NgModule({
  declarations: [
    NgTextWordHighlightComponent,
    HighlightDirective
  ],
  imports: [
  ],
  exports: [
    NgTextWordHighlightComponent,
    HighlightDirective
  ]
})
export class NgTextWordHighlightModule { }
