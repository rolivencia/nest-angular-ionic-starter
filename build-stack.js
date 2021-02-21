// mv client-web/dist/* server/dist/client-web
const copyfiles = require("copyfiles");

let source = "client-web/dist/**/*";
let destination = "server/dist/client-web";

copyfiles([source, destination], 2, (c, err) => {
  console.log(
    "Copying Angular client files to generated NestJS dist bundle..."
  );
  if (err) {
    console.log(err);
  }
});
