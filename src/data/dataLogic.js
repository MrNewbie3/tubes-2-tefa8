// const anime = require("animejs");
const navButton = document.getElementsByClassName("nav-button");
const iframe = document.querySelector("iframe");
const hiddenNav = document.querySelector(".navSpecial");
const input = document.querySelectorAll(".input");
const send = document.getElementById("bkirim");
const output = document.querySelectorAll(".showInput");
const key = document.querySelectorAll("#keyText");
const nill = document.getElementsByClassName("empty-alert");
const pengalaman = document.querySelector("#showInput13");
const pendidikan = document.querySelector("#showInput11");
const alertPengalaman = document.getElementById("alert-pengalaman");
const alertPendidikan = document.getElementById("alert-pendidikan");
const berkasAlert = document.getElementById("berkas");
const arrSekolah = ["SD", "SMP", "SMK", "SMA"];
function value() {
  let text = "";
  for (let index = 0; index < output.length; index++) {
    text = text + ` ${key[index].innerHTML} ${input[index].value} <br/>`;
  }
  return text;
}
let closed = true;
let arr = [];
send.addEventListener("click", () => {
  const validMail = validator.isEmail(input[8].value);
  for (let at = 0; at < input.length - 2; at++) {
    arr.push(validate.isEmpty(input[at].value));
  }
  let fileSize = 530;
  if (!validate.isEmpty(input[13].value)) {
    fileSize = input[13].files[0].size / 1024;
  }
  if (fileSize > 510) {
    arr[13] = true;
    document.querySelector(".size-maks-alert").classList.remove("hidden");
  } else {
    arr[13] = false;
    document.querySelector(".size-maks-alert").classList.add("hidden");
  }
  if (!validMail) {
    arr[8] = true;
    document.querySelector(".wrong-mail-format-alert").classList.remove("hidden");
  } else if (validMail) {
    arr[8] = false;
    document.querySelector(".wrong-mail-format-alert").classList.add("hidden");
  }

  if (arr.includes(true)) {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === true) {
        nill[index].classList.remove("hidden");
      } else if (arr[index] === false) {
        nill[index].classList.add("hidden");
      }
    }
    arr.splice(0, arr.length);
    Swal.fire({
      icon: "error",
      title: "Terjadi Kesalahan!",
      text: "Data Kosong / kesalahan input, cek ulang data",
    });
  } else
    Swal.fire({
      title: "Anda yakin?",
      html: "<p>Data yang anda isikan sebagai berikut </p>" + value(),
      showDenyButton: true,
      denyButtonText: "Cek Ulang",
      icon: "warning",
      confirmButtonText: "Ya, Saya yakin",
    }).then((result) => {
      if (result.isConfirmed) {
        let timerInterval;
        Swal.fire({
          title: "Mengirimkan data",
          timer: 2000,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then(() => {
          Swal.fire("Sukses mengirimkan data", "", "success");
          for (let index = 0; index < output.length; index++) {
            output[index].innerHTML = `${input[index].value}`;
          }
          for (let index = 0; index < arrSekolah.length; index++) {
            if (pengalaman.innerHTML < 5 || pendidikan.innerHTML.includes(arrSekolah[index])) {
              berkasAlert.innerHTML = "*Mohon maaf anda tidak lolos seleksi!";
              if (pengalaman.innerHTML < 5) {
                alertPengalaman.classList.remove("hidden");
                alertPengalaman.innerHTML = "Pengalaman anda kurang dari 5 tahun";
              } else if (pendidikan.innerHTML.includes(arrSekolah[index])) {
                alertPengalaman.classList.add("hidden");
                alertPendidikan.classList.remove("hidden");
                alertPendidikan.innerHTML = "Pendidikan anda kurang dari S1";
              } else if (pengalaman.innerHTML < 5 || pendidikan.innerHTML.includes(arrSekolah[index])) {
                alertPendidikan.classList.remove("hidden");
                alertPendidikan.innerHTML = "Pendidikan anda kurang dari S1";
                alertPengalaman.classList.remove("hidden");
                alertPengalaman.innerHTML = "Pengalaman anda kurang dari 5 tahun";
              }
            } else {
              berkasAlert.innerHTML = "Selamat! anda lolos seleksi";
              alertPengalaman.classList.add("hidden");
              alertPendidikan.classList.add("hidden");
            }
          }
          const displayFiles = document.querySelectorAll(".uploadedFiles");
          for (let index = 0; index < displayFiles.length; index++) {
            displayFiles[index].innerHTML = input[13 + index].files[0].name;
          }
          document.querySelector(".e-card").classList.remove("hidden");
          hiddenNav.classList.remove("hidden");
          document.querySelector(".forms").classList.add("hidden");
          document.querySelector(".navSpecialForms").classList.add("hidden");
        });
      } else if (result.isDenied) {
        Swal.fire("Data batal dikirimkan", "", "info");
      }
    });
});
