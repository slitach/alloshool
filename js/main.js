// Apply theme immediately on load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

document.addEventListener('DOMContentLoaded', function () {

    // --- Dark Mode Dynamic Header Injection --- //
    const headerIcons = document.querySelector('.header-icons');
    if (headerIcons && !document.getElementById('dark-mode-toggle')) {
        const toggleLink = document.createElement('a');
        toggleLink.href = '#';
        toggleLink.id = 'dark-mode-toggle';
        toggleLink.style.cursor = 'pointer';
        
        const isDark = document.body.classList.contains('dark-theme');
        toggleLink.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>`;
        
        // Insert as first icon
        headerIcons.insertBefore(toggleLink, headerIcons.firstChild);
        
        toggleLink.addEventListener('click', function(e) {
            e.preventDefault();
            document.body.classList.toggle('dark-theme');
            const nowDark = document.body.classList.contains('dark-theme');
            localStorage.setItem('theme', nowDark ? 'dark' : 'light');
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.className = `fas ${nowDark ? 'fa-sun' : 'fa-moon'}`;
            }
        });
    }

    // --- Collapsible for Grade/Track Selection --- //
    const collapsibles = document.querySelectorAll('.selection-list .collapsible');
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function () {
            // Toggle active class on the clicked item
            this.classList.toggle('active');

            // Toggle folder icon
            const icon = this.querySelector('.fa-folder, .fa-folder-open');
            if (icon) {
                icon.classList.toggle('fa-folder');
                icon.classList.toggle('fa-folder-open');
            }

            // Toggle display of the content
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // --- Accordion for Course Content Page --- //
    const accordionHeaders = document.querySelectorAll('.accordion-menu .accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function () {
            // Deactivate all other headers in the same menu
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active-accordion');
                    otherHeader.nextElementSibling.style.display = 'none';
                }
            });

            // Toggle active class on the clicked header
            this.classList.toggle('active-accordion');

            // Toggle display of the content
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

});