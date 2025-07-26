// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Handle project card clicks
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).style.display = 'block';
        });
    });

    // Handle close button clicks
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            this.closest('.project-detail').style.display = 'none';
        });
    });

    // Close when clicking outside
    document.getElementById('project-details').addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});
