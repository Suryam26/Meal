(function(global) {
  var ajaxUtil = {};

  function getRequestObject() {
    if (window.XMLHttpRequest) {
      return (new XMLHttpRequest());
    }
    else {
      global.alert("Ajax not supported");
      return (null);
    }
  }

  ajaxUtil.sendGetRequest =
    function (requestURL, responseHandler, isJsonResponse) {
      var request = getRequestObject ();
      request.open ("GET", requestURL, true);
      request.send (null);

      request.onreadystatechange = function () {
        handleResponse (request, responseHandler, isJsonResponse);
      };
  };

  function handleResponse(request, responseHandler, isJsonResponse) {
    if ((request.readyState == 4) && (request.status == 200)) {
      if (isJsonResponse == undefined) {
        isJsonResponse = true;
      }

      if (isJsonResponse) {
        responseHandler(JSON.parse(request.responseText));
      }
      else {
        responseHandler(request.responseText);
      }
    }
  }

  global.$ajaxUtil = ajaxUtil;

}(window));
