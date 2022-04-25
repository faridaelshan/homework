/* onclick="window.print()"
&	AND	                    5 & 1	 0101& 0001	   0001	    1
|	OR	                    5 | 1	 0101| 0001	   0101	    5
~	NOT                     ~ 5	     ~0101         1010	    10 
^	XOR	                    5 ^ 1	 0101^ 0001	   0100	    4
<<	left shift	            5 << 1	 0101<< 1	   1010	    10
>>	right shift          	5 >> 1	 0101>> 1	   0010	    2
>>>	unsigned right shift	5 >>> 1	 0101>>> 1	   0010	    2 */
/* let x = {firstName:"John", lastName:"Doe"};    // Object */
/* slice(start, end)
substring(start, end)
substr(start, length) */
/* let firstName = "John";
let lastName = "Doe";
let text = `Welcome ${firstName}, ${lastName}!`; */
/* getFullYear()	Get the year as a four digit number (yyyy)
getMonth()	Get the month as a number (0-11)
getDate()	Get the day as a number (1-31)
getHours()	Get the hour (0-23)
getMinutes()	Get the minute (0-59)
getSeconds()	Get the second (0-59)
getMilliseconds()	Get the millisecond (0-999)
getTime()	Get the time (milliseconds since January 1, 1970)
getDay()	Get the weekday as a number (0-6) */
/* switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  } */
/*   let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName; */
/* let file = "fetch_info.txt"

fetch (file)
.then(x => x.text())
.then(y => document.getElementById("demo").innerHTML = y); */
/* To send a request to a server, you can use the open() and send() methods of the XMLHttpRequest object:

xhttp.open("GET", "ajax_info.txt");
xhttp.send();
Example
// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send(); */
/* function showHint(str) {
    if (str.length == 0) {
      document.getElementById("txtHint").innerHTML = "";
      return;
    } else {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function() {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    xmlhttp.open("GET", "gethint.php?q=" + str);
    xmlhttp.send();
    }
  } */
  /* function showHint(str) {
    if (str.length == 0) {
      document.getElementById("txtHint").innerHTML = "";
      return;
    } else {
      const xmlhttp = new XMLHttpRequest();
      xmlhttp.onload = function() {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    xmlhttp.open("GET", "gethint.asp?q=" + str);
    xmlhttp.send();
    }
  } */