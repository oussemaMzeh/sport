import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipes'
})
export class CustomPipesPipe implements PipeTransform {
  transform( ch: string[]){
    let obj=["A","O","U","I","Y","E","a","o","u","i","y","e"]
    let result:string="";
for (let i = 0; i < ch.length; i++) {
  let x:string=ch[i];
  for (let j = 0; j < obj.length; j++) {
    if(ch[i]==obj[j]){
      x="*";
      break;
    }
  }
  result=result+x;
}  
}
   
   }
    
   


