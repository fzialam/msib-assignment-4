const editBtn = document.getElementById("edit");
const resumeBtn = document.getElementById("resume");
const myForm = document.getElementById("myForm");
const profileSection = document.getElementById('profile');
const formSection = document.getElementById('form-edit');



function changeDisplay() {
    profileSection.classList.toggle('d-none');
    formSection.classList.toggle('d-none');
}

function getDataForm() {
    return localStorage.getItem('formData');
}
function getDataFormForEdit(){
    const formData = getDataForm();
    if(formData){
        const formData = JSON.parse(savedData);
        document.getElementById('nama').value = formData.nama || '';
        document.getElementById('role').value = formData.role || '';
        document.getElementById('availability').value = formData.availability || '';
        document.getElementById('usia').value = formData.usia || '';
        document.getElementById('lokasi').value = formData.lokasi || '';
        document.getElementById('experience').value = formData.experience || '';
        document.getElementById('email').value = formData.email || '';
    }
}

function displayView(){
    const formData = JSON.parse(getDataForm());

    for (const key in formData) {
        console.log(`${key}-view`)
        const viewElement = document.getElementById(`${key}-view`);
        if(viewElement){
            viewElement.innerText = formData[key];
        }
    }
}

editBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('edit clicked')
    getDataForm();

    changeDisplay();
})

resumeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('resume clicked')
})

myForm.addEventListener('submit', (e) =>{
    e.preventDefault(); // Mencegah refresh halaman

    // Ambil nilai dari input form dan buat objek
    const formData = {
        nama: document.getElementById('nama').value,
        role: document.getElementById('role').value,
        availability: document.getElementById('availability').value,
        usia: document.getElementById('usia').value,
        lokasi: document.getElementById('lokasi').value,
        experience: document.getElementById('experience').value,
        email: document.getElementById('email').value
    };

    console.log('mantap', formData);

    localStorage.setItem('formData', JSON.stringify(formData));
    displayView();
    changeDisplay();
})