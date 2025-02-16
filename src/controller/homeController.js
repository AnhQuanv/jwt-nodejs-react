import userService from "../service/userService";


const handleHelloWorld = (req, res) => {
    return res.render("home.ejs");
}

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });
}

const handleCreateNewUser = (req, res) => {
    console.log("CHECK BODY:", req.body); // Kiểm tra dữ liệu form
    let { email, userName, password } = req.body;
    userService.createNewUser(email, userName, password);

    return res.redirect("/user");
}

const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect("/user");
}

const getUpdateUser = async (req, res) => {
    let id = req.params.id;
    let user = await userService.getUserById(id);
    let userData = {};
    if (user && user.length > 0) {
        userData = user[0];

    }
    console.log("check", user, id)
    return res.render("updateUser.ejs", { userData });
}

const handleUpdateUser = async (req, res) => {
    let { email, userName, id } = req.body;
    console.log("check " + email + userName + id);
    await userService.updateUserInfor(email, userName, id);
    return res.redirect("/user");

}

module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUser,
    handleUpdateUser
}