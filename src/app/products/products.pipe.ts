import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'products'
})
export class ProductsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? value.filter((item,index)=>{
      if(item.productName.toUpperCase().indexOf(args.toUpperCase())!=-1) {
        return true;
    }

  }):value;
}
  }
