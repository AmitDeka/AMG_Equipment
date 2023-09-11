$(document).ready(function () {
  // $('.your-class').slick({
  //   setting-name: setting-value
  // });
  $("#homeSearchEqp_name").select2({
    theme: "bootstrap-5",
    width: $(this).data("width")
      ? $(this).data("width")
      : $(this).hasClass("w-100")
      ? "100%"
      : "style",
    placeholder: $(this).data("placeholder"),
    dropdownParent: $("#homeSearchEqp_name").parent(),
    // minimumResultsForSearch: -1,
    minimumInputLength: 2,
  });
  $("#homeSearchEqp_cat").select2({
    theme: "bootstrap-5",
    width: $(this).data("width")
      ? $(this).data("width")
      : $(this).hasClass("w-100")
      ? "100%"
      : "style",
    dropdownParent: $("#homeSearchEqp_cat").parent(),
    // minimumResultsForSearch: -1,
  });
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
