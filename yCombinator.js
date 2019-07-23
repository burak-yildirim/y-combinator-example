// const Y = f => (x => f( x(x) ))(x => f( x(x) )); // works with lazy evaluation

// const Y = f => (x => f(y => x(x)(y)))(x => f(y => x(x)(y)));
const Y = f => (x => f(x(x)))(x => f(y => x(x)(y)));

// this func gives error !!
function yCombLazy(f) {
    function xFunc(x) {
        return f(x(x))
    }

    return xFunc(xFunc);
}

function yComb(f) {
    function xFunc(x) {

        function yFunc(y) {
            return x(x)(y);
        }

        return f(yFunc);
    }

    return xFunc(xFunc);
}

const factorialLogic = f => num => num === 1 ? 1 : num * f(num - 1);

// const factorial = factorialLogic(Y(factorialLogic));
const factorial = factorialLogic(yComb(factorialLogic));

const fac2 = yComb(factorialLogic);


console.log(factorial(5));
console.log(fac2(5));
console.log(Y(factorialLogic)(5))