module.exports = class UserDto {
    login;
    id;
    role;
    isActive;

    constructor(model) {
        this.login = model.login
        this.id = model._id
        this.role = model.role
        this.isActive = model.isActive
    }
}