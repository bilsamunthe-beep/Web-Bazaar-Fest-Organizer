// SOAL 4: Validasi JavaScript
const form = document.getElementById('bazaarForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Reset error
    document.querySelectorAll('.error').forEach(el => el.innerText = "");

    const email = document.getElementById('ownerEmail').value;
    if (!email.includes("@")) {
        document.getElementById('emailError').innerText = "Email tidak valid!";
        valid = false;
    }

    const target = document.getElementById('targetSales').value;
    if (target <= 0) {
        document.getElementById('salesError').innerText = "Harus angka positif!";
        valid = false;
    }

    if (valid) {
        alert("Pendaftaran Berhasil!");
        form.reset();
    }
});

// SOAL 5: DOM Dinamis (Array of Object)
let tenants = [
    { id: 1, nama: "Kopi Kenangan" },
    { id: 2, nama: "Ayam Geprek Napinadar" },
    { id: 3, nama: "Lappet Pulut/Pohul" },
    { id: 4, nama: "Sate Padang" }
];

const listUI = document.getElementById('tenantList');

function render() {
    listUI.innerHTML = "";
    tenants.forEach(t => {
        const li = document.createElement('li');
        li.innerHTML = `${t.nama} <button onclick="hapusTenant(${t.id})">Hapus</button>`;
        listUI.appendChild(li);
    });
}

function tambahTenant() {
    const input = document.getElementById('newTenant');
    if (input.value !== "") {
        tenants.push({ id: Date.now(), nama: input.value });
        input.value = "";
        render();
    }
}

function hapusTenant(id) {
    tenants = tenants.filter(t => t.id !== id);
    render();
}

render();