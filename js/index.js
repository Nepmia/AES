/* ネップミア によって編集されたサイト
著作権: ネップミア 2019
説明：AESは学校のプロジェクトであり、個人的な試みであり、新しいレスポンシブデザインとWebアプリケーションの試みです。
私のウェブサイトのコードを許可なしに変更することはすべて禁止されています。それに使用されているすべての画像およびアセットはnepmia.meドメイン専用に予約されており、他の場所では使用できません。このサイトに公共資産が含まれている場合は、こちらからではなく公式ページからそれらを入手してください。

Website: ©NEPMIA ネップミア 2019, ALL RIGHTS RESERVED
Description: AES Is a school project and a personal try, new responsive designs plus Webapp try.

All modifications of my website's code without permision is prohibited, All images and assets used on it are strictly reserved for nepmia.me domain and cannot be used anywhere else. If this site contains any public assets please get them from their official page and not from here. */
/*Preloader*/
$(document).ready(function($) {
  var Body = $("body");
  Body.addClass("preloader-site");
});
$(window).load(function() {
  $(".preloader_bg").fadeOut();
  $(".preloader").fadeOut();
  $("preloader").attr("disabled", "disabled");
  $("preloader")
    .children()
    .attr("disabled", "disabled");
  $("body").removeClass("preloader-site");
  $(".wi_sport_text").fadeOut();
  $(".wi_media_text").fadeOut();
  $(".wi_cloud_text").fadeOut();
});
/*Lockscreen*/
var images = [
  "1.jpg",
  "2.png",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
  "19.jpg",
  "20.jpg",
  "21.jpg",
  "22.jpg",
  "23.jpg",
  "24.jpg",
  "25.jpg",
  "26.jpg",
  "27.jpg",
  "28.jpg",
  "29.jpg"
];
$(".locked").css({
  "background-image":
    "url(bgr/" + images[Math.floor(Math.random() * images.length)] + ")"
});
$("#page_home").css({
  "background-image":
    "url(bgr/" + images[Math.floor(Math.random() * images.length)] + ")"
});
$("#page_sport").css({
  "background-image":
    "url(bgr/" + images[Math.floor(Math.random() * images.length)] + ")"
});
$("#page_media").css({
  "background-image":
    "url(bgr/" + images[Math.floor(Math.random() * images.length)] + ")"
});
$("#page_cloud").css({
  "background-image":
    "url(bgr/" + images[Math.floor(Math.random() * images.length)] + ")"
});
$(document).ready(function() {
  $("#lock").click(function() {
    $("#lock")
      .removeClass("locked")
      .addClass("unlocked");
  });
  $("#lock-icon").click(function() {
    $("#lock")
      .removeClass("unlocked")
      .addClass("locked");
  });
});
/*Nav*/
$(document).ready(function() {
  $("#menu_icon").click(function() {
    $(".menu_background").css("right", "0%");
    $(".menu_close").css("transform", "rotate(-90deg)");
    $(".menu_hidder").css("display", "block");
  });
  $("#Capa_2").click(function() {
    $(".menu_background").css("right", "-23%");
    $(".menu_close").css("transform", "rotate(0deg)");
    $(".menu_hidder").attr("disabled", "disabled");
  });
  $("#menu_hidder").click(function() {
    $(".menu_hidder").css("right", "-100%");
    $(".menu_close").css("transform", "rotate(0deg)");
    $(".menu_background").css("right", "-23%");
    $(".menu_hidder").attr("disabled", "disabled");
    $(".menu_hidder").css("display", "none");
  });
  $(".search_icon").click(function() {
    if ($("#search").hasClass("up")) {
      $("#search")
        .removeClass("up")
        .addClass("down");
      $("#search_hider")
        .removeClass("hided")
        .addClass("hide_active");
    } else if ($("#search").hasClass("down")) {
      $("#search")
        .removeClass("down")
        .addClass("up");
      $("#search_hider")
        .removeClass("hide_active")
        .addClass("hided");
    }
  });
  $("#search_hider").click(function() {
    $("#search")
      .removeClass("down")
      .addClass("up");
    $("#search_hider")
      .removeClass("hide_active")
      .addClass("hided");
  });
});
/*Anti-Zoom*/
$(document).ready(function() {
  $(document).keydown(function(event) {
    if (
      event.ctrlKey == true &&
      (event.which == "107" || event.which == "109")
    ) {
      alert("disabling zooming ! ");
      event.preventDefault();
    }
  });
});
$(document).keydown(function(event) {
  if (
    event.ctrlKey == true &&
    (event.which == "61" ||
      event.which == "107" ||
      event.which == "173" ||
      event.which == "109" ||
      event.which == "187" ||
      event.which == "189")
  ) {
    event.preventDefault();
  }
});

$(window).bind("mousewheel DOMMouseScroll", function(event) {
  if (event.ctrlKey == true) {
    event.preventDefault();
  }
});
/*Nav Windows*/
/* Bounce click script */
$(".wi_index").click(function() {
  $target = $(".wi_index");
  $target.removeClass("bounce");
  setTimeout("$target.addClass('bounce');", 100);
});
$(".wi_sport").click(function() {
  $target = $(".wi_sport");
  $target.removeClass("bounce");
  setTimeout("$target.addClass('bounce');", 100);
});
$(".wi_media").click(function() {
  $target = $(".wi_media");
  $target.removeClass("bounce");
  setTimeout("$target.addClass('bounce');", 100);
});
$(".wi_cloud").click(function() {
  $target = $(".wi_cloud");
  $target.removeClass("bounce");
  setTimeout("$target.addClass('bounce');", 100);
});
/* Windows Transition script */
$(document).ready(function() {
  $(".wi_index").click(function() {
    $("#wi_index_fx")
      .removeClass("wi_fx_down_left")
      .addClass("wi_fx_up_left");
    $("#wi_sport_fx")
      .removeClass("wi_fx_up_middle")
      .addClass("wi_fx_down_middle");
    $("#wi_media_fx")
      .removeClass("wi_fx_up_right")
      .addClass("wi_fx_down_right");
    $("#wi_cloud_fx")
      .removeClass("wi_fx_up_right2")
      .addClass("wi_fx_down_right2");
    $(".wi_index_text").fadeIn();
    $(".wi_sport_text").fadeOut();
    $(".wi_media_text").fadeOut();
    $(".wi_cloud_text").fadeOut();
    $("#page_home")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_left");
    $("#page_sport")
      .removeClass("page_left4")
      .removeClass("page_left")
      .removeClass("page_right")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_middle");
    $("#page_media")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_left")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_right");
    $("#page_cloud")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_left")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right")
      .addClass("page_right2");
    $("#home_nav")
      .removeClass("home_nav_enabled")
      .addClass("home_nav");
    $("#home_nav_detail")
      .removeClass("detail_enabled")
      .addClass("detail");
    $("#home_footer")
      .removeClass("footer_enabled")
      .addClass("footer");
    $("#f_button_qrc")
      .removeClass("f_button_qrc_enabled")
      .addClass("f_button_qrc");
    $("#menu_background")
      .removeClass("menu_background_enabled")
      .addClass("menu_background");
    $("#qrc")
      .removeClass("qrc_enabled")
      .addClass("qrc");
    $("#ip")
      .removeClass("ip_enabled")
      .addClass("ip");
    $(".menu_hidder").css("right", "-100%");
    $(".menu_close").css("transform", "rotate(0deg)");
    $(".menu_background").css("right", "-23%");
    $(".menu_hidder").attr("disabled", "disabled");
    $(".menu_hidder").css("display", "none");
  });
  $(".wi_sport").click(function() {
    $("#wi_index_fx")
      .removeClass("wi_fx_up_left")
      .addClass("wi_fx_down_left");
    $("#wi_sport_fx")
      .removeClass("wi_fx_down_middle")
      .addClass("wi_fx_up_middle");
    $("#wi_media_fx")
      .removeClass("wi_fx_up_right")
      .addClass("wi_fx_down_right");
    $("#wi_cloud_fx")
      .removeClass("wi_fx_up_right2")
      .addClass("wi_fx_down_right2");
    $(".wi_index_text").fadeOut();
    $(".wi_sport_text").fadeIn();
    $(".wi_media_text").fadeOut();
    $(".wi_cloud_text").fadeOut();
    $("#page_home")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left3")
      .removeClass("page_left")
      .removeClass("page_right2")
      .addClass("page_left2");
    $("#page_sport")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_left");
    $("#page_media")
      .removeClass("page_left4")
      .removeClass("page_right")
      .removeClass("page_left")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_middle");
    $("#page_cloud")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_left")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_right");
    $("#home_nav")
      .removeClass("home_nav_enabled")
      .addClass("home_nav");
    $("#home_nav_detail")
      .removeClass("detail_enabled")
      .addClass("detail");
    $("#home_footer")
      .removeClass("footer_enabled")
      .addClass("footer");
    $("#f_button_qrc")
      .removeClass("f_button_qrc_enabled")
      .addClass("f_button_qrc");
    $("#menu_background")
      .removeClass("menu_background_enabled")
      .addClass("menu_background");
    $("#qrc")
      .removeClass("qrc_enabled")
      .addClass("qrc");
    $("#ip")
      .removeClass("ip_enabled")
      .addClass("ip");
    $(".menu_hidder").css("right", "-100%");
    $(".menu_close").css("transform", "rotate(0deg)");
    $(".menu_background").css("right", "-23%");
    $(".menu_hidder").attr("disabled", "disabled");
    $(".menu_hidder").css("display", "none");
  });
  $(".wi_media").click(function() {
    $("#wi_index_fx")
      .removeClass("wi_fx_up_left")
      .addClass("wi_fx_down_left");
    $("#wi_sport_fx")
      .removeClass("wi_fx_up_middle")
      .addClass("wi_fx_down_middle");
    $("#wi_media_fx")
      .removeClass("wi_fx_down_right")
      .addClass("wi_fx_up_right");
    $("#wi_cloud_fx")
      .removeClass("wi_fx_up_right2")
      .addClass("wi_fx_down_right2");
    $(".wi_index_text").fadeOut();
    $(".wi_sport_text").fadeOut();
    $(".wi_media_text").fadeIn();
    $(".wi_cloud_text").fadeOut();
    $("#page_home")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left2")
      .removeClass("page_left")
      .removeClass("page_right2")
      .addClass("page_left3");
    $("#page_sport")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_left2");
    $("#page_media")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_left");
    $("#page_cloud")
      .removeClass("page_left4")
      .removeClass("page_right2")
      .removeClass("page_left")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right")
      .addClass("page_middle");
    $("#f_button_qrc")
      .removeClass("f_button_qrc_enabled")
      .addClass("f_button_qrc");
    $("#menu_background")
      .removeClass("menu_background_enabled")
      .addClass("menu_background");
    $("#qrc")
      .removeClass("qrc_enabled")
      .addClass("qrc");
    $("#ip")
      .removeClass("ip_enabled")
      .addClass("ip");
    $(".menu_hidder").css("right", "-100%");
    $(".menu_close").css("transform", "rotate(0deg)");
    $(".menu_background").css("right", "-23%");
    $(".menu_hidder").attr("disabled", "disabled");
    $(".menu_hidder").css("display", "none");
    if ($("#f_button").hasClass("f_button_enabled")) {
      $("#home_nav")
        .removeClass("home_nav")
        .addClass("home_nav_enabled");
      $("#home_footer")
        .removeClass("footer")
        .addClass("footer_enabled");
      $("#home_nav_detail")
        .removeClass("detail")
        .addClass("detail_enabled");
    }
  });
  $(".wi_cloud").click(function() {
    $("#wi_index_fx")
      .removeClass("wi_fx_up_left")
      .addClass("wi_fx_down_left");
    $("#wi_sport_fx")
      .removeClass("wi_fx_up_middle")
      .addClass("wi_fx_down_middle");
    $("#wi_media_fx")
      .removeClass("wi_fx_up_right")
      .addClass("wi_fx_down_right");
    $("#wi_cloud_fx")
      .removeClass("wi_fx_down_right2")
      .addClass("wi_fx_up_right2");
    $(".wi_index_text").fadeOut();
    $(".wi_sport_text").fadeOut();
    $(".wi_media_text").fadeOut();
    $(".wi_cloud_text").fadeIn();
    $("#page_home")
      .removeClass("page_left2")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left3")
      .removeClass("page_left")
      .removeClass("page_right2")
      .addClass("page_left4");
    $("#page_sport")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left2")
      .removeClass("page_left")
      .removeClass("page_right2")
      .addClass("page_left3");
    $("#page_media")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left")
      .removeClass("page_left4")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_left2");
    $("#page_cloud")
      .removeClass("page_left4")
      .removeClass("page_middle")
      .removeClass("page_right")
      .removeClass("page_left2")
      .removeClass("page_left3")
      .removeClass("page_right2")
      .addClass("page_left");
    $("#home_nav")
      .removeClass("home_nav_enabled")
      .addClass("home_nav");
    $("#home_nav_detail")
      .removeClass("detail_enabled")
      .addClass("detail");
    $("#home_footer")
      .removeClass("footer_enabled")
      .addClass("footer");
    $("#f_button_qrc")
      .removeClass("f_button_qrc_enabled")
      .addClass("f_button_qrc");
    $("#menu_background")
      .removeClass("menu_background_enabled")
      .addClass("menu_background");
    $("#qrc")
      .removeClass("qrc_enabled")
      .addClass("qrc");
    $("#ip")
      .removeClass("ip_enabled")
      .addClass("ip");
    $(".menu_hidder").css("right", "-100%");
    $(".menu_close").css("transform", "rotate(0deg)");
    $(".menu_background").css("right", "-23%");
    $(".menu_hidder").attr("disabled", "disabled");
    $(".menu_hidder").css("display", "none");
  });
});
/* Media Page fullscreen script */
$(document).ready(function() {
  $("#f_button").click(function() {
    if (
      $("#f_button").hasClass("f_button") &&
      $("#home_nav").hasClass("home_nav") &&
      $("#home_footer").hasClass("footer") &&
      $("#home_nav_detail").hasClass("detail")
    ) {
      $("#arrow")
        .removeClass("arrow_down")
        .addClass("arrow_up");
      $("#yt_container")
        .removeClass("yt_container")
        .addClass("yt_container_enabled");
      $("#stream_container")
        .removeClass("stream_container")
        .addClass("stream_container_enabled");
      $("#iptv_container")
        .removeClass("iptv_container")
        .addClass("iptv_container_enabled");
      $("#med_switch")
        .removeClass("med_switch")
        .addClass("med_switch_enabled");
      $("#med_nav_button")
        .removeClass("med_nav_button")
        .addClass("med_nav_button_enabled");
      $("#med_nav_focus")
        .removeClass("med_nav_focus")
        .addClass("med_nav_focus_enabled");
      $("#f_button")
        .removeClass("f_button")
        .addClass("f_button_enabled");
      $("#home_nav")
        .removeClass("home_nav")
        .addClass("home_nav_enabled");
      $("#home_footer")
        .removeClass("footer")
        .addClass("footer_enabled");
      $("#home_nav_detail")
        .removeClass("detail")
        .addClass("detail_enabled");
    } else if (
      $("#f_button").hasClass("f_button_enabled") &&
      $("#yt_container").hasClass("yt_container_enabled")
    ) {
      $("#arrow")
        .removeClass("arrow_down")
        .addClass("arrow_up");
      $("#f_button")
        .removeClass("f_button_enabled")
        .addClass("f_button");
      $("#yt_container")
        .removeClass("yt_container_enabled")
        .addClass("yt_container");
      $("#stream_container")
        .removeClass("stream_container_enabled")
        .addClass("stream_container");
      $("#iptv_container")
        .removeClass("iptv_container_enabled")
        .addClass("iptv_container");
      $("#med_switch")
        .removeClass("med_switch_enabled")
        .addClass("med_switch");
      $("#med_nav_button")
        .removeClass("med_nav_button_enabled")
        .addClass("med_nav_button");
      $("#med_nav_focus")
        .removeClass("med_nav_focus_enabled")
        .addClass("med_nav_focus");
      $("#med_nav_focus")
        .removeClass("med_nav_focus_deployed")
        .addClass("med_nav_focus");
      $("#med_nav_button")
        .removeClass("med_nav_button_deployed")
        .addClass("med_nav_button");
      $("#home_nav")
        .removeClass("home_nav_enabled")
        .addClass("home_nav");
      $("#home_footer")
        .removeClass("footer_enabled")
        .addClass("footer");
      $("#home_nav_detail")
        .removeClass("detail_enabled")
        .addClass("detail");
      $("#home_nav")
        .removeClass("home_nav_re")
        .addClass("home_nav");
      $("#home_nav_detail")
        .removeClass("detail_re")
        .addClass("detail");
      $("#home_footer")
        .removeClass("footer_re")
        .addClass("footer");
    }
  });
});
$(document).ready(function() {
  $(".med_text1").click(function() {
    $("#med_text1").css("color", "rgba(255, 255, 255, 1)");
    $("#med_text2").css("color", "rgba(255, 255, 255, 0.40)");
    $("#med_text3").css("color", "rgba(255, 255, 255, 0.40)");
    $("#youtub")
      .removeClass("youtub_left2")
      .removeClass("youtub_left")
      .addClass("youtub");
    $("#youtub").removeClass("hidden");
    setTimeout(function() {
      $("#youtub").removeClass("visual");
    }, 0);
    $("#stream")
      .removeClass("stream_left2")
      .removeClass("stream_left")
      .addClass("stream");
    $("#stream").addClass("visual");
    setTimeout(function() {
      $("#stream").addClass("hidden");
    }, 20);
    $("#iptv")
      .removeClass("iptv_left2")
      .removeClass("iptv_left")
      .addClass("iptv");
    $("#iptv").addClass("visual");
    setTimeout(function() {
      $("#iptv").addClass("hidden");
    }, 20);
    $("#yt_container").css("z-index", "20");
    $("#stream_container").css("z-index", "19");
    $("#iptv_container").css("z-index", "18");
  });
  $(".med_text2").click(function() {
    $("#med_text2").css("color", "rgba(255, 255, 255, 1)");
    $("#med_text1").css("color", "rgba(255, 255, 255, 0.40)");
    $("#med_text3").css("color", "rgba(255, 255, 255, 0.40)");
    $("#youtub")
      .removeClass("youtub_left2")
      .removeClass("youtub")
      .addClass("youtub_left");
    $("#youtub").addClass("visual");
    setTimeout(function() {
      $("#youtub").addClass("hidden");
    }, 20);
    $("#stream")
      .removeClass("stream_left2")
      .removeClass("stream")
      .addClass("stream_left");
    $("#stream").removeClass("hidden");
    setTimeout(function() {
      $("#stream").removeClass("visual");
    }, 0);
    $("#iptv")
      .removeClass("iptv_left2")
      .removeClass("iptv")
      .addClass("iptv_left");
    $("#iptv").addClass("visual");
    setTimeout(function() {
      $("#iptv").addClass("hidden");
    }, 20);
    $("#yt_container").css("z-index", "19");
    $("#stream_container").css("z-index", "20");
    $("#iptv_container").css("z-index", "18");
  });
  $(".med_text3").click(function() {
    $("#med_text3").css("color", "rgba(255, 255, 255, 1)");
    $("#med_text1").css("color", "rgba(255, 255, 255, 0.40)");
    $("#med_text2").css("color", "rgba(255, 255, 255, 0.40)");
    $("#youtub")
      .removeClass("youtub_left")
      .removeClass("youtub")
      .addClass("youtub_left2");
    $("#youtub").addClass("visual");
    setTimeout(function() {
      $("#youtub").addClass("hidden");
    }, 20);
    $("#stream")
      .removeClass("stream_left")
      .removeClass("stream")
      .addClass("stream_left2");
    $("#stream").addClass("visual");
    setTimeout(function() {
      $("#stream").addClass("hidden");
    }, 20);
    $("#iptv")
      .removeClass("iptv_left")
      .removeClass("iptv")
      .addClass("iptv_left2");
    $("#iptv").removeClass("hidden");
    setTimeout(function() {
      $("#iptv").removeClass("visual");
    }, 0);
    $("#yt_container").css("z-index", "19");
    $("#stream_container").css("z-index", "18");
    $("#iptv_container").css("z-index", "20");
  });
});
$(document).ready(function() {
  $("#med_nav_focus").click(function() {
    if ($("#med_nav_focus").hasClass("med_nav_focus_enabled")) {
      $(this)
        .removeClass("med_nav_focus_enabled")
        .addClass("med_nav_focus_deployed");
      $("#arrow")
        .removeClass("arrow_up")
        .addClass("arrow_down");
      $("#med_nav_button")
        .removeClass("med_nav_button_enabled")
        .addClass("med_nav_button_deployed");
    } else if ($("#med_nav_focus").hasClass("med_nav_focus_deployed")) {
      $(this)
        .removeClass("med_nav_focus_deployed")
        .addClass("med_nav_focus_enabled");
      $("#arrow")
        .removeClass("arrow_down")
        .addClass("arrow_up");
      $("#med_nav_button")
        .removeClass("med_nav_button_deployed")
        .addClass("med_nav_button_enabled");
    }
  });
});
$(document).ready(function() {
  $("#f_button_qrc").click(function() {
    if ($("#f_button_qrc").hasClass("f_button_qrc")) {
      $("#f_button_qrc")
        .removeClass("f_button_qrc")
        .addClass("f_button_qrc_enabled");
      $("#menu_background")
        .removeClass("menu_background")
        .addClass("menu_background_enabled");
      $("#qrc")
        .removeClass("qrc")
        .addClass("qrc_enabled");
      $("#ip")
        .removeClass("ip")
        .addClass("ip_enabled");
    } else if ($("#f_button_qrc").hasClass("f_button_qrc_enabled")) {
      $("#f_button_qrc")
        .removeClass("f_button_qrc_enabled")
        .addClass("f_button_qrc");
      $("#menu_background")
        .removeClass("menu_background_enabled")
        .addClass("menu_background");
      $("#qrc")
        .removeClass("qrc_enabled")
        .addClass("qrc");
      $("#ip")
        .removeClass("ip_enabled")
        .addClass("ip");
    }
  });
});
$(document).ready(function() {
  $("#tool1").click(function() {
    $("#ftp_container").removeClass("hidded");
    $("#send_container").addClass("hidded");
    $("#share_container").addClass("hidded");
    $("#rdp_container").addClass("hidded");
    $("#tool1").css("color", "rgba(255, 255, 255, 1)");
    $("#tool2").css("color", "rgba(255, 255, 255, 0.40)");
    $("#tool3").css("color", "rgba(255, 255, 255, 0.40)");
    $("#tool4").css("color", "rgba(255, 255, 255, 0.40)");
  });
  $("#tool2").click(function() {
    $("#ftp_container").addClass("hidded");
    $("#send_container").addClass("hidded");
    $("#share_container").removeClass("hidded");
    $("#rdp_container").addClass("hidded");
    $("#tool2").css("color", "rgba(255, 255, 255, 1)");
    $("#tool1").css("color", "rgba(255, 255, 255, 0.40)");
    $("#tool3").css("color", "rgba(255, 255, 255, 0.40)");
    $("#tool4").css("color", "rgba(255, 255, 255, 0.40)");
  });
  $("#tool3").click(function() {
    $("#ftp_container").addClass("hidded");
    $("#send_container").addClass("hidded");
    $("#share_container").addClass("hidded");
    $("#rdp_container").removeClass("hidded");
    $("#tool3").css("color", "rgba(255, 255, 255, 1)");
    $("#tool2").css("color", "rgba(255, 255, 255, 0.40)");
    $("#tool1").css("color", "rgba(255, 255, 255, 0.40)");
    $("#tool4").css("color", "rgba(255, 255, 255, 0.40)");
  });
  $("#tool4").click(function() {
    $("#ftp_container").addClass("hidded");
    $("#send_container").removeClass("hidded");
    $("#share_container").addClass("hidded");
    $("#rdp_container").addClass("hidded");
    $("#tool4").css("color", "rgba(255, 255, 255, 1)");
    $("#tool2").css("color", "rgba(255, 255, 255, 0.40)");
    $("#tool3").css("color", "rgba(255, 255, 255, 0.40)");
    $("#tool1").css("color", "rgba(255, 255, 255, 0.40)");
  });
});
