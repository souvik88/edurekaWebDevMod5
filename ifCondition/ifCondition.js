/*
Write  JavaScript  to  accept  a  name  in  prompt  and  validate  whether  name  is entered  or not. If the  name  is not entered  then  display a message  "Sorry, you have  not  entered  any name". If  the  name is  entered  by the  user  then  display "Hello <entered name>, welcome".  Here <entered name> is the name entered by the user.
*/

let name = prompt('Enter your name: ');
if(name != '') {
    alert(`Hello ${name}, welcome`);
} else {
    alert('Sorry, you have not entered any name.')
}