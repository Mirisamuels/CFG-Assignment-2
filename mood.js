document.getElementById('submitMood').addEventListener('click', handleMood);

let moodHistory = []; // Array to store mood history

function handleMood() {
    const moodInput = document.getElementById('moodInput').value.trim().toLowerCase();
    
    if (moodInput === '') {
        alert('Please enter a mood!');
        return;
    }

    const moodData = getMoodData(moodInput); // Get mood data based on user input

    if (moodData) {
        updateMoodDisplay(moodData);
        moodHistory.push(moodInput); // Add to history array
        updateMoodHistory(); // Update the history display
    } else {
        alert('Mood not recognized. Please enter a valid mood.');
    }

    console.log('Current Mood: ', moodInput);
    console.log('Mood History: ', moodHistory);
}

function getMoodData(mood) {
    const moodDetails = {
        happy: { emoji: '😊', quote: 'Keep smiling and enjoy life!', color: '#ffeb3b' },
        sad: { emoji: '😢', quote: 'It’s okay to feel sad sometimes.', color: '#90caf9' },
        angry: { emoji: '😡', quote: 'Take a deep breath and calm down.', color: '#f44336' },
        relaxed: { emoji: '😌', quote: 'Relax and unwind; everything will be fine.', color: '#a5d6a7' },
        bored: { emoji: '😐', quote: 'Find something fun or creative to do!', color: '#cfd8dc' },
        tension: { emoji: '😖', quote: 'Take a break and clear your mind.', color: '#b0bec5' },
        party: { emoji: '🥳', quote: 'Let’s celebrate and have a great time!', color: '#ff4081' },
        excited: { emoji: '🤩', quote: 'Stay pumped and keep the energy going!', color: '#ffcc80' },
        anxious: { emoji: '😰', quote: 'Breathe deeply, stay calm, and take it one step at a time.', color: '#b3e5fc' },
        confused: { emoji: '😕', quote: 'Take a moment to think it through. Clarity will come.', color: '#ffe0b2' },
        // Add more moods if needed
    };
    
    return moodDetails[mood];
}

function updateMoodDisplay(moodData) {
    document.body.style.backgroundColor = moodData.color; // Change background color
    document.getElementById('moodEmoji').textContent = moodData.emoji; // Show emoji
    document.getElementById('moodQuote').textContent = moodData.quote; // Show quote
}

function updateMoodHistory() {
    const historyList = document.getElementById('historyList');
    historyList.innerHTML = ''; // Clear current history

    moodHistory.forEach((mood, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;
        historyList.appendChild(listItem);
    });
}
