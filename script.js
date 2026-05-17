// Moonchill Travel - Mobil Menü Yönetimi
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            // Menüyü görünür yapmak için CSS sınıfını tetikle
            navLinks.classList.toggle('active');
            
            // Çizgilerin (hamburger menü) animasyonu için
            mobileMenu.classList.toggle('is-active');
        });

        // Menü açıkken herhangi bir linke tıklanırsa menüyü otomatik kapat
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.classList.remove('is-active');
            });
        });
    }
});

// Konsol Doğrulama Mesajı (Sitenin düzgün çalıştığını kontrol etmek için)
console.log("Moonchill Travel dinamik altyapısı (script.js) başarıyla yüklendi.");