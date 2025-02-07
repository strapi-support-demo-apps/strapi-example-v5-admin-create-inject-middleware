module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    console.log("inside admin-profile middleware");

    await next();
  };
};
