//using a double linked list to make step backs easier
import React, { useState } from 'react'


let list = new LinkedList

export function list(){
    
    const [current, setCurrent] = useState(list.header)
    return(
        <div>
            <input type="button" id="last" value="<" onClick={() => {if(current.prev != null){setCurrent(current = current.prev)}}}/>
            <div>
                <h1>{current.content.subject}</h1>
                <h1>{current.content.ammount}</h1>
            </div>
            <input type="button" id="next" value=">" onClick={() => {if(current.next != null){setCurrent(current = current.next)}}}/>
            <input type="text" id="searchTxt" placeholder="Search"/>
            <input type="button" id="searchBttn" value="Search"/>
            <input type="button" id="delete" value="Delete"/>
            <input type="button" id="addBefore" value="Insert Before"/>
            <input type="button" id="addAfter" value="Insert After"/>
            <input type="text" id="subject" placeholder="Subject"/>
            <input type="text" id="ammount" placeholder="Ammount"/>
        </div>
    )
}


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

