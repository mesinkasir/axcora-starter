function initTabs() {
    const tabLinks = document.querySelectorAll('.nav-tabs .nav-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Save both scroll positions
            const scrollY = window.scrollY;
            const scrollX = window.scrollX;

            e.preventDefault();

            // Remove focus immediately
            link.blur();

            // Tab switch logic
            const navTabs = link.closest('.nav-tabs');
            const allLinks = navTabs.querySelectorAll('.nav-link');
            allLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            let tabContent = navTabs.nextElementSibling;
            while (tabContent && !tabContent.classList.contains('tab-content')) {
                tabContent = tabContent.nextElementSibling;
            }
            if (!tabContent) tabContent = navTabs.parentElement.querySelector('.tab-content');
            if (!tabContent) return;

            const allPanes = tabContent.querySelectorAll('.tab-pane');
            allPanes.forEach(pane => pane.classList.remove('active'));
            const targetId = link.getAttribute('href').replace('#', '');
            const targetPane = tabContent.querySelector('#' + targetId);
            if (targetPane) targetPane.classList.add('active');

            window.dispatchEvent(new CustomEvent('tabChanged', { detail: { activeTab: targetId } }));

            // Scroll lock: try to "freeze" the viewport during tab switching 
            let lockScroll = true;
            let lockCount = 0;
            const lockInterval = setInterval(() => {
                if (lockCount >= 10) {
                    clearInterval(lockInterval);
                    lockScroll = false;
                    return;
                }
                window.scrollTo(scrollX, scrollY);
                lockCount++;
            }, 10);

            // One last unlock after images/render!
            setTimeout(() => {
                window.scrollTo(scrollX, scrollY);
            }, 300);
        });
    });
}