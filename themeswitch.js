$(document).ready(styleSwitch(getParameter()));

function getParameter() {
	return $("script[data-json]").attr("data-json");
}

function styleSwitch(jsonData) {
	$.getJSON(jsonData, function(json) {
		var styles = json;
		console.log(styles[0]);
		var storeName = "style";
		var storedStyleItem = $.parseJSON(storeItem(storeName, returnFirstObject(styles)));
		setStyle(storedStyleItem);

		$("<style id='page-skin-2'></style>").appendTo("head");
		$.each(styles, function(i, elem) {
			$("div.menu").append("<input class='switch' type='radio' name='switcher' value=" + elem.title + ">" + elem.name);
		});
		$(".switch[value=" + storedStyleItem.title + "]").prop("checked", true);
		$(".switch").change(function() {
			var styleItem = $.grep(styles, function(obj) {
				return obj.title === $(".switch:checked").val();
			});
			setStyle(styleItem[0]);
			localStorage.setItem(storeName, returnFirstObject(styleItem));
		});

		$("div.menu").append("<button type='button' id='reset'>Visszaállítás</button>");
		$("div.menu #reset").on('click', function() {
			localStorage.removeItem(storeName);
			setStyle(storedStyleItem);
			location.reload();
		});
	});
}

function setStyle(obj) {
	jQuery.ajaxSetup({async:false});
	$.get(obj.href, function(data) {
		$("style#page-skin-2").prop({
			title: obj.title,
			disabled: false,
			innerHTML: data,
		});
	});
	jQuery.ajaxSetup({async:true});
	$("img#Header1_headerimg").prop('src', obj.image);
	$("#Attribution1 .widget-content").html(obj.name + ' Üzemeltető: <a href="https://www.blogger.com" target="_blank">Blogger</a>.')
}

function storeItem(itemName, item) {
	if (!localStorage.getItem(itemName)) {
		localStorage.setItem(itemName, item);
	}
	return localStorage.getItem(itemName);
}

function returnFirstObject(arr) {
	return JSON.stringify(arr[0]);
}