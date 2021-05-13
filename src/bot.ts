import {DiscordManager} from "./discord-manager";

class Bot {
    private discord = new DiscordManager();
    constructor() {
        this.discord.conectarBot("<BOT_TOKEN>");
        this.discord.escucharMensajes((msg) => {
            if(msg.content === "!ping") {
                this.discord.mandarMensajes(msg.channel.id, "Pong!")
            } else if(msg.content === "!pong") {
                this.discord.mandarMensajes(msg.channel.id, "Ping!")
            }
        })
    }
}

const bot = new Bot();
