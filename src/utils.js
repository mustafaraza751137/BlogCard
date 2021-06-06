const empty = (arr) =>{
    if(arr!==undefined && arr!==null && arr.length>0){
        return false;
    }
    return true;
}
const dumplogs=(message)=>{
    console.log(message);
}
export{empty,dumplogs};