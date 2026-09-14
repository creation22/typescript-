function getChai(kind : string|number) {
    if(typeof kind === "string"){
        return `Making ${kind} chai ...` ; 
    }
    return `chai order : ${kind} `  ; 
}


function serveChai(msg? : string) {
    if(msg) {
        return `serving ${msg}`  ; 
    }
    return `serving default masala chai `  ; 
}

function orderChai( size : "small" | "medium" | "large" | number ){
    if(size === "small") {
        return `smaall cutting chai ` ; 
    }
    if(size === "medium" || size === "large"){
        return 'make extra chai' ; 
    }

    return `order chai of size : ${size}` ; 
}

class kulhadChai {
    serve(){
        return `serving kulhad chai` ; 
    }

}
class cutting {
    serve() {
        return 'serving cutting chai' ; 
    }
}


function serve(chai : kulhadChai | cutting){
    if(chai instanceof kulhadChai){
        return chai.serve() ; 
    }

}

type chaiOrder = {
    type : string 
    sugar : number  
}
function isChaiorder(obj : any): obj is chaiOrder {
    return (
        typeof obj === "object" &&  obj != null &&  typeof obj.type === "string" && typeof obj.sugar === "number" 
    )
}

function serveOrder(item : chaiOrder | string){
    if(isChaiorder(item)){
        return `serving ${item.type } with ${item.sugar} sugar` ; 
    }
    return `serving custom chai ${item} ` ; 
}

type masalaChai = {type : "masala" , spiceLevel : number } ; 
type gingerChai = {type : "ginger" , amount : number } ; 
type elaichiChai = {type : "elaichi" , aroma : number } ; 

type chai = masalaChai | gingerChai | elaichiChai ; 


function MakeChai(order : chai){
    switch(order.type){
        case "masala"  :
            return 'masala chai '
            break ; 
        case "ginger" :
            return 'ginger chai ' ; 
            break ;
        case "elaichi" :
            return 'elaichi chai ' ; 
            break ; 
    }   
}

function brew(order : masalaChai | gingerChai){
    if("spiceLevel" in order){
        
    }
}