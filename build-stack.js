// mv client-web/dist/* server/dist/client-web
const copyfiles = require("copyfiles");

let source = "client-web/dist/**/*";
let destination = "server/dist/admin";

copyfiles([source, destination], 2, (c, err) => {
  console.log(
    "Copying Angular client files to generated NestJS dist bundle..."
  );
  if (err) {
    console.log(err);
  }
});

source = "client-app/www/**/*";
destination = "server/dist/app";

copyfiles([source, destination], 2, (c, err) => {
  console.log("Copying Ionic app files to generated NestJS dist bundle...");
  if (err) {
    console.log(err);
  }
});
