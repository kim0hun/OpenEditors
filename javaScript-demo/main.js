function foo(arg){
    if(arg === 3) return;
    console.log(arg);
    foo(arg + 1);
}

foo(1);