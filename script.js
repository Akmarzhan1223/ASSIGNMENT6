$(document).ready(function () {

  console.log("jQuery is ready!");

  $("#greeting").text("Hello, I am Akmarzhan!");
  $(".headline").css("color", "blue");

  $("#lightBtn").click(function () {
    $("body").removeClass("dark");
  });

  $("#darkBtn").click(function () {
    $("body").addClass("dark");
  });

  $("#hideBtn").click(function () {
    $("#status, #facts").hide();
  });

  $("#showBtn").click(function () {
    $("#status, #facts").show();
  });

  $("#toggleBtn").click(function () {
    $("#status, #facts").toggle();
  });

  $("#fadeInBtn").click(function () {
    $(".photo").fadeIn();
  });

  $("#fadeOutBtn").click(function () {
    $(".photo").fadeOut();
  });

  $("#fadeToggleBtn").click(function () {
    $(".photo").fadeToggle();
  });

  $(".heading").click(function () {
    $(this).next(".panel").slideToggle();
  });

  $("#addBtn").click(function () {
    var skill = $("#skillInput").val();
    if (skill == "") {
      alert("Please write a skill!");
    } else {
      $("#skillList").append("<li>" + skill + "</li>");
      $("#skillInput").val("");
    }
  });

  $("#prependBtn").click(function () {
    var skill = $("#skillInput").val();
    if (skill == "") {
      alert("Please write a skill!");
    } else {
      $("#skillList").prepend("<li>" + skill + "</li>");
      $("#skillInput").val("");
    }
  });

  $("#removeBtn").click(function () {
    $("#skillList li:last").remove();
  });

  $("#changeLinkBtn").click(function () {
  $("#myLink").attr("href", "https://github.com/Akmarzhan1223/ASSIGNMENT5");
  $("#myLink").text("My Previous Assignment");
});

  $("#nameInput").on("input", function () {
    var name = $(this).val();
    $("#showName").text("Name: " + name);
  });

  $("#emailInput").on("input", function () {
    var email = $(this).val();
    $("#showEmail").text("Email: " + email);
  });

  var opened = false;

  $("#animateBtn").click(function () {
    if (opened == false) {
      $("#bar1").animate({ width: "90%" });
      $("#bar2").animate({ width: "80%" });
      $("#bar3").animate({ width: "60%" });
      opened = true;
    } else {
      $("#bar1").animate({ width: "0" });
      $("#bar2").animate({ width: "0" });
      $("#bar3").animate({ width: "0" });
      opened = false;
    }
  });

});