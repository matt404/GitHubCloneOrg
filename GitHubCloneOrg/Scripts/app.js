var app = function() {

  var success = function(rsp) {
    var count = rsp.length;
    var html = "<div><a href='javascript:app.checkAll()'>check all</a> | <a href='javascript:app.uncheckAll()'>uncheck all</a></div>";
    for (var i = 0; i < count; i++) {
      html += "<div class='row'>" +
        "<div class='col-xs-1'>" + (i+1) + ")</div>" +
        "<div class='col-xs-1'><input type='checkbox' value='" + rsp[i].ssh_url + "' /></div>" +
        "<div class='col-xs-10'>" + rsp[i].name + "</div>" + 
        "</div>";
    }
    document.getElementById("resultsContainer").innerHTML = html;
  };

  var toggleAll = function(isChecked) {
    var container = document.getElementById("resultsContainer");
    var count = container.childNodes.length;
    for (var i = 1; i < count; i++) {
      container.childNodes[i].childNodes[1].childNodes[0].checked = isChecked;
    }
  }

  return {
    getRepos: function() {
      var accessToken = document.getElementById("AccessToken").value;
      var orgName = document.getElementById("OrgName").value;
      var gitHubHost = document.getElementById("GitHubHost").value;
      var pageNum = document.getElementById("PageNum").value;
      var url = "https://"+gitHubHost+"/api/v3/orgs/" + orgName + "/repos?page=" + pageNum + "&per_page=100&access_token=" + accessToken;
      $.get(url, success);
    },

    checkAll: function() {
      toggleAll(true);
    },

    uncheckAll: function() {
      toggleAll(false);
    },

    cloneRepos: function() {
      var container = document.getElementById("resultsContainer");
      var count = container.childNodes.length;
      var req = {};
      req.cloneToPath = document.getElementById("CloneToPath").value;
      req.orgName = document.getElementById("OrgName").value;
      req.repos = [];
      for (var i = 1; i < count; i++) {
        if (container.childNodes[i].childNodes[1].childNodes[0].checked) {
          req.repos[req.repos.length] = { sshURL: container.childNodes[i].childNodes[1].childNodes[0].value };
        }
      }
      console.log(req);
      $.ajax({
        type: "POST",
        url: "/api/repo/clone",
        data: JSON.stringify(req),
        contentType: "application/json",
        dataType: "string",
        success: function(rsp) {
          console.log(rsp);
        }
      });
    }
  }
}();