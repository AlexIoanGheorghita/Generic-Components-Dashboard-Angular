import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { GenericButtonComponent } from "./generic-button.component";

@NgModule({
    declarations: [GenericButtonComponent],
    imports: [MatButtonModule, CommonModule],
    exports: [
        GenericButtonComponent,
        MatButtonModule
    ]
})
export class GenericButtonModule {}
