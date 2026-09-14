let subs: number |string = 1000 ; 
// can be number or string ; 
let apiRequestStatus: "pending"|"success"| "error" = "pending" ; 

apiRequestStatus = "pending"  ;

const orders = ['12' , '123' , '12323'] ; 


let currrentOrder : string|  undefined; 
for(let order of orders){
    if(order == '123'){
        currrentOrder = order ; 
        break  ; 
    }
    currrentOrder = "no order found" ;
}

console.log(currrentOrder) ; 