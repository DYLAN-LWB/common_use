/**
 * Created by dylan_lwb_ on 2017/9/8.
 */

//解析url参数
function getParam(urlString) {
    var index = urlString.indexOf("?");
    var content = urlString.substring(index);
    var url = decodeURIComponent(content);
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

//根据class查找div
function getElementsByClassName(n) {
    var classElements = [],allElements = document.getElementsByTagName('*');
    for (var i=0; i< allElements.length; i++ ) {
        if (allElements[i].className == n ) {
            classElements[classElements.length] = allElements[i];
        }
    }
    return classElements;
}