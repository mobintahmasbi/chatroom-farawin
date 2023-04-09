import Sequelize  from 'sequelize';

const sequelize = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
  const Contact = sequelize.define('contact', {
    path: {
        type: Sequelize.STRING,
        allowNull: false
      },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: Sequelize.STRING,
      allowNull: false
    },
    userId: {
      type: Sequelize.INT,
      allowNull: false
    }
  });
// this function get phone number and password and return an object 
// the object has message property also has all contacts that user
// saved 

async function getuser(phoneNumber, password){
    try{
        const user = await sequelize.query(`SELECT * FROM users WHERE phoneNumber = '${phoneNumber}' AND password = '${password}'`);
        if (user.length === 0) {
         throw Error('Invalid phone number or password');
        }
  const contacts = await Contact.findAll({
    where: { userId: user[0].id },
    attributes: ['path', 'userName']
  });
  return {
    Userinformation:{
      userId: user[0].userId,
      userName: user[0].userName
  },
    status:true,
    message: 'Contacts retrieved successfully',
    contacts: contacts.map(contact => ({
      userName: contact.userName,
      path: contact.path
    }))

  };
}
catch (error) {
    console.error(error);
    return { message: 'An error occurred while retrieving contacts' };
  }}
export default getuser;
