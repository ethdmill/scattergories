import * as express from "express";
import * as http from "http";
import * as socketio from "socket.io";
import generateList from "./game_functions/generateList";
import Timer from "./game_functions/timer";
import generateLetter from "./game_functions/randomLetter";

const expressServer = express();

expressServer.use(express.static("../main/public"));

expressServer.get("/hello", (req, res) => {
  res.send("World");
});

const httpServer = http.createServer(expressServer);
const io = socketio.listen(httpServer, {});

const lobbyIO = io.of("/lobby");

lobbyIO.on("connection", (client) => {
  console.log("user joined!");

  client.on("generate_list", () => {
    lobbyIO.emit("list_generated", generateList());
    Timer().then(() => {
      lobbyIO.emit("timer_ended");
    });
  });

  client.on("generate_letter", () => {
    lobbyIO.emit("letter_generated", generateLetter());
  });

  client.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(8080, () => {
  console.log(`Server listening on port 8080`);
});
