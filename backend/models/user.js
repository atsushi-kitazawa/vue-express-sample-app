module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define('account', {
        id: {
            type: Sequelize.INTEGER,
            field: 'id',
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING,
            field: 'name'
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    return Account;
};