module.exports = function(sequelize, Sequelize) {

    var students = sequelize.define('students', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        studentid: {
            type: Sequelize.STRING
        },

        firstname: {
            type:Sequelize.STRING
        },

        lastname: {
            type:Sequelize.STRING
        },

        email: {
            type:Sequelize.STRING
        },

        address: {
            type:Sequelize.STRING
        },

        gpa: {
            type:Sequelize.DECIMAL
        }

    });

    return students;

}