const app = require("./app");
const config = require("./config/dotenvConfig");

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${config.NODE_ENV} mode on port ${config.PORT}`
  );
});
