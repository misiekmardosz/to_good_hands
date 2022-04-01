export class User{
    constructor(userEmail, password) {
        this.id = null;
        this.userEmail = userEmail;
        this.password = password;
    }
    setId(id) {
        this.id = id;
    }
}