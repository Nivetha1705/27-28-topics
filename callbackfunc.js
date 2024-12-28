function dog(callback){
    setTimeout(()=>{
        console.log("Jack the dog");
        callback();
    },2000);
}
function cat(){
    console.log("Rose the cat")
}
dog(cat)