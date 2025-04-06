document.addEventListener('DOMContentLoaded', function() {
    // 현재 활성화된 네비게이션 링크 표시
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = '#4CAF50';
        }
    });
}); 