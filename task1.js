console.log(Account.prototype.getInfo); // function

function Account(options) {
    this.login = options.login;
    this.email = options.email;
}

Account.prototype.getInfo = function() {
    console.log(`Login: ${this.login}, Email: ${this.email}`);
};

const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mango.getInfo(); 
