$(document).ready(function () {
  //! INITIAL
  $("#loader").attr("hidden", "hidden");
  $("#content").attr("hidden", "hidden");

  $("#loader").removeAttr("hidden", "hidden");

  const img_array = [
    "./assets/image/1.jpg",
    "./assets/image/2.jpg",
    "./assets/image/3.jpg",
    "./assets/image/4.jpg",
    "./assets/image/5.jpg",
    "./assets/image/6.jpg",
    "./assets/image/7.jpg",
    "./assets/image/8.jpg",
    "./assets/image/9.jpg",
    "./assets/image/10.jpg",
    "./assets/image/11.jpg",
    "./assets/image/12.jpg",
    "./assets/image/13.jpg",
    "./assets/image/14.jpg",
    "./assets/image/15.jpg",
    "./assets/image/16.jpg",
    "./assets/image/17.jpg",
    "./assets/image/18.jpg",
    "./assets/image/19.jpg",
    "./assets/image/20.jpg",
    "./assets/image/21.jpg",
    "./assets/image/22.jpg",
    "./assets/image/23.jpg",
    "./assets/image/24.jpg",
    "./assets/image/25.jpg",
    "./assets/image/26.jpg",
    "./assets/image/27.jpg",
    "./assets/image/28.jpg",
    "./assets/image/29.jpg",
    "./assets/image/30.jpg",
    "./assets/image/31.jpg",
    "./assets/image/32.jpg",
    "./assets/image/33.jpg",
    "./assets/image/34.jpg",
    "./assets/image/35.jpg",
    "./assets/image/36.jpg",
    "./assets/image/37.jpg",
    "./assets/image/38.jpg",
    "./assets/image/39.jpg",
    "./assets/image/40.jpg",
    "./assets/image/41.jpg",
    "./assets/image/42.jpg",
    "./assets/image/43.jpg",
    "./assets/image/44.jpg",
    "./assets/image/45.jpg",
    "./assets/image/46.jpg",
    "./assets/image/47.jpg",
    "./assets/image/48.jpg",
    "./assets/image/49.jpg",
    "./assets/image/50.jpg",
    "./assets/image/51.jpg",
    "./assets/image/52.jpg",
    "./assets/image/53.jpg",
    "./assets/image/54.jpg",
  ];

  //! GET IMG SIZE
  function getImgSize(display_size) {
    var img_size = 0;

    if (display_size > 300) {
      img_size = 100;
    } else {
      img_size = 50;
    }

    return img_size;
  }

  //! IMAGE LOADER
  function loadImages() {
    var images = "";
    var img_size = getImgSize($(window).width());

    var length = Math.floor(
      ($("#container").width() / img_size) *
        ($("#container").height() / img_size)
    );

    for (var i = 0; i < length; i++) {
      images +=
        "<img id='img_" +
        i +
        "' src='" +
        img_array[i] +
        "' data-sl='" +
        i +
        "' alt=''>";
    }

    $("#image-container").html(images);
  }

  //! LOAD SCREEN ANIMATION
  $(function () {
    setTimeout(function () {
      $("#loader").attr("hidden", "hidden");
      $("#content").removeAttr("hidden", "hidden");
      loadImages();
    }, 700);
  });

  //? SWIPE
  //! TOP   ->   BOTTOM   ||   BOTTOM   ->   TOP
  function swipeImagesTopBottom(i, j) {
    var img_size = getImgSize($(window).width());
    var length = Math.floor(
      ($("#container").width() / img_size) *
        ($("#container").height() / img_size)
    );

    if (
      !$("*[data-sl=" + i + "]").offset().top ||
      !$("*[data-sl=" + j + "]").offset().top
    ) {
      console.log(
        "Error Handled" +
          "\nOffset 1: " +
          $("*[data-sl=" + i + "]").offset() +
          "\nOffset 2: " +
          $("*[data-sl=" + j + "]").offset()
      );
      return;
    }

    var el_1 = {
      id: $("*[data-sl=" + i + "]").attr("id"),
      sl: $("*[data-sl=" + i + "]").attr("data-sl"),
      top: $("*[data-sl=" + i + "]").offset().top,
      left: $("*[data-sl=" + i + "]").offset().left,
    };

    var el_2 = {
      id: $("*[data-sl=" + j + "]").attr("id"),
      sl: $("*[data-sl=" + j + "]").attr("data-sl"),
      top: $("*[data-sl=" + j + "]").offset().top,
      left: $("*[data-sl=" + j + "]").offset().left,
    };

    if (
      (el_1.top != undefined || el_2.top != undefined) &&
      el_1.left == el_2.left &&
      el_1.top < el_2.top
    ) {
      $("*[data-sl=" + el_1.sl + "]").animate(
        { top: "+=" + img_size + "px" },
        555
      );
      $("*[data-sl=" + el_2.sl + "]").animate(
        { top: "-=" + img_size + "px" },
        555
      );

      $("#" + el_1.id).attr("data-sl", el_2.sl);
      $("#" + el_2.id).attr("data-sl", el_1.sl);
    } else if (
      (el_1.top != undefined || el_2.top != undefined) &&
      el_1.left == el_2.left &&
      el_1.top > el_2.top
    ) {
      $("*[data-sl='" + el_1.sl + "']").animate(
        { top: "-=" + img_size + "px" },
        555
      );
      $("*[data-sl='" + el_2.sl + "']").animate(
        { top: "+=" + img_size + "px" },
        555
      );

      $("#" + el_1.id).attr("data-sl", el_2.sl);
      $("#" + el_2.id).attr("data-sl", el_1.sl);
    } else {
      if (i >= length - 1) {
        swipeImagesRightLeft(i, i - 1);
      } else {
        swipeImagesRightLeft(i, i + 1);
      }
    }
  }

  //! RIGHT   ->   LEFT   ||   LEFT   ->   RIGHT
  function swipeImagesRightLeft(i, j) {
    var img_size = getImgSize($(window).width());
    var length = Math.floor(
      ($("#container").width() / img_size) *
        ($("#container").height() / img_size)
    );

    if (
      !$("*[data-sl=" + i + "]").offset().top ||
      !$("*[data-sl=" + j + "]").offset().top
    ) {
      console.log(
        "Error Handled" +
          "\nOffset 1: " +
          $("*[data-sl=" + i + "]").offset() +
          "\nOffset 2: " +
          $("*[data-sl=" + j + "]").offset()
      );
      return;
    }

    var el_1 = {
      id: $("*[data-sl=" + i + "]").attr("id"),
      sl: $("*[data-sl=" + i + "]").attr("data-sl"),
      top: $("*[data-sl=" + i + "]").offset().top,
      left: $("*[data-sl=" + i + "]").offset().left,
    };

    var el_2 = {
      id: $("*[data-sl=" + j + "]").attr("id"),
      sl: $("*[data-sl=" + j + "]").attr("data-sl"),
      top: $("*[data-sl=" + j + "]").offset().top,
      left: $("*[data-sl=" + j + "]").offset().left,
    };

    if (
      (el_1.top != undefined || el_2.top != undefined) &&
      el_1.left < el_2.left &&
      el_1.top == el_2.top
    ) {
      $("*[data-sl=" + el_1.sl + "]").animate(
        { left: "+=" + img_size + "px" },
        555
      );
      $("*[data-sl=" + el_2.sl + "]").animate(
        { left: "-=" + img_size + "px" },
        555
      );

      $("#" + el_1.id).attr("data-sl", el_2.sl);
      $("#" + el_2.id).attr("data-sl", el_1.sl);
    } else if (
      (el_1.top != undefined || el_2.top != undefined) &&
      el_1.left > el_2.left &&
      el_1.top == el_2.top
    ) {
      $("*[data-sl='" + el_1.sl + "']").animate(
        { left: "-=" + img_size + "px" },
        555
      );
      $("*[data-sl='" + el_2.sl + "']").animate(
        { left: "+=" + img_size + "px" },
        555
      );

      $("#" + el_1.id).attr("data-sl", el_2.sl);
      $("#" + el_2.id).attr("data-sl", el_1.sl);
    } else {
      var image_per_horizontal_line = Math.floor(
        $("#container").width() / img_size
      );

      if (i > 0 && i / image_per_horizontal_line >= 1.9) {
        swipeImagesTopBottom(i, i - image_per_horizontal_line);
      } else {
        swipeImagesTopBottom(i, i + image_per_horizontal_line);
      }
    }
  }

  //? RANDOM PICKER
  //! RANDOM NUMBER PICKER
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //! RANDOM IMAGE PICKER
  function randomImagePicker(min, max) {
    var func_arr = ["0", "~", "*", "<!>"];
    var random = randomNumber(0, 4);

    if (func_arr[random] == "0") {
      return 0;
    } else {
      return Math.floor(Math.random() * (max - min)) + min;
    }
  }

  //! RANDOM SWIPE FUNCTION PICKER
  function randomFunctionPicker() {
    var func_arr = ["<>", "^v"];
    var random = randomNumber(0, 2);

    return func_arr[random];
  }

  //? TIMER
  var interval_id;

  //! START TIMER
  function startGiggleImages() {
    interval_id = setInterval(function () {
      var img_size = getImgSize($(window).width());
      var length = Math.floor(
        ($("#container").width() / img_size) *
          ($("#container").height() / img_size)
      );
      var image_per_horizontal_line = Math.floor(
        $("#container").width() / img_size
      );

      var option_picker = randomFunctionPicker();

      if (option_picker == "<>") {
        var img_random_sl_picker = randomImagePicker(1, length - 1);

        if (img_random_sl_picker >= length - 1) {
          swipeImagesRightLeft(img_random_sl_picker, img_random_sl_picker - 1);
        } else {
          swipeImagesRightLeft(img_random_sl_picker, img_random_sl_picker + 1);
        }
      } else if (option_picker == "^v") {
        var img_random_sl_picker = randomImagePicker(1, length - 1);

        if (
          img_random_sl_picker > 0 &&
          img_random_sl_picker / image_per_horizontal_line >= 1.9
        ) {
          swipeImagesTopBottom(
            img_random_sl_picker,
            img_random_sl_picker - image_per_horizontal_line
          );
        } else {
          swipeImagesTopBottom(
            img_random_sl_picker,
            img_random_sl_picker + image_per_horizontal_line
          );
        }
      } else {
      }
    }, 800);
  }

  //! STOP TIMER
  function stopGiggleImages() {
    clearInterval(interval_id);
    interval_id = 0;
  }

  startGiggleImages();

  //? EVENT LISTENERS
  //! ON WINDOW ACTIVE
  $(window).focus(function () {
    if (!interval_id) {
      startGiggleImages();
    }
  });

  //! ON WINDOW DEACTIVATE
  $(window).blur(function () {
    stopGiggleImages();
  });

  //! ON WINDOW RESIZE
  $(window).resize(function () {
    stopGiggleImages();
    loadImages();
    startGiggleImages();
  });

  //! MANUAL STOP
  $("#stopBTN").click(function () {
    stopGiggleImages();
  });

  //! MANUAL START
  $("#startBTN").click(function () {
    if (!interval_id) {
      startGiggleImages();
    }
  });
});
