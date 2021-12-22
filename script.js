window.addEventListener("DOMContentLoaded", () => {
	$(".js-example-basic-single").select2({
		placeholder: "Выберите штат",
		closeOnSelect: false,
	});

	var data = [
		{ id: 1, text: "Leanne Graham" },
		{ id: 2, text: "Ervin Howell" },
		{ id: 3, text: "Clementine Bauch" },
		{ id: 4, text: "Patricia Lebsack" },
		{ id: 5, text: "Chelsey Dietrich" },
		{ id: 6, text: "Mrs. Dennis Schulist" },
		{ id: 7, text: "Kurtis Weissnat" },
		{ id: 8, text: "Nicholas Runolfsdottir V" },
		{ id: 9, text: "Glenna Reichert" },
		{ id: 10, text: "Clementina DuBuque" },
	];
	var jsonTarget = [];

	//получаем json и обрабатываем его с помощью JS
	let getData = async () => {
		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let data = await response.json();
		data = data.splice(0, 10);
		getIdAndNameFromJsonArray(data);
	};
	getData();

	let getIdAndNameFromJsonArray = (jsonArr) => {
		//первый вариант преобразования json массива
		// jsonArr.forEach(function (item) {
		// 	jsonTarget.push({ id: item.id - 1, text: item.name });
		// });
		//второй вариант преобразования json массива
		// var ids = "";
		// for (var i = 0; i < jsonArr.length; i++) {
		// 	ids += jsonArr[i].id + ",";
		// 	jsonTarget.push({ id: jsonArr[i].id, text: jsonArr[i].name });
		// }
		// ids = ids.substring(0, ids.length - 1);
	};

	//получаем json и обрабатываем его с помощью JQ
	$.ajax({
		url: "https://jsonplaceholder.typicode.com/users",
		type: "GET",
		success: function (jsonArr) {
			//третий вариант преобразования json массива
			$.each(jsonArr, function (i, item) {
				jsonTarget.push({ id: item.id, text: item.name });
			});
		},
	});

	console.log(jsonTarget);
	console.log(data);
	$(".js-example-ajax").select2({
		closeOnSelect: true,
		data: jsonTarget,
		// data: data,
	});
});
