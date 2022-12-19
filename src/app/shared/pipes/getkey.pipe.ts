import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'getkeys'
})
export class GetKeysPipe implements PipeTransform {
  transform(value: Object | undefined): string[] {
    if (value === undefined) {
      return [];
    } else {
      return Object.keys(value);
    }
  }
}
