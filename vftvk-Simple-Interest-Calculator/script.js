function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal>0) {
        alert('If you deposit ' + principal + ','+ ' at an interest rate of ' + rate + '. ' + 'You will receive an amount of ' + interest + ', in the year ' + year);
     }
     else alert ('Enter a positive number')
    }
