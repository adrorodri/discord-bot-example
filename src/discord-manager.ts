import * as Eris from "eris";

export class DiscordManager {

    private funcionAnonima: (mensaje) => void = () => {};
    private bot;

    public conectarBot(token: string) {
        this.bot = Eris(token);
        // Replace TOKEN with your bot account's token

        this.bot.on("ready", () => { // When the bot is ready
            console.log("Ready!"); // Log "Ready!"
        });

        this.bot.on("error", (err) => {
            console.error(err); // or your preferred logger
        });

        this.bot.on("messageCreate", (msg) => { // When a message is created
            this.funcionAnonima(msg)
        });

        this.bot.connect(); // Get the bot to connect to Discord
    }

    public escucharMensajes(funcionEscucharMensajes: (msg) => void) {
        this.funcionAnonima = funcionEscucharMensajes
    }

    public mandarMensajes(channelId: string, mensaje: string) {
        this.bot.createMessage(channelId, mensaje);
    }
}
