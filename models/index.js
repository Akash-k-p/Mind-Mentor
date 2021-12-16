const User = require('./User');
const Diaries = require('./Diaries');

User.hasMany(Diary, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Diary.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Diaries };