function elementFibonacciego(n) {
    let elementN = n;
    let first = 0;
    let second= 1;
    let next = 0;
    if (elementN==1) {
        return first;
    } else if (elementN==2) {
        return second;
    } else
    for (let i = 1; i < elementN; i++) {
        next = second + first;
        first = second;
        second = next;
    }
    console.log(next);
    return next;
}

elementFibonacciego(7);