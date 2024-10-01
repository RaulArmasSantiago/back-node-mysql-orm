import User from './users.models';
import Company from './company.model';

// Definir las relaciones aquí
Company.hasMany(User, {
  foreignKey: 'fkIdCompany',
  sourceKey: 'id'
});

User.belongsTo(Company, {
  foreignKey: 'fkIdCompany',
  targetKey: 'id'
});