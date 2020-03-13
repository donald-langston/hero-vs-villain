class Weapon {

    damage = Math.floor((Math.random() * 11) + 10);

    constructor(name) {
        this.name = name;
    }
}

let weapon = new Weapon("machine gun");
console.log(weapon);