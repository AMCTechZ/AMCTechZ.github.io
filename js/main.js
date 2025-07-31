console.log("JS is linked and running!");
// Theme Toggle
const themeToggleBtn = document.getElementById('theme-tiggle');
const userPrefersDark = Window.matchMedia('(prefers-color-scheme:dark)').matches;
if(userPrefersDark) {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀'; // sun icon if dark mode is active (to swtich to light mode)
}
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    //Update button icon
    if(document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀'; // show sun to indicate clicking will go light
    } else {
        themeToggleBtn.textContent = '🌙'; // show moon to indicate clicking will go dark
    }
});
