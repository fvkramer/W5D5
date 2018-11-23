class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    let currentTime = new Date();
    this.hours = currentTime.getHours();
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    this.printTime(this.hours, this.minutes, this.seconds);
    setInterval(this._tick.call(this), 1000);
  }


  printTime(hours, minutes, seconds) {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${hours}:${minutes}:${seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes += 1;
    }
    
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours += 1;
    }
    
    if (this.hours === 24) {
      this.hours = 0;
    }
    this.printTime(this.hours, this.minutes, this.seconds);
  }
}

const clock = new Clock();
