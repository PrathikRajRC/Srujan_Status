function calculateAgeAndDays() {
    const dob = new Date('2002-06-26');
    const singleSince = dob; // Single since birth
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
    element.innerHTML = ''; // Clear existing content
  
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char;
      element.appendChild(span);
  
      // Add animation class
      setTimeout(() => span.classList.add('animate'), 50);
      setTimeout(() => span.classList.remove('animate'), 300);
    });
  }
  
  window.onload = calculateAgeAndDays;
  setInterval(calculateAgeAndDays, 1000);
  