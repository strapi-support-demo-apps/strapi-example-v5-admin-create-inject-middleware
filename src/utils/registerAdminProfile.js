const registerAdminProfile = () => {
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
};

module.exports = registerAdminProfile;
