function list(clients){
    return clients.map(client => `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
                                ${client.name}
                                <strong>$ ${client.balance} </strong>
                                </li>`).join('')
}

function order(clients, property){
    return clients.sort((a,b) => {
        if(b[property] > a[property]){
            return -1;
        } else if(b[property] < a[property]){
            return 1;
        }else{
            return 0;
        }
    })
}

function total(clients){
    return clients.reduce((total, client) => {
        return total += client.balance;
    }, 0)
}

function info(number){
    return clients.find(client => client.index === number)
}

function search(string){
    return clients.filter(client => client.name.toLocaleLowerCase().includes(string.toLowerCase()))
}



