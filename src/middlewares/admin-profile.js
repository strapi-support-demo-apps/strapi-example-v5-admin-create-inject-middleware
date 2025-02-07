module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    await next();

    try {
      let data = ctx.response.body.data;

      await strapi.documents("api::admin-profile.admin-profile").create({
        data: {
          email: data.email.toLowerCase(),
          firstName: data.firstname,
          lastName: data.lastname,
          adminUser: [data.id],
        },
      });
    } catch (error) {
      strapi.log.error("unable to create admin profile");
    }
  };
};
