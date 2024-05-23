function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

function hitungLuas() {
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;
    var luas = 0.5 * alas * tinggi;
    document.getElementById('luasHasil').innerText = "Luas Segitiga: " + luas;
}

function hitungKeliling() {
    var sisiA = document.getElementById('sisiA').value;
    var sisiB = document.getElementById('sisiB').value;
    var sisiC = document.getElementById('sisiC').value;
    var keliling = parseFloat(sisiA) + parseFloat(sisiB) + parseFloat(sisiC);
    document.getElementById('kelilingHasil').innerText = "Keliling Segitiga: " + keliling;
}

function resetForm() {
    document.getElementById('sisiA').value = '';
    document.getElementById('sisiB').value = '';
    document.getElementById('sisiC').value = '';
    document.getElementById('kelilingHasil').innerText = '';
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luasHasil').innerText = '';
}


document.getElementsByClassName('tablink')[0].click();
