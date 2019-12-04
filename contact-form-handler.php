<?php
$errors = '';
$myemail = 'remont.pod.kliuch.kyiv@gmail.com';
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
$email_body = "На сайте новое сообщение: ".
" Детали:\n Имя: $name \n ".
"Телефон \n $phone";
$headers = "From: $myemail\n";
$email_address = "egor.chasnovskii@gmail.com";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
//redirect to the 'thank you' page
header('Location: contact-form-thank-you.html');
}
?>