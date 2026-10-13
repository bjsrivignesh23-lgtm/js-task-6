function details() {
    var a = Number(prompt("Enter the number"))
    if (a % 2 == 0) {
        alert("The entered digit is even")
    }
    else {
        alert("The entered digit is odd")
    }

    function table(n) {
        for (i = 1; i <= 10; i++)
            console.log(a + "x" + i + "=", n * i)


    }
    table(a)

    var sum = 0;

    for (let i = 1; i <= a; i++) {
        sum += i;
    }

    alert("The sum of the natural numbers from 1 to" + a + "=" + sum)

    if (a % 2 == 0) {
        let row =""
        for (let i = 0; i < a; i++) {
            for (let j = 0; j < a; j++) {
                row += "* ";
            }
            row += "\n";
        }

        console.log(row);

    }
    else {
        for (let i = 1; i <= a; i++) {
            let row = "";
            for (let j = 1; j <= i; j++) {
                row += "* ";
            }
            console.log(row);
        }
    }
}
details()
confirm("you want to do the operation again")
if (confirm) {
    details()
}
else {
    alert("Thank you");
}