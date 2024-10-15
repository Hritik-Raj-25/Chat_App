const chatBox = document.getElementById('chat-box');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

sendBtn.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (message !== '') {
        addMessage(message, 'sent');
        chatInput.value = ''; 
        autoReply(); 
    }
});

chatInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendBtn.click();
    }
});

function autoReply() {
    const replies = [
        "Hello! How are you?",
        "That's interesting!",
        "Tell me more!",
        "I'm here to chat with you.",
        "Nice to meet you!"
    ];
    const randomReply = replies[Math.floor(Math.random() * replies.length)];
    setTimeout(() => {
        addMessage(randomReply, 'received');
    }, 1000); 
}
