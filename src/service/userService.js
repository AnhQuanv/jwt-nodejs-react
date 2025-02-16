import bcrypt from 'bcryptjs';
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';

// Create the connection to database


const salt = bcrypt.genSaltSync(10);


const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt);
}

const createNewUser = async (email, userName, password) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });

    let hash = hashPassword(password);
    try {
        const [rows, fields] = await connection.execute('INSERT INTO users (email, username, password) VALUES (?,?,?)', [email, userName, hash]);
    } catch (error) {
        console.log(error);
    }
}

const getUserList = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    let users = [];
    try {
        const [rows, fields] = await connection.execute('Select * from users');
        return rows;
    } catch (error) {
        console.log(error);
    }
}

const deleteUser = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    let users = [];
    try {
        const [rows, fields] = await connection.execute('Delete from users where id = ?', [id]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    let users = [];
    try {
        const [rows, fields] = await connection.execute('Select * from users where id = ?', [id]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

const updateUserInfor = async (email, username, id) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'jwt',
        Promise: bluebird
    });
    let users = [];
    try {
        const [rows, fields] = await connection.execute('update users set email = ? , username = ? where id = ?', [email, username, id]);
        return rows;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createNewUser,
    getUserList,
    deleteUser,
    getUserById,
    updateUserInfor

}