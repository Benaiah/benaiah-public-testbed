const net = require("net");

const client = net.createConnection("/tmp/buildbot-socket", () => {
  // 'connect' listener
  console.log("connected to server!");
  client.write(
    `${JSON.stringify({
      id: "1",
      action: "deployFiles",
      values: {}
    })}\r\n`
  );
});

client.on("data", data => {
  console.log(data.toString());
  client.end();
});

client.on("end", () => {
  console.log("disconnected from server");
});
