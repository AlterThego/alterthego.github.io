document.addEventListener("DOMContentLoaded", function () {
    const chatbotAside = document.getElementById('chatbot');
    const cybrBtn = document.querySelector('.cybr-btn');

    cybrBtn.addEventListener('click', function () {
        chatbotAside.classList.toggle('chatbot-hidden');
        chatbotAside.classList.toggle('chatbot-visible');
        cybrBtn.classList.toggle('active');
    });

    document.getElementById('close-chatbot').addEventListener('click', function () {
        chatbotAside.classList.add('chatbot-hidden');
        chatbotAside.classList.remove('chatbot-visible');
        cybrBtn.classList.remove('active');
    });
});
