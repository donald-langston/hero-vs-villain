class Hero extends Person {
    constructor(name) {
        super(name);
    }

    // method
    render() {
        return document.getElementById("hero-container").innerHTML = `<div class="hero">
        <img class="hero-image" src="https://scdn.slashgear.com/wp-content/uploads/2019/09/spider-man_main-1280x720.jpg" height="200" width="200">
        <p class="hero-health">Health: ${this.health}</p>
        <button id="hero-button">Attack</button>
        </div>`;
    }
}

