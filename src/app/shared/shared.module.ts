import { NgModule } from "@angular/core";
import { GenericDialogModule } from "./generic-dialog/generic-dialog.module";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [
    GenericDialogModule
  ],
  declarations: [HeaderComponent],
  exports: [
    GenericDialogModule,
    HeaderComponent
  ]
})
export class SharedModule {

}
