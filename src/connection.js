import { Socket } from "phoenix";

let socket = new Socket("wss://smhack-game-api.herokuapp.com/socket", {name: "Super awesome team"})

socket.connect()

let channel = socket.channel("quiz", {player_name:"Sohil"})

export default channel;
