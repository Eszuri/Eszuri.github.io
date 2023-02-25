// Untuk Class Navigasi / Navbar 
document.querySelector("#mainNav").classList.add("navbar", "navbar-expand", "navbar-dark", "fixed-top");
document.querySelector("#mainNav2").classList.add("container-fluid");
document.querySelector("#mainNav3").classList.add("navbar-nav");
document.querySelector("#mainNav4").classList.add("dropstart");
document.querySelector("#link1").classList.add("navbar-brand");
document.querySelector("#link1-a").classList.add("bi", "bi-house-fill", "fs-3");
document.querySelector("#link2").classList.add("nav-link", "active");
document.querySelector("#link3").classList.add("nav-link", "active");
document.querySelector("#link4").classList.add("nav-link", "active");
document.querySelector("#link5").classList.add("darkMode-a");
document.querySelector("#link5-a").classList.add("bi", "bi-clock");
document.querySelector("#view").classList.add("mt-2", "text-warning", "fw-bolder", "text-bg-dark", "rounded-pill");
document.querySelector("#listDropdown1").classList.add("focusList");
document.querySelector("#listDropdown2").classList.add("focusList");
document.querySelector("#listDropdown3").classList.add("focusList");
document.querySelector("#view2").classList.add("focusList");
//  Untuk Class Navigasi / Navbar  End

// Untuk Class Profil / jumbotron
document.querySelector("#mainProfil2").classList.add("text-center");
document.querySelector("#mainProfil3").classList.add("fs-3", "fw-bold");
document.querySelector("#mainProfil4").classList.add("pt-4", "fw-bolder", "text-center");
document.querySelector("#imageProfil").classList.add("img-thumbnail");
// Untuk Class Profil / jumbotron End

// Untuk Class My Hobby
document.querySelector("#Hobby2").classList.add("text-center", "pb-5", "pt-5");
document.querySelector("#Hobby3").classList.add("fw-bold");
document.querySelector("#Hobby4").classList.add("container-fluid");
document.querySelector("#Hobby5").classList.add("row", "text-center", "pb-4");
document.querySelector("#hobbyList1").classList.add("bi", "bi-music-note-beamed", "pb-4", "fs-1", "text-primary");
document.querySelector("#hobbyList2").classList.add("bi", "bi-playstation", "pb-4", "fs-1", "text-primary");
document.querySelector("#hobbyList3").classList.add("bi", "bi-controller", "pb-4", "fs-1", "text-primary");
document.querySelector("#hobbyList4").classList.add("bi", "bi-film", "pb-4", "fs-1", "text-primary");
// Untuk Class My Hobby End

// Untuk Class About me
document.querySelector("#gweh2").classList.add("text-center", "pb-5");
document.querySelector("#gweh2-a").classList.add("fw-bolder");
document.querySelector("#gweh3").classList.add("container-fluid");
document.querySelector("#gweh3-a").classList.add("row", "text-center");
document.querySelector("#gweh3-b").classList.add("col");
document.querySelector("#gweh4").classList.add("fw-bold");
document.querySelector("#gweh5").classList.add("col");
document.querySelector("#gweh5-a").classList.add("fw-bold");
document.querySelector("#ml").classList.add("img-fluid");
document.querySelector("#hi3").classList.add("img-fluid");
// Untuk Class About me End

// Untuk Class Saran
document.querySelector("#saran2").classList.add("pb-5");
document.querySelector("#saran2-a").classList.add("text-center", "fw-bold");
document.querySelector("#saran3").classList.add("container-fluid", "mb-3");
document.querySelector("#saran3-a").classList.add("col-6");
document.querySelector("#saran3-b").classList.add("form-label", "fw-bolder");
document.querySelector("#saran4").classList.add("mb-3", "container-fluid");
document.querySelector("#saran4-a").classList.add("form-label", "fw-bolder");
document.querySelector("#saran5").classList.add("ms-3", "pb-5");
document.querySelector("#saran5-a").classList.add("btn", "btn-primary");
document.querySelector("#saran5-a").style.cursor = "pointer";
document.querySelector("#saranTerkirim").classList.add("alert", "alert-primary");
document.querySelector("#saranTerkirim").style.display = "none";
// Untuk Class Saran End

// Untuk Class Footer
document.querySelector("#foot").classList.add("text-center", "text-dark");
// Untuk Class Footer End

// End Class

// Bagian Utama dari js ini
// Menampilkan Jam digital di Bawah / fixed Bottom
document.querySelector("#mainJam").classList.add("fixed-bottom", "ofDisplay");

// code untuk angka jam nya
function waktu() {
    const time = new Date();
    const perminggu = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    const perbulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let bulan = perbulan[time.getMonth()];
    let hari = perminggu[time.getDay()];
    let tanggal = time.getDate();
    let tahun = time.getFullYear();
    let jam = time.getHours();
    let menit = time.getMinutes();
    let detik = time.getSeconds();

    let full = tanggal + " " + bulan + " " + tahun + " / " + hari + ",   " + jam + ":" + menit + ":" + detik;
    document.getElementById("jam").innerHTML = full;
}
setInterval(waktu, 100);

//  code untuk switch / toogle jam  ( display On/Of )
document.querySelector("#link5").addEventListener("click", function () {
    document.querySelector("#mainJam").classList.toggle("ofDisplay");
});

// Menampilkan Jam digital di Bawah / fixed Bottom End / Selesai

// code Database Saran ke Excel
const scriptURL = 'https://script.google.com/macros/s/AKfycbzIShcktHSRmhS5GcA89hpIuiX_IGJ5cB_HfHs-qV85-uhN6Z--C4lXzRWCnz5zRgSi/exec'
const form = document.forms['submit']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            form.reset();
            document.getElementById("saranTerkirim").style.display = "block";
            setTimeout(function () {
                document.getElementById("saranTerkirim").style.display = "none";
            }, 4000);
            console.log('Success!'), response
        }
        )

        .catch(error => console.error('Error!', error.message))
});
// code Database Saran ke Excel End / Selesai

// code untuk membuat jumlah pengunjung web saya
//  tempat variabel
let counter = document.querySelector('#view');
let saveBw = localStorage.getItem("page_view");
let rest = document.querySelector("#rst");

// if else nya
if (saveBw) {
    saveBw = Number(saveBw) + 1;
    localStorage.setItem("page_view", saveBw);
}
else {
    saveBw = 1;
    localStorage.setItem("page_view", 1);
}
// pemanggilan
counter.innerHTML = saveBw;
// reset viewer
rest.addEventListener("click", () => {
    saveBw = 1;
    localStorage.setItem("page_view", 1);
    counter.innerHTML = saveBw;
});
//  akhir code jumlah pengynjung


// Display on / active ketika double click di navbar ( counter jumlah pengunjung )

// document.getElementById("mainNav2").addEventListener("dblclick", function (event) {
//     document.getElementById("view").style.display = "block";
//     setTimeout(function () {
//         document.getElementById("view").style.display = "none";
//     }, 5000);
// });

// Display on / active ketika double click di navbar ( counter jumlah pengunjung ) End


// display on / active ketika tekan keyboard   [  slash ( / )  untuk display on ,  Backquote ( ` ) untuk reset counter pengunjung ]
// Backquote ada di sebelah pojok kiri atas di bawah tombol Esc
function aksiKeyb(event) {
    if (event.code === 'Slash') {
        document.getElementById("view").style.display = 'block';
    }

    // Backquote ada di bawah Esc (pojok kiri atas)
    if (event.code === 'Backquote') {
        document.getElementById("view2").style.display = 'block';
    }
};

document.getElementById("view2").addEventListener("click", function () {
    document.getElementById("view2").style.display = "none";
});


// Nonaktifkan Tombol klik kanan
document.querySelector("body", "html").addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

// Nonaktifkan tombol F12 / Inspect
// document.onkeydown = function (event) {
//     event = (event || window.event);
//     if (event.key == "F12") {
//         return false;
//     }
// }
// document.addEventListener('contextmenu', event => event.preventDefault());

// Toggle Dark Mode
document.getElementById("darkMode").addEventListener("click", function () {
    document.getElementById("darkMode").classList.toggle("darkModeIconSwitch");
    document.getElementById("Hobby").classList.toggle("darkMode-Profil");
    document.getElementById("Saran").classList.toggle("darkMode-Profil");
    document.getElementById("listDropdown").classList.toggle("bg-secondary");
    document.getElementById("rst").classList.toggle("text-light");
    document.getElementById("mainProfil").classList.toggle("mainProfil-dark");
    document.getElementById("mainProfil3").classList.toggle("text-light");
    document.getElementById("mainProfil4").classList.toggle("text-light");
    document.getElementById("imageProfil").classList.toggle("bg-success");
    document.getElementById("Gweh").classList.toggle("gweh-dark");
    document.getElementById("gweh2-a").classList.toggle("text-light");
    document.getElementById("gweh4").classList.toggle("text-light");
    document.getElementById("gweh5-a").classList.toggle("text-light");
    document.getElementById("Nama_Antum").classList.toggle("namaDark");
    document.getElementById("Comment").classList.toggle("commentDark");
    document.getElementById("footerDarkSwitch").classList.toggle("footerDark");
    document.getElementById("creator").classList.toggle("footCreateAndTh");
    document.getElementById("thRilis").classList.toggle("footCreateAndTh");
    document.querySelectorAll(".a-nav").forEach(textLight => {
        textLight.classList.toggle("text-light");
    });
});
// End Selesai