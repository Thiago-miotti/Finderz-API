const express = require('express');

const Sql = require('../../infra/sql');




class Usuario {
    constructor(id, nome, username, email, senha) {
        this.id = id;
        this.nome = nome;
        this.username = username;
        this.email = email;
        this.senha = senha;
    }


    static async cadastro(u, res) {

        await Sql.conectar(async (sql) => {
            try {

                // await sql.query('INSERT INTO USUARIO (user_name, user_username, user_email, user_senha) VALUES (?, ?, ?, ?)', [u.nome, u.username, u.email, u.senha]);

            }
            catch (error) {
                if (error) {
                    console.log("erro : ", error);
                }
            }

            return res.send('Usuario criado com sucesso !');

        }

        )
    }

}

module.exports = Usuario;