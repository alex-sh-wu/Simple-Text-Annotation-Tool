const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./db');

class TextSnippet extends Model {}

TextSnippet.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'text_snippet',
});

TextSnippet.sync();

console.log(TextSnippet);

module.exports = {
    TextSnippet,
};
