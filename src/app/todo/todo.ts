export class Todo {
    id:number;
    name:string;
    status:boolean;
    constructor(values:Object={}){
        Object.assign(this,values);
    }
}

