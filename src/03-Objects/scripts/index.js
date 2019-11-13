import {del, depost, withdrw, cardAdder, account, accountController, user} from './account.js'

createAccount.addEventListener('click', () => {
    user.createAccount(acctName.value, initialBalance.value);
    main.appendChild(cardAdder());
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