function foo(arg){
    arg();
}

foo(() => {
    console.log(1);
})