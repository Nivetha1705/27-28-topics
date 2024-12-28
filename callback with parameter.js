function fun1(fun2,name){
    setTimeout(()=>{
        console.log(`file ${name} is in process`);
        console.log(`file ${name} got downloaded`);
        fun2();

    },2000)
}
function fun2(){
    console.log('download completed');
}
fun1(fun2,"abc");