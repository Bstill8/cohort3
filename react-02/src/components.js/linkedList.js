
export class LinkedList{
    constructor(){
        this.header = {content: {subject: null, ammount: null}, previous: null, next: null}
    }
    search(location, current = this.header){
        if(location === 'end'){
            if(current.next != null){
                return this.search(location, current.next);
            }
            return current;
        }
        if(location === 'beginning'){
            return this.header.next;
        }
        if(typeof location === 'string'){
            if(location != current.content.subject){
                if(current.next === null){
                    return 'Subject does not exist';
                }
                return this.search(location, current.next)
            }
            return current;
        }
        
    }
    addNode(location, content){
        let current = this.search(location);
        current.next = {content: content, next: current.next, prev: current}
    }
}