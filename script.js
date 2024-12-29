function calculateAgeAndDays() {
    const dob = new Date('2002-06-26');
    const singleSince = dob;
    const now = new Date();

    const age = now.getFullYear() - dob.getFullYear();
    const timeSinceSingle = now - singleSince;
    const daysSinceSingle = Math.floor(timeSinceSingle / (1000 * 60 * 60 * 24));
    const hoursSinceSingle = Math.floor(timeSinceSingle / (1000 * 60 * 60));
    const minutesSinceSingle = Math.floor(timeSinceSingle / (1000 * 60));
    const secondsSinceSingle = Math.floor(timeSinceSingle / 1000);

    updateCounter('age', `Age: ${age} years`);
    updateCounter('days-since-single', `Days since single: ${daysSinceSingle}`);
    updateCounter('hours-since-single', `Hours since single: ${hoursSinceSingle}`);
    updateCounter('minutes-since-single', `Minutes since single: ${minutesSinceSingle}`);
    updateCounter('seconds-since-single', `Seconds since single: ${secondsSinceSingle}`);
}

function updateCounter(elementId, text) {
    const element = document.getElementById(elementId);
    element.innerHTML = '';

    text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char;
        element.appendChild(span);


        setTimeout(() => span.classList.add('animate'), 50);
        setTimeout(() => span.classList.remove('animate'), 300);
    });
}

window.onload = calculateAgeAndDays;
setInterval(calculateAgeAndDays, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const funnySearchForm = document.getElementById('funnySearchForm');
    const funnyModalBody = document.getElementById('funnyModalBody');
  
    if (funnySearchForm && funnyModalBody) {
      funnySearchForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const searchInput = document.getElementById('searchInput');
        const searchQuery = searchInput ? searchInput.value.trim() : '';

        const funnyComments = [
          "Srujan’s dating app is still buffering. Please wait... 🦦💔",
          "Srujan says: 'You won't find love here!' 💔",
          "Srujan says: 'Love is a myth. But hey, good luck!' 😜",
          "Why not search for happiness instead? 😅",
          "Searching for love like... 'Error 404: Love Not Found'. Try again after 1,000 years. ⏳",
          "Srujan’s heart is still buffering... Waiting for love. 💔⏳"
        ];
  
        const sadGifs = [
          "https://i.gifer.com/xC5.gif",
          "https://i.gifer.com/XJ1C.gif",
          "https://i.gifer.com/3n7y.gif",
          "https://i.gifer.com/2FJ.gif"
        ];
  

        const randomComment = funnyComments[Math.floor(Math.random() * funnyComments.length)];
        const randomGif = sadGifs[Math.floor(Math.random() * sadGifs.length)];

        funnyModalBody.innerHTML = `
          <p>${randomComment}</p>
          <img src="${randomGif}" alt="Sad GIF" class="img-fluid" />
        `;

        const funnyModal = new bootstrap.Modal(document.getElementById('funnyModal'));
        funnyModal.show();

        if (searchInput) searchInput.value = '';
      });
    } else {
      console.error('Required elements not found! Please check if the form and modal body are present in the HTML.');
    }
});

  
  
