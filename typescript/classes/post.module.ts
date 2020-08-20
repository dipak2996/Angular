export class Post {
    title: string;
  private _isPublic: boolean;

     get isPublic(): boolean {
        return this._isPublic;
    }
     set isPublic(value: boolean) {
        this._isPublic = value;
    }
    constructor(title:string,isPublic:boolean) 
    {
        this._isPublic=isPublic;
        this.title=title;
        console.log("post is created")
    }

    displayPost(){
        if(this._isPublic===true){
            console.log("post will display");
        }
        else{
            console.log("post will not going to display")
        }
    }

}