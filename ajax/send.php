<?php
	$mail=$_POST['mail'];
	$num=$_POST['num'];
	$num2=$_POST['num2'];
	$name2=$_POST['name2'];
	$name=$_POST['name'];
	$name3=$_POST['name3'];
	$day=$_POST['day'];
	$month=$_POST['month'];
	$year=$_POST['year'];
	$gen=$_POST['gen'];

	$subject="=?utf-8?B".base64_encode("cообщение с сайта")."?=";
	$headers="From $mail\r\nReplay-to:$\r\nContent-type: text/html; charset=utf-8\r\n";


	$success= mail("moo00n00@mail.ru", $subject,
		"E-Mail:" .$mail.
		". Номер телефона:" .$num.
		". Дополнительный номер телефона:" .$num2.
		". Имя:" .$name.
		". Фамилия:" .$name2.
		". Отчество:" .$name3.
		". Дата рождения:" .$day .$month .$year.
		". Пол:" .$gen, $headers);
	echo json_encode(["success" => $success]);
?>