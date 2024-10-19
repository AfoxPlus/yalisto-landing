const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/establishment/:type/:table/:restaurant_id"],
    exact: true,
    component: "Establishment",
  },
];

export default routes;
