$(function () {
  $(".navbar-toggler").blur(function(event) {
      $("#navbarSupportedContent").collapse('hide');
  });
});

var switchActive = function () {
  var classes = document.querySelector('#nav-home').className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector('#nav-home').className = classes;

  classes = document.querySelector('#nav-menu').className;
  if (classes.indexOf("active") == -1) {
    classes += " active";
    document.querySelector('#nav-menu').className = classes;
  }
};

(function(global) {
  var meal = {};

  var homeHTML = "/Front-End/week%203/snippets/home-snippet.html";
  var menuTitle = "/Front-End/week%203/snippets/menu-title-snippet.html";
  var menuCategory = "/Front-End/week%203/snippets/menu-category-snippet.html";
  var categoryTitle = "/Front-End/week%203/snippets/category-title.html";
  var categoryContent = "/Front-End/week%203/snippets/category-content.html"
  var data = "/Front-End/week%203/data.json";

  var insertHTML =  function (selector, html) {
    document.querySelector(selector).innerHTML = html;
  }

  var showLoading = function (selector) {
    var html = "<div class='text-center mx-5 my-5'><img src='images/ajax-loader.gif'></div>";
    insertHTML(selector, html);
  }

  var insertProperty = function (string, propName, propValue) {
    var propToReplace = "{{" + propName + "}}";
    string = string.replace(new RegExp(propToReplace, "g"), propValue);
    return string;
  }

  document.addEventListener("DOMContentLoaded", function (event) {
    showLoading("#main");
    $ajaxUtil.sendGetRequest(homeHTML, function (responseText) {
      insertHTML("#main", responseText);
    }, false);
  });

  meal.loadMenu = function (event) {
    showLoading("#main");
    switchActive();
    $ajaxUtil.sendGetRequest(menuTitle, function (menuT) {
      $ajaxUtil.sendGetRequest(menuCategory, function (menuC) {
        var menuPage = buildMenuView(menuT, menuC);
        insertHTML("#main", menuPage);
      }, false);
    }, false);
  }

  var buildMenuView = function (menuT, menuC) {
    var finalHTML = menuT;
    finalHTML += "<div id='tiles' class='row'>";
    for (var i = 0; i <8 ; i++) {
      finalHTML += menuC;
    }
    finalHTML += "</div>";
    return finalHTML;
  }

  meal.loadCategory = function (event) {
    showLoading("#main");
    $ajaxUtil.sendGetRequest(categoryTitle, function (catT) {
      $ajaxUtil.sendGetRequest(categoryContent, function (catC) {
        $ajaxUtil.sendGetRequest(data, function(dataObject) {
          console.log(dataObject);
          var cat = buildCategoryView (catT, catC, dataObject);
          insertHTML("#main", cat)
        })
      }, false);
    }, false);
  }

  var buildCategoryView = function (catT, catC, dataObject) {
    var finalHTMLCat = catT;
    finalHTMLCat += "<section class='row'>";
    var id = dataObject.iD;

    for (var i = 0; i < 4; i++) {
      var html = catC;
      id++;
      var img = dataObject.imgName;
      var itemName = dataObject.itemName;
      var content = dataObject.content;

      html = insertProperty(html, "ID", id);
      html = insertProperty(html, "imgName", img);
      html = insertProperty(html, "ItemName", itemName);
      html = insertProperty(html, "content", content);

      if (i<3) {
        html += "<hr class='d-xs-block d-sm-block d-md-none bg-light'>";
      }

      finalHTMLCat += html;
    }

    finalHTMLCat += "</section>";
    return finalHTMLCat;
  };

  global.$meal = meal;

}(window));
