// 取得相關元素
const imagePairs = document.querySelectorAll('.image-pair');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentGroup = 0; // 當前圖片組索引

// 顯示指定的圖片組
function showImageGroup(index) {
    imagePairs.forEach((pair, i) => {
        if (i === index) {
            pair.classList.add('active');
        } else {
            pair.classList.remove('active');
        }
    });
}

// 下一組圖片
nextBtn.addEventListener('click', () => {
    currentGroup = (currentGroup + 1) % imagePairs.length; // 循環切換
    showImageGroup(currentGroup);
});

// 上一組圖片
prevBtn.addEventListener('click', () => {
    currentGroup = (currentGroup - 1 + imagePairs.length) % imagePairs.length; // 循環切換
    showImageGroup(currentGroup);
});

// 初始化顯示第一組圖片
showImageGroup(currentGroup);

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".image-slider");

    sliders.forEach((slider) => {
        const pairs = slider.querySelectorAll(".image-pair");
        const prevBtn = slider.querySelector(".prev");
        const nextBtn = slider.querySelector(".next");

        let currentIndex = 0;

        function updateSlider() {
            pairs.forEach((pair, index) => {
                pair.classList.toggle("active", index === currentIndex);
            });
        }

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + pairs.length) % pairs.length;
            updateSlider();
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % pairs.length;
            updateSlider();
        });

        updateSlider();
    });
});
