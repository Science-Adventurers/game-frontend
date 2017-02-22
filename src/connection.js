import { Socket } from "phoenix-js";

let socket = new Socket("wss://smhack-game-api.herokuapp.com/socket", {name: "Super awesome team"})

socket.connect()

let channel = socket.channel("quiz", {player_name:"Sohil"})


export default channel;
