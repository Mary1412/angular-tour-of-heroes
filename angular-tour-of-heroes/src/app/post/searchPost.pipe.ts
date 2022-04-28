import { Pipe, PipeTransform } from "@angular/core";
import { Post } from "./post";


@Pipe({
    name: 'searchPost'
})

export class Search2Pipe implements PipeTransform{
    transform(posts: Post[],value: string) {
        return posts.filter((post)=>{
            return post.title.includes(value)
        })
    }

}