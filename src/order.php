<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
if (isset($_POST['email'])) {$email = $_POST['email'];}
if (isset($_POST['improve'])) {$improve = $_POST['improve'];}
if (isset($_POST['range'])) {$range = $_POST['range'];}
if (isset($_POST['result'])) {$result = $_POST['result'];}
if (isset($_POST['lacks'])) {$lacks = $_POST['lacks'];}
if (isset($_POST['recomend'])) {$recomend = $_POST['recomend'];}
if (isset($_POST['name-form'])) {$nameForm = $_POST['name-form'];}
if (isset($_POST['ready'])) {$ready = $_POST['ready'];}

$message;

if ($nameForm== true) {
	$message .= "Название формы: $nameForm";
}

if ($name== true) {
	$message .= "\nИмя: $name";
}
if ($phone== true) {
	$message .= "\nТелефон: $phone";
}
if ($email== true) {
	$message .= "\nПочта: $email";
}
if ($recomend== true) {
	$message .= "\nКуда отправлять рекомендации: $recomend";
}


if ($improve== 1) {
	$message .= "\nХотел бы улучшить: Самореализация";
}
if ($improve== 2) {
	$message .= "\nХотел бы улучшить: Бизнес";
}
if ($improve== 3) {
	$message .= "\nХотел бы улучшить: Семья";
}
if ($improve== 4) {
	$message .= "\nХотел бы улучшить: Здоровье";
}
if ($improve== 5) {
	$message .= "\nХотел бы улучшить: Спорт";
}
if ($improve== 6) {
	$message .= "\nХотел бы улучшить: Работа";
}

if ($range== true) {
	$message .= "\nДоволен результатами в этой сфере: $range";
}
if ($result== true) {
	$message .= "\nРезультат 10 из 10: $result";
}
if ($lacks== true) {
	$message .= "\nЧего тебе не хватает для получения этого результата: $lacks";
}
if ($ready== 1) {
	$message .= "\nГотов к улучшениям: Нет";
}
if ($ready== 2) {
	$message .= "\nГотов к улучшениям: Да";
}
$to = "Kamkamkam78@gmail.com";
$headers = "Content-type: text/plain; charset = UTF-8";
$subject = "Новый заказ с сайта";
$send = mail($to, $subject, $message, $headers);
?>