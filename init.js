// JavaScript Codes

const timeThreshold = 10000; // 1000 = 1 sec; 10000 = 10 sec.

//Notification
function showNotification() {
    document.getElementById('notification').style.display = 'block';
}

setTimeout(showNotification, timeThreshold);

const togglePanel = document.querySelector('.toggle-panel');

togglePanel.addEventListener('click', () => {
    togglePanel.classList.toggle('panel-hidden');
});