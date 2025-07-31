console.log("JS is linked and running!");
// Theme Toggle
const btn = document.getElementById('theme-toggle');
const supportsMatchMedia = typeof window.matchMedia === 'function';
const userPrefersDark = supportsMatchMedia &&
                        window.matchMedia('(prefers-color-scheme: dark)').matches;
                        
if(userPrefersDark) {
    document.body.classList.add('dark-mode');
    if (btn) btn.textContent = '☀️'; // sun icon if dark mode is active (to swtich to light mode)
}
if (btn) {
    btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    //Update button icon
    btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    
});
}
