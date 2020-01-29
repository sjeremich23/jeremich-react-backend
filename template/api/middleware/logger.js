module.exports = (req, res, next) => {
  const { method, url } = req;

  console.log(
    `[${new Date().toLocaleTimeString()}] ${method} request to URL: ${url}`
  );
  next();
};
