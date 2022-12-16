import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'getvalue'
})
export class GetValuePipe implements PipeTransform {
  transform(value: Object[], index: number): string[] {
    return value?.map(val => {
      return Object.values(val)[index]
    });
  }
}
