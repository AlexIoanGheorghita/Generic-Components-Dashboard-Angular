import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'getkey'
})
export class GetKeyPipe implements PipeTransform {
  transform(value: Object, index: number): string {
    return Object.keys(value)[index];
  }
}
