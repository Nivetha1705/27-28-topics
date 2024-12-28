function attendance(callback){
    setTimeout(()=>{
        console.log("attendance given");
        callback();
    },2000);
}
function lunch(callback){
    setTimeout(()=>{
        console.log("Lunch eaten");
        callback();
    },2000);
}
function goingtohome(callback){
    setTimeout(()=>{
        console.log("WENT TO HOME");
        callback();
    },1500);
}
attendance(()=>{
    lunch(()=>{
        goingtohome(()=>{
            console.log("Day completed")
        })
    })
})