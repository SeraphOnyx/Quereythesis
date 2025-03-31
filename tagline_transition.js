function changeText(element) {
    element.style.opacity = 0;
    setTimeout(() => {
        element.textContent = 'Through Darkness Towards Progress';
        element.style.opacity = 1;
    }, 300);
}

function changeTextBack(element) {
    element.style.opacity = 0;
    setTimeout(() => {
        element.textContent = 'Per Tenebras Ad Progressum';
        element.style.opacity = 1;
    }, 300);
}