function foo(arg){
    function bar() {
        console.log(arg);
    }

    bar();
}

foo(1);