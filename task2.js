class User {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.followers = options.followers;
    }

    getInfo() {
        return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`;
    }
}

const mango = new User({
 name: 'Mango',
 age: 2,
 followers: 20,
});

console.log(mango.getInfo()); // User Mango is 2 years old and has 20 followers