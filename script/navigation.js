function isOverflown({ clientWidth, clientHeight, scrollWidth, scrollHeight }) {
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
}

function isVisible(parent, child) {
    return !(
        (child.offsetLeft - parent.offsetLeft >= parent.offsetWidth)
        || (child.offsetTop - parent.offsetTop >= parent.offsetHeight)
    );
}

function init() {
    const mobileNavTriggers = document.querySelectorAll('[data-mobile-nav-trigger]');
    const mobileNavOverlay = document.querySelector('[data-mobile-nav-overlay]');

    // Mobile nav button open/close
    mobileNavTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            mobileNavTriggers.forEach((trigger) => trigger.classList.toggle('is-active'));
            document.body.classList.toggle('is-mobilenav-open');
        });
    });

    // Mobile nav overlay close
    mobileNavOverlay.addEventListener('click', () => {
        mobileNavTriggers.forEach((trigger) => {
            trigger.classList.remove('is-active');
        });
        document.body.classList.remove('is-mobilenav-open');
    });

    showMobileNavButton();
}

init();