function log() {
    console.log(`${this.speakWord} ${this.name}`);
}

(function (window) {
let names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (const name of names) {
  var firstLetter = name.toLowerCase().charAt(0);
  if (firstLetter === 'j') {
    byeSpeaker.speak(name);
  } else {
    helloSpeaker.speak(name);
  }
}})(window);