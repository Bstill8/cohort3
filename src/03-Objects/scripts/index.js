import {del, depost, withdrw, cardAdder, user} from './account.js'

accountCreator.addEventListener('click', () => {
    if(event.target.id == 'createAccount'){
        user.createAccount(acctName.value, initialBalance.value);
        main.appendChild(cardAdder());
    }
    if(event.target.id == 'small'){
        mainOut.innerText = 'Smallest Account: ' + user.lowAccount()[1];
    }
    if(event.target.id == 'large'){
        mainOut.innerText = 'Largest Account: ' + user.highAccount()[1];
    }
    if(event.target.id == 'sum'){
        mainOut.innerText = user.sumAccounts();
    }
})
main.addEventListener('click', () => {
    if(event.target.className == 'deposit'){
        depost(event);
    }
    if(event.target.className == 'withdraw'){
        withdrw(event);
    }
    if(event.target.className == 'delete'){
        del(event);
    }
    
})