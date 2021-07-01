const toggleSwitch = document.querySelector(
  '.darkswitch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//$("#switchdark").click(function () {
//  $(this).hide();
//  $("#switchlight").show();
//});

//$("#switchlight").click(function () {
//  $(this).hide();
//  $("#switchdark").show();
//});

// The NET translation API (labs.bible.org/api) currently used doesn't provide all the needed metadata, so some supplemental JSON is added here
var biblemeta = {
  data: {
    gen: {
      booknum: "1",
      title: "Genesis",
      abbr: "gen",
      chapters: "50"
    },
    exo: {
      booknum: "2",
      title: "Exodus",
      abbr: "exo",
      chapters: "40"
    },
    lev: {
      booknum: "3",
      title: "Leviticus",
      abbr: "lev",
      chapters: "27"
    },
    num: {
      booknum: "4",
      title: "Numbers",
      abbr: "num",
      chapters: "36"
    },
    deut: {
      booknum: "5",
      title: "Deuteronomy",
      abbr: "deut",
      chapters: "34"
    },
    josh: {
      booknum: "6",
      title: "Joshua",
      abbr: "josh",
      chapters: "24"
    },
    judg: {
      booknum: "7",
      title: "Judges",
      abbr: "judg",
      chapters: "21"
    },
    ruth: {
      booknum: "8",
      title: "Ruth",
      abbr: "ruth",
      chapters: "4"
    },
    "1sam": {
      booknum: "9",
      title: "1 Samuel",
      abbr: "1sam",
      chapters: "31"
    },
    "2sam": {
      booknum: "10",
      title: "2 Samuel",
      abbr: "2sam",
      chapters: "24"
    },
    "1kgs": {
      booknum: "11",
      title: "1 Kings",
      abbr: "1kgs",
      chapters: "22"
    },
    "2kgs": {
      booknum: "12",
      title: "2 Kings",
      abbr: "2kgs",
      chapters: "25"
    },
    "1chr": {
      booknum: "13",
      title: "1 Chronicles",
      abbr: "1chr",
      chapters: "29"
    },
    "2chr": {
      booknum: "14",
      title: "2 Chronicles",
      abbr: "2chr",
      chapters: "36"
    },
    ezra: {
      booknum: "15",
      title: "Ezra",
      abbr: "ezra",
      chapters: "10"
    },
    neh: {
      booknum: "16",
      title: "Nehemiah",
      abbr: "neh",
      chapters: "13"
    },
    est: {
      booknum: "17",
      title: "Esther",
      abbr: "est",
      chapters: "10"
    },
    job: {
      booknum: "18",
      title: "Job",
      abbr: "job",
      chapters: "42"
    },
    ps: {
      booknum: "19",
      title: "Psalms",
      abbr: "ps",
      chapters: "150"
    },
    pro: {
      booknum: "20",
      title: "Proverbs",
      abbr: "pro",
      chapters: "31"
    },
    ecc: {
      booknum: "21",
      title: "Ecclesiastes",
      abbr: "ecc",
      chapters: "12"
    },
    sos: {
      booknum: "22",
      title: "Song of Solomon",
      abbr: "sos",
      chapters: "8"
    },
    isa: {
      booknum: "23",
      title: "Isaiah",
      abbr: "isa",
      chapters: "66"
    },
    jer: {
      booknum: "24",
      title: "Jeremiah",
      abbr: "jer",
      chapters: "52"
    },
    lam: {
      booknum: "25",
      title: "Lamentations",
      abbr: "lam",
      chapters: "5"
    },
    eze: {
      booknum: "26",
      title: "Ezekiel",
      abbr: "eze",
      chapters: "48"
    },
    dan: {
      booknum: "27",
      title: "Daniel",
      abbr: "dan",
      chapters: "12"
    },
    hos: {
      booknum: "28",
      title: "Hosea",
      abbr: "hos",
      chapters: "14"
    },
    joel: {
      booknum: "29",
      title: "Joel",
      abbr: "joel",
      chapters: "3"
    },
    amos: {
      booknum: "30",
      title: "Amos",
      abbr: "amos",
      chapters: "9"
    },
    oba: {
      booknum: "31",
      title: "Obadiah",
      abbr: "oba",
      chapters: "1"
    },
    jonah: {
      booknum: "32",
      title: "Jonah",
      abbr: "jonah",
      chapters: "4"
    },
    micah: {
      booknum: "33",
      title: "Micah",
      abbr: "micah",
      chapters: "7"
    },
    nahum: {
      booknum: "34",
      title: "Nahum",
      abbr: "nahum",
      chapters: "3"
    },
    hab: {
      booknum: "35",
      title: "Habakkuk",
      abbr: "hab",
      chapters: "3"
    },
    zeph: {
      booknum: "36",
      title: "Zephaniah",
      abbr: "zeph",
      chapters: "3"
    },
    hag: {
      booknum: "37",
      title: "Haggai",
      abbr: "hag",
      chapters: "2"
    },
    zech: {
      booknum: "38",
      title: "Zechariah",
      abbr: "zech",
      chapters: "14"
    },
    mal: {
      booknum: "39",
      title: "Malachi",
      abbr: "mal",
      chapters: "4"
    },
    matt: {
      booknum: "40",
      title: "Matthew",
      abbr: "matt",
      chapters: "28"
    },
    mark: {
      booknum: "41",
      title: "Mark",
      abbr: "mark",
      chapters: "16"
    },
    luke: {
      booknum: "42",
      title: "Luke",
      abbr: "luke",
      chapters: "24"
    },
    john: {
      booknum: "43",
      title: "John",
      abbr: "john",
      chapters: "21"
    },
    acts: {
      booknum: "44",
      title: "Acts",
      abbr: "acts",
      chapters: "28"
    },
    rom: {
      booknum: "45",
      title: "Romans",
      abbr: "rom",
      chapters: "16"
    },
    "1cor": {
      booknum: "46",
      title: "1 Corinthians",
      abbr: "1cor",
      chapters: "16"
    },
    "2cor": {
      booknum: "47",
      title: "2 Corinthians",
      abbr: "2cor",
      chapters: "13"
    },
    gal: {
      booknum: "48",
      title: "Galatians",
      abbr: "gal",
      chapters: "6"
    },
    eph: {
      booknum: "49",
      title: "Ephesians",
      abbr: "eph",
      chapters: "6"
    },
    phil: {
      booknum: "50",
      title: "Philippians",
      abbr: "phil",
      chapters: "4"
    },
    col: {
      booknum: "51",
      title: "Colossians",
      abbr: "col",
      chapters: "4"
    },
    "1the": {
      booknum: "52",
      title: "1 Thessalonians",
      abbr: "1the",
      chapters: "5"
    },
    "2the": {
      booknum: "53",
      title: "2 Thessalonians",
      abbr: "2the",
      chapters: "3"
    },
    "1tim": {
      booknum: "54",
      title: "1 Timothy",
      abbr: "1tim",
      chapters: "6"
    },
    "2tim": {
      booknum: "55",
      title: "2 Timothy",
      abbr: "2tim",
      chapters: "4"
    },
    titus: {
      booknum: "56",
      title: "Titus",
      abbr: "titus",
      chapters: "3"
    },
    phile: {
      booknum: "57",
      title: "Philemon",
      abbr: "phile",
      chapters: "1"
    },
    heb: {
      booknum: "58",
      title: "Hebrews",
      abbr: "heb",
      chapters: "13"
    },
    james: {
      booknum: "59",
      title: "James",
      abbr: "james",
      chapters: "5"
    },
    "1pet": {
      booknum: "60",
      title: "1 Peter",
      abbr: "1pet",
      chapters: "5"
    },
    "2pet": {
      booknum: "61",
      title: "2 Peter",
      abbr: "2pet",
      chapters: "3"
    },
    "1jn": {
      booknum: "62",
      title: "1 John",
      abbr: "1jn",
      chapters: "5"
    },
    "2jn": {
      booknum: "63",
      title: "2 John",
      abbr: "2jn",
      chapters: "1"
    },
    "3jn": {
      booknum: "64",
      title: "3 John",
      abbr: "3jn",
      chapters: "1"
    },
    jude: {
      booknum: "65",
      title: "Jude",
      abbr: "jude",
      chapters: "1"
    },
    rev: {
      booknum: "66",
      title: "Revelation",
      abbr: "rev",
      chapters: "22"
    }
  }
};

$(document).ready(function () {
  // Have variables start out with Genesis 1
  var bkselect = "gen";
  var bk = "Genesis";
  var chselect = "1";
  var ch = "1";
  var curcount = "50";
  var url =
    "https://labs.bible.org/api/?passage=" +
    bkselect +
    "%20" +
    chselect +
    "&type=json&callback=?";

  // Populate the book selector with book titles...
  $.each(biblemeta.data, function (i, v) {
    if (v.abbr == bkselect) {
      curcount = v.chapters;
      bk = v.title;
    }
    $("#bookselect").append(
      "<li class='bookitem' data='" + v.abbr + "'>" + v.title + "</li>"
    );
  });

  // ...and the chapter selector with the right number of chapters
  $(function () {
    for (var i = 1; i <= curcount; i++) {
      $("#chapterselect").append(
        "<li class='chapteritem' data='" + i + "'>" + i + "</li>"
      );
    }
  });

  // Load the chapter text from API
  $.getJSON(url, function (json) {
    $("#book").text(bk);
    $("#chapter").text(chselect);
    $.each(json, function () {
      $("#passage").append(
        '<sup class="verse">' + this.verse + "</sup>" + this.text
      );
    });
  });

  // Toggle on book selector when book title is clicked
  $("#book").click(function () {
    $("#bookselect").fadeIn();
    $(".dismiss").slideDown();
  });

  // and off when dismiss button is clicked. Apply to chapter selector as well
  $(".dismiss").click(function () {
    $("#bookselect").fadeOut();
    $("#chapterselect").fadeOut();
    $(".dismiss").slideUp();
  });

  // When a book is selected, update variables and refresh passage with new content

  $("body").on("click", ".bookitem", function (event) {
    $("#bookselect").fadeOut();
    $(".dismiss").slideUp();

    bkselect = jQuery(this).attr("data");
    $.each(biblemeta.data, function (i, v) {
      if (v.abbr == bkselect) {
        curcount = v.chapters;
        bk = v.title;
        chselect = 1;
      }
    });

    url =
      "https://labs.bible.org/api/?passage=" +
      bkselect +
      "%20" +
      chselect +
      "&type=json&callback=?";

    $(function () {
      if ($("#chapterselect").length > 0) {
        $("#chapterselect").empty();
        for (var i = 1; i <= curcount; i++) {
          $("#chapterselect").append(
            "<li class='chapteritem' data='" + i + "'>" + i + "</li>"
          );
        }
      }
    });

    $.getJSON(url, function (json) {
      bk = json[0].bookname;
      ch = json[0].chapter;
      $("#book").text(bk);
      $("#chapter").text(ch);
      if ($("#passage").length > 0) {
        $("#passage").empty();
        $.each(json, function () {
          $("#passage").append(
            '<sup class="verse">' + this.verse + "</sup>" + this.text
          );
        });
      }
    });
  });

  // Toggle chapter selector when chapter number is clicked
  $("#chapter").click(function () {
    $("#chapterselect").fadeIn();
    $(".dismiss").slideDown();
  });

  // When a chapter is selected, update variables and refresh passage with new content
  $("body").on("click", ".chapteritem", function (event) {
    $("#chapterselect").fadeOut();
    $(".dismiss").slideUp();

    chselect = jQuery(this).attr("data");

    url =
      "https://labs.bible.org/api/?passage=" +
      bkselect +
      "%20" +
      chselect +
      "&type=json&callback=?";

    $.getJSON(url, function (json) {
      bk = json[0].bookname;
      ch = json[0].chapter;
      $("#book").text(bk);
      $("#chapter").text(ch);
      if ($("#passage").length > 0) {
        $("#passage").empty();
        $.each(json, function () {
          $("#passage").append(
            '<sup class="verse">' + this.verse + "</sup>" + this.text
          );
        });
      }
    });
  });
});