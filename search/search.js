$(document).ready(function() {
	$("#keyword").keyup(function() {
		var keyword = $(this).val();
		$("#user-table > tbody > tr").hide();
		var temp = $("#user-table > tbody > tr > td:nth-child(5n+2):contains('" + keyword + "')");

		$(temp).parent().show();
	})
})