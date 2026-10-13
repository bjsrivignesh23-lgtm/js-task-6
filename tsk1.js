function studentmarks()
{
    let myname = prompt("Enter your name")
    let m1 = Number(prompt("Enter your DSA mark:"))
    let m2 = Number(prompt("Enter your javascript mark:"))
    let m3 = Number(prompt("Enter your REACT mark:"))
    var averg=(m1 + m2 + m3) / 3

    function total() {
        alert("this the total" + (m1 + m2 + m3))
    }

    function average() {
        alert(averg)
    }

    function grade() {

        if (averg >= 90)
        {
            alert("Grade A")
        }
        else if (averg >= 75) {
            alert("Grade B")
        }
        else if (averg >= 50) {
            alert("Grade C")
        }
        else {
            alert("Grade F")
        }
    }

    alert("Student Name:" + myname)
    alert("Total Marks" + (m1 + m2 + m3))
    alert("The averege:" + ((m1 + m2 + m3) / 3))
    grade()
}
studentmarks()
confirm("Do you want to calculate the another result")
if (confirm) {
        studentmarks()
}