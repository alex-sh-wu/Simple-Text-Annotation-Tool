const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('./db');

// relations
const { Label } = require('./label.js');
const { TextSnippet } = require('./text_snippet.js');

class Annotation extends Model {}

Annotation.init({
    start: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    end: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'annotation',
});

Label.hasMany(Annotation);
Annotation.belongsTo(Label);

TextSnippet.hasMany(Annotation);
Annotation.belongsTo(TextSnippet);

Annotation.sync();

console.log(Annotation);

module.exports = {
    Annotation,
};
