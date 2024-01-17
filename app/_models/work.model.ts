export class Work {
    name: string;
    description: string;
    link: string;
    img_link: string;
    constructor(name: string, description:string, link:string, img_link:string){
        this.name = name;
        this.description = description;
        this.link = link;
        this.img_link = img_link;
    }
}