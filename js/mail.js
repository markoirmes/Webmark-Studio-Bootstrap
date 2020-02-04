const senderemail = document.getElementById('email').value;
const msg = document.getElementById('message').value;
const sendername = document.getElementById('email').value;
function sendEmail() {
Email.send({
    SecureToken : "fbe5b4e6-1fd9-4567-8b52-164d18706248",
    To : 'markoirmes@gmail.com',
    From : senderemail,
    Subject : "New message for Webmark Studio",
    Body : sendername + '<br><br>' + msg 
}).then(
  message => alert('Message sent!')
);
}