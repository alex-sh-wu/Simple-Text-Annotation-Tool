const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./db');

class Label extends Model {}

Label.init({
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'label',
});

Label.sync();

console.log(Label);

module.exports = {
    Label,
};
