$(document).ready(function () {
  $(".categorySortSelect").select2({
    theme: "bootstrap-5",
    minimumResultsForSearch: -1,
  });
  $("#btnGridView").click(function () {
    $("#btnGridView").addClass("active");
    $("#gridViewContainer").removeClass("d-none");
    $("#btnListView").removeClass("active");
    $("#listViewContainer").addClass("d-none");
  });
  $("#btnListView").click(function () {
    $("#btnGridView").removeClass("active");
    $("#gridViewContainer").addClass("d-none");
    $("#btnListView").addClass("active");
    $("#listViewContainer").removeClass("d-none");
  });
});
