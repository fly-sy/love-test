//检查class是否存在
function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
//添加class
function addClass(ele, cls) {
  //如果不存在 添加样式
  if (!this.hasClass(ele, cls)) ele.className += " " + cls;
}
//移除一个class
function removeClass(ele, cls) {
  //如果存在 删除样式
  if (hasClass(ele, cls)) {
    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    ele.className = ele.className.replace(reg, ' ');
  }
}

//跨浏览器删除一条规则
function deleteRule(sheet, opsition) {
  //非 ie
  if (sheet.deleteRule) {
    sheet.deleteRule(opsition);
    //ie
  } else if (sheet.removeRule) {
    sheet.removeRule(opsition);
  }
};

//跨浏览器添加一条规则 3.动态加载style
function insertRule(sheet, selecttorText, cssText, opsition) {
  //非 ie
  if (sheet.insertRule) {
    sheet.insertRule(selecttorText + "{" + cssText + "}", opsition);
    //ie
  } else if (sheet.addRule) {
    sheet.addRule(selecttorText + "{" + cssText + "}", opsition);
  }
};
//1.动态加载js
function loadLink(url) {
  // 创建一个link 标签
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
};

//2.动态加载link
function loadScript(url) {
  // 创建一个script 标签
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

//所有浏览器都支持字符按键
function getCharCode(evt) {
  var e = evt || window.event;
  if (typeof e.charCode == 'number') {
    return e.charCode;
  } else {
    return e.keyCode;
  }
}
/*
	添加事件函数
	obj相当于window
	type相对于onload
	fn相当于funciton
*/
function addEvent(obj, type, fn) {
  //保存上一个事件
  var saved = null;
  if (typeof obj["on" + type] == "function") {
    saved = obj["on" + type]
  };
  //执行事件
  obj["on" + type] = function() {
    if (saved) saved();
    fn.call(this); //需要自己手动定义this指向
  }
};
