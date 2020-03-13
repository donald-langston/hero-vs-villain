class Villain extends Person {
    constructor(name) {
        super(name);
    }

    // method
    render() {
       return `<div class="villain">
        <img class="villain-image" src="https://bbts1.azureedge.net/images/p/full/2019/02/c32b6072-0a6b-4c00-ae77-89eb7908a7db.jpg" height="200" width="200">
        <p>Health: ${this.health}</p>
        <button>Attack</button>
        </div>`;
    }
}