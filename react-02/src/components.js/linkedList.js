//using a double linked list to make step backs easier
import React, { useState } from 'react'
import 'C:/code/cohort-3/react-02/src/linkedList.css'
import ThemeContext from '../ThemeContext'


function ListController() {

    let [current, setCurrent] = useState(list.header);
    const searchField = React.createRef();
    const subject = React.createRef();
    const ammount = React.createRef();
    let checkCharacter = (event) => {    
        if(event.which === 220){
            event.preventDefault()
        }
    }
    return (
        <ThemeContext.Consumer>
            {({ color, fontSize}) => (
                <div style={{ color: color, fontSize: fontSize }}>
                    <input type="button" id="last" value="<" onClick={() => { if (current.prev !== null && current.prev.prev !== null) { setCurrent(current = current.prev) } }} />
                    <div id="content">
                        <h1 id="currentSubject">{current.content.subject}</h1>
                        <h1 id="currentAmount">{current.content.ammount}</h1>
                    </div>
                    <input type="button" id="next" value=">" onClick={() => { if (current.next !== null) { setCurrent(current = current.next) } }} />
                    <br />
                    <input type="text" id="searchTxt" placeholder="Search" ref={searchField} />
                    <input type="button" id="searchBttn" value="Search" onClick={() => {
                        let searched = list.search(searchField.current.value);
                        if (typeof searched === "string") {
                            alert(searched);
                        } else { setCurrent(current = searched); }
                    }} />
                    <input type="button" id="delete" value="Delete" onClick={() => {
                        if (current !== list.header) {
                            list.removeNode(current);
                            setCurrent(current = current.prev);
                        }
                    }} />
                    <br />
                    <input type="button" id="addBefore" value="Insert Before" onClick={() => {
                        if (current.prev !== null) {
                            list.addNode(current.prev, subject.current.value, ammount.current.value);
                            setCurrent(current = current.prev)
                        } else {
                            list.addNode(list.header, subject.current.value, ammount.current.value);
                            setCurrent(current = list.header.next);
                        }
                    }} />
                    <input type="button" id="addAfter" value="Insert After" onClick={() => {
                        list.addNode(current, subject.current.value, ammount.current.value);
                        setCurrent(current = current.next);
                    }} />
                    <br />
                    <input type="text" id="subject" placeholder="Subject" ref={subject} onKeyDown={checkCharacter}/>
                    <input type="number" id="ammount" placeholder="Ammount" ref={ammount} />
                </div>
            )}
        </ThemeContext.Consumer>

    )
}


export class LinkedList {
    constructor() {
        this.header = { content: { subject: null, ammount: null }, prev: null, next: null }
    }
    search(location, current = this.header) {
        if (location === '\\end') {
            if (current.next != null) {
                return this.search(location, current.next);
            }
            return current;
        }
        if (location === '\\start') {
            if (this.header.next === null) {
                return this.header;
            }
            return this.header.next;
        }
        if (typeof location === 'string') {
            if (location !== current.content.subject) {
                if (location === "") {
                    return "Please enter something in the search field."
                }
                if (current.next === null) {
                    return 'Subject "' + location + '" does not exist';
                }
                return this.search(location, current.next)
            }
            return current;
        }
        if (typeof location === 'number') {
            if (location === 0) {
                return current;
            }
            if (current === null) {
                return 'The item you are searching for does not exist';
            }
            return this.search(location - 1, current.next);
        }
        if (typeof location === 'object') {
            return location;
        }
    }
    addNode(location, content, ammount) {
        let current = this.search(location);
        let next = current.next
        current.next = { content: { subject: content, ammount: ammount }, next: current.next, prev: current }
        if (current.next.next != null) {
            next.prev = current.next;
        }

    }
    removeNode(location) {
        let current = this.search(location);
        if (typeof current === 'string') {
            return current;
        }
        current.prev.next = current.next;
        if (current.next != null) {
            current.next.prev = current.prev;
        }
    }
    totalAmmounts(count = 0, current = this.header) {
        if (current.next != null) {
            return this.totalAmmounts(count + Number(current.content.ammount), current.next)
        }
        return count + Number(current.content.ammount);
    }
}
let list = new LinkedList();
export default ListController;