import Sequelize from 'sequelize';
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './bug.db'
});


const User = sequelize.define('user', {
	id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	first_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
    last_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	},
    user_role:{
        type: Sequelize.STRING,
        allowNull: false
    },
	user_password:{
        type: Sequelize.STRING,
        allowNull: false
			
		
    }
});

const Bug = sequelize.define('bug', {
	id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		allowNull: false,
		primaryKey: true
	},
	bug_name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	details:{
        type:Sequelize.STRING,

    },
	link:{
        type:Sequelize.STRING,
        allowNull:false
    },
	assigned:{
        type:Sequelize.STRING,
        allowNull:false

    },
	creator: {
		type: Sequelize.STRING,
		allowNull: false
	},
	priority: {
		type: Sequelize.STRING,
		allowNull: false
	},
	severity: {
		type: Sequelize.STRING,
		allowNull: false
	}
	
    	
});

User.hasMany(Bug, {foreignKey: 'userId'});
Bug.belongsTo(User, {foreignKey: 'userId'});


async function initialize() {
	await sequelize.authenticate();
	await sequelize.sync({alter: true});
}

export {
	initialize,
	User,
    Bug

}