// Initialize count to 0
let count = 0;

// Select value and buttons
const value = document.querySelector("#value");
const decreaseButton = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const increaseButton = document.querySelector("#increase");

// Function to update the display color based on count
const updateColor = () => {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "#222";
    }
};

// Function to update the displayed count
const updateValue = () => {
    value.textContent = count;
};

// Add event listeners to buttons
decreaseButton.addEventListener("click", () => {
    count--;
    updateColor();
    updateValue();
});

resetButton.addEventListener("click", () => {
    count = 0;
    updateColor();
    updateValue();
});

increaseButton.addEventListener("click", () => {
    count++;
    updateColor();
    updateValue();
});
