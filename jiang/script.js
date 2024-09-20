document.addEventListener('DOMContentLoaded', function() {
    // 轮播图功能
    var carousel = new bootstrap.Carousel(document.getElementById('photoCarousel'), {
        interval: 5000
    });

    // 留言表单提交
    document.getElementById('guestbookForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // 这里添加表单验证和提交逻辑
    });

    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});