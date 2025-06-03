// Hàm chuyển tab
    function switchTab(tab) {
        const tabButtons = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        document.querySelector(`.tab[onclick="switchTab('${tab}')"]`).classList.add('active');
        document.getElementById(tab).classList.add('active');
    }

// Hàm chuyển slide
    const slides = [
        'resource/img/Slide1.png',
        'resource/img/Slide2.png'
    ];

    let currentSlide = 0;

    function showSlide(index) {
        const imgElement = document.getElementById('slideImage');
        imgElement.src = slides[index];
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.addEventListener('DOMContentLoaded', function() {
        showSlide(currentSlide);

        // Gắn sự kiện click
        document.querySelector('.slide-nav.left').addEventListener('click', prevSlide);
        document.querySelector('.slide-nav.right').addEventListener('click', nextSlide);
    });

    // Hàm chọn btn stars-item sẽ đổi màu
    const buttons = document.querySelectorAll('.stars-item');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Xoá class active ở tất cả button
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Hàm delete quảng cáo
        document.querySelector('.floating-qr .close-btn').addEventListener('click', function() {
        document.querySelector('.floating-qr').style.display = 'none';
    });
