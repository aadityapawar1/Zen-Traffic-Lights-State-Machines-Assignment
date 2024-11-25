// Traffic Light State Machine
class TrafficLight {
  constructor() {
    this.states = ["red", "yellow", "green"];
    this.currentStateIndex = 0;

    // Get light elements
    this.redLight = document.getElementById("red");
    this.yellowLight = document.getElementById("yellow");
    this.greenLight = document.getElementById("green");

    // Start the state machine
    console.log("Starting traffic light state machine...");
    this.start();
  }

  // Start the traffic light cycle
  start() {
    this.updateLight();
  }

  // Update the traffic light state
  updateLight() {
    // Remove 'active' class from all lights
    this.redLight.classList.remove("active");
    this.yellowLight.classList.remove("active");
    this.greenLight.classList.remove("active");

    // Add 'active' class to the current light
    const currentState = this.states[this.currentStateIndex];
    document.getElementById(currentState).classList.add("active");

    // Log the state and related action to the console
    if (currentState === "red") {
      console.log("Traffic light changed to: RED (Cars must stop!)");
    } else if (currentState === "yellow") {
      console.log("Traffic light changed to: YELLOW (Prepare to stop!)");
    } else if (currentState === "green") {
      console.log("Traffic light changed to: GREEN (Cars can go!)");
    }

    // Schedule the next state change
    let timeout = 0;
    if (currentState === "red") timeout = 5000; // Red light for 5 seconds
    if (currentState === "yellow") timeout = 2000; // Yellow light for 2 seconds
    if (currentState === "green") timeout = 5000; // Green light for 5 seconds

    // Simulate an asynchronous task
    this.simulateAsyncTask(`Handling ${currentState.toUpperCase()} light state...`).then(() => {
      setTimeout(() => {
        this.currentStateIndex = (this.currentStateIndex + 1) % this.states.length; // Loop states
        this.updateLight();
      }, timeout);
    });
  }

  // Simulate an asynchronous task (e.g., API call)
  async simulateAsyncTask(taskDescription) {
    console.log(`${taskDescription} (async task started)`);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${taskDescription} (async task completed)`);
        resolve();
      }, 1000); // Simulate 1-second API call
    });
  }
}

// Initialize the traffic light
new TrafficLight();
