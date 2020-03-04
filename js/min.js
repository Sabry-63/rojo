/*global $ */

$(function() {
  "use strict";
  // Auto Height Heaer
  const winH = $(window).height(),
    nav = $(".navbar").innerHeight();
  $(".header").height(winH - nav);
  //Add Class Show For Section && Add Class Active For Nav Link
  $(".nav-link").click(function(e) {
    e.preventDefault();
    $(this).addClass("active");
    $(this)
      .parent()
      .siblings()
      .children()
      .removeClass("active");
    $(".parent-page").hide();
    $($(this).data("show")).fadeIn(400);
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
  // Add Class Fiexd To Navbar
  $(window).scroll(function() {
    if ($(window).scrollTop() > winH) {
      // Checed Class
      if ($(".navbar").hasClass !== "fixed-top") {
        $(".navbar").addClass("fixed-top");
      }
    } else {
      $(".navbar").removeClass("fixed-top");
    }

    // Go TO Up
    if ($(window).scrollTop() > $(".prand").offset().top) {
      $(".top").fadeIn(300);
    } else {
      $(".top").fadeOut(300);
    }
  });

  //Add Class Show For Section && Add Class Select For Fillter
  $(".fillter-tab").click(function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .siblings()
      .children()
      .removeClass("selected");
    $(this).addClass("selected");

    var Filter = $(this).attr("id");
    if (Filter === "all") {
      $(".images > div ").fadeIn();
    } else {
      $(".images > div ").hide();
      $(".images")
        .contents()
        .filter("." + Filter)
        .fadeIn();
    }
  });

  // Get Date
  $(".btn-details").click(function() {
    let image = $(this)
        .parent()
        .siblings("img")
        .attr("src"),
      itemImage = $(".item-img")
        .children("img")
        .attr("src", image),
      name = $(this)
        .siblings(".item-name")
        .attr("name"),
      itemName = $(".name-item").text(name),
      pric = $(this)
        .siblings(".item-name")
        .attr("pric"),
      itemPric = $(".praice-item").text(pric),
      desc = $(this)
        .siblings(".item-name")
        .attr("desc"),
      itemDesc = $(".desc-item").text(desc),
      color = $(this)
        .siblings(".item-name")
        .attr("color"),
      itemColor = $(".color-item").text(color);
    $(".products").hide();
    $("#productItem").fadeIn();
  });

  // Contcat Now Buy Order
  $(".btn-buy").click(function(e) {
    e.preventDefault();
    $("#productItem").hide();
    $(".contact").fadeIn();
    $(".nav-link")
      .parent()
      .siblings()
      .children()
      .removeClass("active");
    $(".contact-link").addClass("active");
  });

  $(".foot-link").click(function(e) {
    e.preventDefault();
  });

  // Goto Products
  $(".prand-show").click(function() {
    $(".home").hide();
    $(".products").fadeIn();
    $(".fillter-tab")
      .parent()
      .siblings()
      .children()
      .removeClass("selected");
    if (
      $(this)
        .parent()
        .hasClass("prand-1")
    ) {
      $(".fillter-tab.nars").addClass("selected");
    } else if (
      $(this)
        .parent()
        .hasClass("prand-2")
    ) {
      $(".fillter-tab.mac").addClass("selected");
    }
  });

  // Goto Up
  $(".top , .scroll-top-page").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    );
  });
});
