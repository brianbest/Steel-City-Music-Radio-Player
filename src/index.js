const $ = require("jquery");
const html = require('./index.html');
const css = require('./style.css');

class SCMPlayer {
  constructor(){
    this.el = this.createElement();
    this.styles = this.createStyles();
  }

  getElement() {
    return this.el;
  }
  
  getStyles() {
    return this.styles;
  }

  setControls() {
    const player = this.el;
    const playControl = this.el.find("[data-play]");
    let audioState = false;
    const main = new Audio("https://hawkstream.mohawkcollege.ca/1/");
  
  
    playControl.on("click", (e) => {
      e.preventDefault();
      togglePlay();
    });
    
    
    function togglePlay() {
      this.el.toggleClass("bb-playing");
      if (audioState) {
        main.pause();
      } else {
        main.play();
      }
      audioState = !audioState;
    }
  }

  createElement() {
    const div = document.createElement('div');
    div.innerHTML = html.trim();
    return div.firstChild;
  }

  createStyles() {
    const style = document.createElement('style');
    style.innerHTML = css;
    return style;
  }
}

module.exports = SCMPlayer;


