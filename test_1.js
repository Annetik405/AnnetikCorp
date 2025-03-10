function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result = result * x;
    }

    return result;
}

let c = pow(2,3);
console.log("2 в 3 степени", c);


