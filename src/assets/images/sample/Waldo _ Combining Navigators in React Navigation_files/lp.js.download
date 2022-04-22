(function () {
  var baseUrl = "https://platformapi.metadata.io";
  var primaryKey = "id";
  var listenFormSubmit = true;
  var onFormInit = function () {};
  var formsSet = new Set();
  var blacklistSet = new Set(["hs_context"]);
  var log = { sentData: [], errors: [], formsSet };
  var adjustDataBeforeSend = function (data) {
    return data;
  };

  function getUrlParameter(parameter) {
    var result = new RegExp("[\\?&]" + parameter + "=([^&#]*)").exec(
      window.location.search
    );

    return result === null
      ? undefined
      : decodeURIComponent(result[1].replace(/\+/g, " "));
  }

  function getFormData(formEl) {
    var data = {};
    var elements = formEl.querySelectorAll(
      "input[name]:not([type=password]):not([type=hidden]),select[name]"
    );

    Array.prototype.forEach.call(elements, function (e) {
      var key = e[primaryKey] || e.name;

      if (!blacklistSet.has(key)) {
        data[key] = e.value;
      }
    });

    return data;
  }

  function getAllFields() {
    var acc = [];

    formsSet.forEach(function (formEl) {
      acc = acc.concat(Object.keys(getFormData(formEl)));
    });

    return acc;
  }

  function sendData(sfv, callback) {
    var data = adjustDataBeforeSend({
      cid: getUrlParameter("cid"),
      lpu: window.location.href,
      metadata_cid: getUrlParameter("metadata_cid"),
      sfv: sfv
    });

    if (!data.cid && !data.metadata_cid) {
      log.errors.push({
        data,
        message: "Data not sent, check cid/metadata_cid"
      });
      return;
    }

    var xhr = new XMLHttpRequest();

    // TODO: consider using fetch api with "keepalive: true"
    // when it's widely supported instead of sync request
    xhr.open("POST", baseUrl + "/insight", false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function () {
      if (xhr.status === 200) {
        callback && callback();
      }
    };

    xhr.send(JSON.stringify(data));
    log.sentData.push(data);
  }

  function sendFormData(formEl, callback) {
    sendData(getFormData(formEl), callback);
  }

  function listenHubspotCallback() {
    var interval;
    var callback = function () {
      if (window.hubspot) {
        var onMessage = function (e) {
          if (
            e.data.type === "hsFormCallback" &&
            e.data.eventName === "onFormSubmit"
          ) {
            var formEl = window.document.querySelector(
              'form[data-form-id="' + e.data.id + '"]'
            );

            if (formEl) {
              sendFormData(formEl);
            } else {
              // an iframe form, fallback to hs provided data
              sendData(
                e.data.data.reduce(function (acc, field) {
                  acc[field.name] = field.value;
                  return acc;
                }, {})
              );
            }
          }
        };

        window.addEventListener("message", onMessage, false);
        window.clearTimeout(interval);
      }
    };

    interval = window.setInterval(callback, 3000);
    callback();
  }

  function listenMarketoCallback() {
    var interval;
    var callback = function () {
      if (window.MktoForms2 && window.MktoForms2.whenReady) {
        var onReady = function (form) {
          form.onSuccess(function () {
            sendFormData(form.getFormElem().get(0));
          });
        };

        window.MktoForms2.whenReady(onReady);
        window.clearTimeout(interval);
      }
    };

    interval = window.setInterval(callback, 3000);
    callback();
  }

  function listenDriftCallback() {
    var interval;
    var callback = function () {
      if (window.drift && window.drift.on) {
        var onEmailCapture = function (e) {
          sendData({ email: e.data.email });
        };

        window.drift.on("emailCapture", onEmailCapture);
        window.clearTimeout(interval);
      }
    };

    interval = window.setInterval(callback, 3000);
    callback();
  }

  function submitHandler(e) {
    var form = e.target;
    var id = form.getAttribute("id") || "";

    if (
      id.search("hsForm_") === 0 ||
      (id.search("mktoForm_") === 0 && window.MktoForms2)
    ) {
      return;
    }

    sendData(getFormData(form));
  }

  function initForm(el) {
    if (el.tagName !== "FORM" || formsSet.has(el)) {
      return;
    }

    if (listenFormSubmit) {
      el.addEventListener("submit", submitHandler);
    }

    formsSet.add(el);
    onFormInit(el);
  }

  function observer(mutations) {
    mutations.forEach(function (mutation) {
      Array.prototype.forEach.call(mutation.addedNodes, initForm);
    });
  }

  function init(options) {
    if (options.baseUrl) {
      baseUrl = options.baseUrl;
    }

    if (options.adjustDataBeforeSend) {
      adjustDataBeforeSend = options.adjustDataBeforeSend;
    }

    if (options.primaryKey) {
      primaryKey = options.primaryKey;
    }

    if (typeof options.listenFormSubmit === "boolean") {
      listenFormSubmit = options.listenFormSubmit;
    }

    if (options.onFormInit) {
      onFormInit = options.onFormInit;
    }

    if (options.initForms !== false) {
      listenHubspotCallback();
      listenMarketoCallback();
      listenDriftCallback();

      Array.prototype.forEach.call(
        window.document.querySelectorAll("form"),
        initForm
      );

      new MutationObserver(observer).observe(window.document.body, {
        childList: true,
        subtree: true
      });
    }

    if (options.onReady) {
      options.onReady();
    }
  }

  window.Metadata = window.Metadata || {};
  window.Metadata.pixel = { init, sendData, sendFormData, getAllFields, log };
})();
