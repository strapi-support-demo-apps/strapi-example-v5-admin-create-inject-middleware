"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
    const adminRoutes = strapi.admin.routes.admin.routes;

    const adminProfileMiddleware = "global::admin-profile";

    const indexID = adminRoutes.findIndex(
      (route) => route.path === "/users" && route.method === "POST"
    );

    // instead of calling the middleware when the user is created you could do it when they configure their password
    // const indexID = adminRoutes.findIndex(
    //   (route) => route.path === "/register" && route.method === "POST"
    // );

    if (indexID !== -1) {
      if (!adminRoutes[indexID].config.middlewares) {
        adminRoutes[indexID].config.middlewares = [adminProfileMiddleware];
      } else {
        adminRoutes[indexID].config.middlewares.push(adminProfileMiddleware);
      }
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
