module.exports = function(sequelize, Sequelize) {

    var students = sequelize.define('students', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },

        studentid: {
            allowNull: false,
            unique: true,
            type: Sequelize.STRING
        },

        firstname: {
            allowNull: false,
            type:Sequelize.STRING
        },

        lastname: {
            allowNull: false,
            type:Sequelize.STRING
        },

        email: {
            allowNull: false,
            type:Sequelize.STRING
        },

        address: {
            allowNull: false,
            type:Sequelize.STRING
        },

        gpa: {
            allowNull: false,
            type:Sequelize.DECIMAL
        }

    }, {
        timestamps: false
    });

    return students;

}