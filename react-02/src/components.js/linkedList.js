//using a double linked list to make step backs easier
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
            if(this.header.next === null){
                return this.header;
            }
            return this.header.next;
        }
        if(typeof location === 'string'){
            if(location != current.content.subject){
                if(current.next === null){
                    return 'Subject \"' + location + '\" does not exist';
                }
                return this.search(location, current.next)
            }
            return current;
        }
        if(typeof location === 'number'){
            if(location === 0){
                return current;
            }
            if(current === null){
                return 'The item you are searching for does not exist';
            }
            return this.search(location - 1, current.next);
        }
        if(typeof location === 'object'){
            return location;
        }
    }
    addNode(location, content, ammount){
        let current = this.search(location);
        let next = current.next
        current.next = {content: {subject: content, ammount: ammount}, next: current.next, prev: current}
        if(current.next.next != null){
            next.prev = current.next;
        }
        
    }
    deleteNode(location){
        let current = this.search(location);
        if(typeof current === 'string'){
            return current;
        }
        current.prev.next = current.next;
        if(current.next != null){
            current.next.prev = current.prev;
        }  
    }
    totalAmmounts(count = 0, current = this.header){
        if(current.next != null){
            return this.totalAmmounts(count + Number(current.content.ammount), current.next)
        }
        return count + Number(current.content.ammount);
    }
}