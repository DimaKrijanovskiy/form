$(function(){
	$("#sendForm").on("click", function(){
		var mail=$("#mail").val();
		var num=$("#num").val();
		var num2=$("#num2").val();
		var name=$("#name").val();
		var name2=$("#name2").val();
		var name3=$("#name3").val();
		var day=$("#day").val();
		var month=$("#month").val();
		var year=$("#year").val();
		var gen=$("#gen").val();
		var gen2=$("#gen2").val();
		//условия
		$.ajax({
			url: 'ajax/send.php',
			type: 'POST',
			cache: false,
			data:{'mail': mail, 'num': num, 'num2': num2, 'name':name, 'name2':name2, 'name3':name3, 'day':day, 'month':month, 'year':year, 'gen':gen, 'gen2':gen2},
			dataType:'json',
			beforeSend: function(){
				$("#sendForm").prop("disabled", true);
			},
			success: function(data){
				if (!data.success)
					alert("Были ошибки, сообщение не отправлено!");
				else $("#mainForm").trigger("reset");
				$("#sendForm").prop("disabled", false);
			}

		});
	});
});