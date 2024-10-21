document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("send-button");
    const messageInput = document.getElementById("message-input");
    //const messages = document.getElementById("messages");

    sendButton.addEventListener("click", sendMessage);
    messageInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendDataToDjango() {
        const data = { key: 'value' };
        
        fetch('/static/index.html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    /*function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            appendMessage("You", message);
            messageInput.value = "";

            // Simulate a response from the API
            setTimeout(function() {
                appendMessage("Bot", "This is a simulated response.");
            }, 1000);
        }
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = "message";
        messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
        messages.appendChild(messageElement);
        messages.scrollTop = messages.scrollHeight;
    }*/
});