module.exports.hooks = (DBSchema) => {
  DBSchema.pre('save', async (next) => {
    try {
      // TODO
      next();
    } catch (error) {
      next(error);
    }
  });
};

module.exports.statics = (DBModel) => {
  DBModel.statics = {};
};
