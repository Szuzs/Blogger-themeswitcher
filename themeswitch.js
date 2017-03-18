$(document).ready(styleSwitch(getParameter()));

function getParameter() {
	return $("script[data-json]").attr("data-json");
}

function styleSwitch(jsonData) {
	$.getJSON(jsonData, function(json) {
		var styles = json;
		var storeName = "style";
		var storedStyleItem = $.parseJSON(storeItem(storeName, returnFirstObject(styles)));
		setStyle(storedStyleItem);

		$.each(styles, function(i, elem) {
			$("#switches").append("<input class='switch' type='radio' name='switcher' value=" + elem.title + ">" + elem.name);
		});
		$(".switch[value=" + storedStyleItem.title + "]").prop("checked", true);
		$(".switch").change(function() {
			var styleItem = $.grep(styles, function(obj) {
				return obj.title === $(".switch:checked").val();
			});
			setStyle(styleItem[0]);
			localStorage.setItem(storeName, returnFirstObject(styleItem));
		});

		$("#switches").append("<button type='button' id='reset'>Visszaállítás</button>");
		$("#switches #reset").on('click', function() {
			localStorage.removeItem(storeName);
			setStyle(storedStyleItem);
			location.reload();
		});
	});
}

function setStyle(obj) {
	$("link[rel='stylesheet']").prop({
		href: obj.href,
		title: obj.title,
		disabled: false,
	});
	$("#header-1_headerimg").prop('src', obj.image);
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