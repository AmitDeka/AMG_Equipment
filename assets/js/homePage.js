$(document).ready(function () {
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
});
