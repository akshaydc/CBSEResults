// Function for calculating grades
const calculate = () => {

    // Getting input from user into height variable.
    let science = document.querySelector("#science").value;
    let hindi = document.querySelector("#hindi").value;
    let maths = document.querySelector("#maths").value;
    let social = document.querySelector("#social").value;
    let eng = document.querySelector("#eng").value;
    let internals = document.querySelector("#internals2").value;
    let science2 = document.querySelector("#science2").value;
    let hindi2 = document.querySelector("#hindi2").value;
    let maths2 = document.querySelector("#maths2").value;
    let social2 = document.querySelector("#social2").value;
    let eng2 = document.querySelector("#eng2").value;
    let internals2 = document.querySelector("#internals2").value;
    let grades = "";
    
    // Input is string so typecasting is necessary. */
    let totalgrades1 =
        parseFloat(science) +
        parseFloat(hindi) +
        parseFloat(maths) +
        parseFloat(eng) +
        parseFloat(internals) +
        parseFloat(social);
    let totalgrades2 =
        parseFloat(science2) +
        parseFloat(hindi2) +
        parseFloat(maths2) +
        parseFloat(eng2) +
        parseFloat(internals2) +
        parseFloat(social2);
    
    // Checking the condition for the providing the
    // grade to student based on percentage
    let percentage1 = (totalgrades1 / 250) * 100;
    let percentage2 = (totalgrades2 / 250) * 100;
    let term1avg = totalgrades1*0.30;
    let term2avg = totalgrades2*0.70;
    let termtotal=term1avg+term2avg;
    let totpercentage = (termtotal / 250) * 100;
    // Checking the values are empty if empty than
    // show please fill them
    if (science == "" || maths == ""
                || social == "" || eng == "" || internals == "") {
        document.querySelector("#showdata").innerHTML
            = "Please enter all the fields";
    } else {
    
        // Checking the condition for the fail and pass
        if (totpercentage >= 39.5) {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Your Term 1 total Out of 250 is ${totalgrades1}<br>
            Term 1 Percentage: ${percentage1}%.<br>
            Your Term 2 total Out of 250 is ${totalgrades2}<br>
            Term 2 Percentage: ${percentage2}%. <br>
            Total Percentage: ${totpercentage}%.<br>Congratulations! `;
        } else {
        document.querySelector(
            "#showdata"
        ).innerHTML =
            ` Your Term 1 total Out of 250 is ${totalgrades1} <br>
            Term 1 Percentage: ${percentage1}%. <br>
            Your Term 2 total Out of 250 is ${totalgrades2} <br>
            Term 2 Percentage: ${percentage2}%.<br>
            Total Percentage: ${totpercentage}%.  <br> Better luck next time! `;
        }
    }
    };
    