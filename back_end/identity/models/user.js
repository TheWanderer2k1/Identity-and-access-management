const { DataTypes } = require('sequelize');

const modelConfig = {
    name: 'User',
    attributes: {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        given_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        family_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nickname: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        preferred_username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        profile: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        website: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        zoneinfo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        locale: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number_verified: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    associations: [
        {
            relation: 'hasOne',
            target: 'Fingerprint',
            options: {
                foreignKey: 'user_id',
            },
        },
        {
            relation: 'hasMany',
            target: 'Otp',
            options: {
                foreignKey: 'user_id',
            },
        },
    ],
}

module.exports = { modelConfig }