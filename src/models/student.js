exports.init = function(Sequelize, connection) {

    var Student = connection.define('student', {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        grade_level: Sequelize.INTEGER
    });
}