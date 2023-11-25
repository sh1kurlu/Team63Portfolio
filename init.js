// JavaScript Codes

const timeThreshold = 1000; // 1000 = 1 sec; 10000 = 10 sec.

//Notification
function showNotification() {
    document.getElementById('notification').style.display = 'block';
}

setTimeout(showNotification, timeThreshold);