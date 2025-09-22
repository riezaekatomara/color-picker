// ambil elemen yang dibutuhkan
const cpInputEl = document.getElementById("cpInput");
const cpCodeEl = document.getElementById("cpCode");
const cpBackgroundEl = document.getElementById("cpBackground");

// fungsi untuk update tampilan warna
function updateColor(event) {
  const newColor = event.target.value;

  // set background dan update teks kode hex
  cpBackgroundEl.style.backgroundColor = newColor;
  cpCodeEl.textContent = `code hex: ${newColor}`;
}

cpInputEl.addEventListener("input", updateColor);
