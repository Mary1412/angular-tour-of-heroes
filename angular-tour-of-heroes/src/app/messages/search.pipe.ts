import { Pipe, PipeTransform } from "@angular/core";
import { MessageService } from '../message.service';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    transform(messages: any,value: any) {
        return messages.filter((messages: string | any[])=>{
            return messages.includes(value)
        })
    }

}