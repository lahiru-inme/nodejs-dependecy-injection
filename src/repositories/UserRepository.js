class UserRepository {
    constructor({User}) {
        this.User = User;
    }

    async create(name, email, mobile) {
        try {
             await this.User().set({
                 name: name,
                 email: email,
                 mobile: mobile
             }).save();
            return this.User.id;
        }catch (e) {
            console.log(e.message);
            throw new Error(e.message);

        }
    }
}

module.exports = UserRepository;
