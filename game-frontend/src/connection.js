import { Socket } from "phoenix-js";

let socket = new Socket("ws://smhack-game-api.herokuapp.com/socket", {name: "Super awesome team"})

socket.connect()

let channel = socket.channel("quiz", {})


export default channel;
