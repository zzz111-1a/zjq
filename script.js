// 爱心容器
const heartContainer = document.getElementById('heart-container');
// 爱心数量
const heartCount = 60;

// 创建爱心函数
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // 随机爱心大小
    const size = Math.random() * 15 + 8;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // 随机初始位置
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * -100}px`;

    // 随机飘落速度（爱心更慢更轻盈）
    const fallDuration = Math.random() * 30 + 20;
    heart.style.animationDuration = `${fallDuration}s`;

    // 随机动画延迟
    heart.style.animationDelay = `${Math.random() * 8}s`;

    // 随机透明度
    heart.style.opacity = Math.random() * 0.8 + 0.2;

    // 随机旋转角度和水平偏移（模拟爱心飘动）
    heart.style.transform = `
        translateX(${Math.random() * 40 - 20}px) 
        rotate(${Math.random() * 90 - 45}deg)
    `;

    // 随机颜色深浅
    const hue = Math.random() * 20 + 340; // 粉色系色相
    heart.style.filter = `
        hue-rotate(${hue}deg) 
        drop-shadow(0 0 5px rgba(255, 107, 139, 0.${Math.floor(Math.random() * 8 + 2)}))
    `;

    // 添加到容器
    heartContainer.appendChild(heart);

    // 爱心落地后移除并重新创建
    setTimeout(() => {
        heart.remove();
        createHeart();
    }, fallDuration * 1000);
}

// 初始化爱心
for (let i = 0; i < heartCount; i++) {
    setTimeout(createHeart, i * 150);
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});