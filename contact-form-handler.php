<?php
$errors = '';
$myemail = 'egor.chasnovskii@gmail.com';//<-----Put Your email address here.
if(empty($_POST['name'])  ||
   empty($_POST['phone']))
{
    $errors .= "\n Error: all fields are required";
}
$name = $_POST['name'];
$phone = $_POST['phone'];

if( empty($errors))
{
$to = $myemail;
$email_subject = "Contact form submission: $name";
$email_body = "You have received a new message. ".
" Here are the details:\n Name: $name \n ".
"Phone \n $phone";
$headers = "From: $myemail\n";
$email_address = "egorindynamo@gmail.com";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: contact-form-thank-you.html');
}
?>