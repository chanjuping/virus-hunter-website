$(function () {
  $(".photos").owlCarousel({
    autoplay: false,
    loop: false,
    dots: false,
    margin: 0,
    nav: true,
    items: 1,
    navText: [
      "<div class='owl-prev'><i class='fas fa-chevron-left'></i></div>",
      "<div class='owl-next'><i class='fas fa-chevron-right'></i></div>",
    ],
  });

  eraseCookie();

  $("#fb").hover(
    function () {
      $(this).attr("src", "/img/completed/btn-share-fb-on.png");
    },
    function () {
      $(this).attr("src", "/img/completed/btn-share-fb-off.png");
    }
  );

  $("#wa").hover(
    function () {
      $(this).attr("src", "/img/completed/btn-share-whatsapp-on.png");
    },
    function () {
      $(this).attr("src", "/img/completed/btn-share-whatsapp-off.png");
    }
  );

  $(".icon").click(function (e) {
    e.preventDefault();

    var id = $(this).attr("id");
    var url = $(this).data("url");
    var desc = $(this).data("desc");

    var social = {
      fb: {
        width: 600,
        height: 300,
        url:
          "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURI(url) +
          "&quote=" +
          encodeURI(desc),
      },
      tw: {
        width: 600,
        height: 254,
        url: "https://twitter.com/share?url=" + encodeURI(desc + " " + url),
      },
      wa: {
        url:
          "https://api.whatsapp.com/send?text=" + encodeURI(desc + " " + url),
      },
    };

    var popup = function (social) {
      var options = "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,";
      window.open(
        social[id].url,
        "",
        options + "height=" + social[id].height + ",width=" + social[id].width
      );
    };

    popup(social);
  });
});
