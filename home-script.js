function toggleLogoSize() {
    const logo = document.getElementById('logo');
    if (logo.classList.contains('small-logo')) {
        logo.classList.remove('small-logo');
        logo.classList.add('large-logo');
    } else {
        logo.classList.remove('large-logo');
        logo.classList.add('small-logo');
    }
}