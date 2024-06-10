function foo(arg) {
    arg();
}

function bar() {
    console.log('bar');
}

foo(bar);