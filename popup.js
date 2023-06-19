function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function onButtonClick() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		var url = tabs[0].url;
		var targ = decodeURI(getParameterByName("dest", url));
		chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.body.innerHTML = "<a style=\\"color: white; font-size: 72px;\\" href=\\"' + targ + '\\"> Click Me ! </a>"'});
    });
}

document.getElementById("skipbtn").onclick = onButtonClick;