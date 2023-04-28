// "use strict" kipinde kodu çalıştır
'use strict';

// .modal sınıfını taşıyan HTML öğesini seçin ve modal adlı bir değişkene atayın
const modal = document.querySelector('.modal');

// .overlay sınıfını taşıyan HTML öğesini seçin ve overlay adlı bir değişkene atayın
const overlay = document.querySelector('.overlay');

// .close-modal sınıfını taşıyan HTML öğesini seçin ve btnCloseModal adlı bir değişkene atayın
const btnCloseModal = document.querySelector('.close-modal');

// .show-modal sınıfını taşıyan TÜM HTML öğelerini seçin ve btnsOpenModal adlı bir diziye atayın
const btnsOpenModal = document.querySelectorAll('.show-modal');

// openModal adlı bir fonksiyon oluşturun
const openModal = function () {
  // modal ve overlay öğelerinin hidden sınıfını kaldırın
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// closeModal adlı bir fonksiyon oluşturun
const closeModal = function () {
  // modal ve overlay öğelerine hidden sınıfını ekleyin
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Tüm btnsOpenModal öğeleri için bir döngü başlatın
for (let i = 0; i < btnsOpenModal.length; i++) {
  // Her btnsOpenModal öğesi için click olayı ekleyin ve openModal fonksiyonunu çağırın
  btnsOpenModal[i].addEventListener('click', openModal);
}

// btnCloseModal öğesi için click olayı ekleyin ve closeModal fonksiyonunu çağırın
btnCloseModal.addEventListener('click', closeModal);

// overlay öğesi için click olayı ekleyin ve closeModal fonksiyonunu çağırın
overlay.addEventListener('click', closeModal);

// Belge için bir klavye olayı ekle
document.addEventListener('keydown', function (e) {
  // Klavye olayının tuşunu kontrol edin
  // console.log(e.key);

  // Eğer Escape tuşuna basıldıysa ve modal öğesi hidden sınıfını taşımıyorsa closeModal fonksiyonunu çağırın
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
