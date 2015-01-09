function makeCode() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0, n = inputs.length; i < n; i++) {
        if (inputs[i].type == "checkbox") {
            if (inputs[i].checked) {
                inputs[i].value = 1;
            }
            else {
                inputs[i].value = 0;
            }
        }
    }
    for (var i = 0, t = ""; i < inputs.length; ++i) t += "," + inputs[i].value;
    storeLocally(t.substr(1));
}

function clearAll() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0, n = inputs.length; i < n; i++) {
        if (inputs[i].type == "checkbox") {
            inputs[i].value = "";
            inputs[i].checked = false;
        }
        else {
            inputs[i].value = "";
        }
    }
}

function storeLocally(teamData) {
    var len = localStorage.length;
    var num;
    switch(len) {
        case 0:
            len = 1;
            num = 0;
            break;
        case 1:
            alert("Woah! Something went wrong!");
            break;
        default:
            len = len;
            num = len - 1;
            break;
    }
    localStorage["teamData" + num] = teamData;
    localStorage["len"] = len;
    alert("Data successfully stored");
    clearAll();

}

function clearAllTeams() {
    var deleteConf = confirm("Are you sure you want to delete ALL prescouting data collected?")
    if (deleteConf) {
        localStorage.clear();
    }
}

function viewQR(codeNum) {
    var data = localStorage["teamData" + codeNum];
    alert(codeNum);
    alert(data);
    qrcode.makeCode(data);
}

function camera() {
    alert("at the camera");
    navigator.camera.getPicture(onSuccess(), onFail(), { quality: 50, destinationType: Camera.DestinationType.DATA_URL});
}

function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

function onFail(message) {
    alert('Failed because: ' + message);
}