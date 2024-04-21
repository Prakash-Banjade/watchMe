import * as dotenv from 'dotenv'
dotenv.config();
import axios from 'axios';
import * as cheerio from 'cheerio'


export class Scrape {

    constructor(url: string) {
        this.url = url;
    }

    private url: string;

    private readonly USERNAME = process.env.BRIGHT_DATA_USERNAME as string;
    private readonly PASSWORD = process.env.BRIGHT_DATA_PASSWORD as string;
    private readonly HOST = process.env.BRIGHT_DATA_HOST as string;
    private readonly PORT = parseInt(process.env.BRIGHT_DATA_PORT);
    private sessionId = (1000000 * Math.random()) | 0;

    async scrape() {
        if (!this.url) throw new Error('No url provided');

        try {
            const response = await axios.get(this.url, this.getOptions())
            // console.log(response.data)

            const $ = cheerio.load(response.data)

            const title = $('#productTitle').text().trim()
            return title

        } catch (e) {
            console.log(e)
        }
    }

    private getOptions() {
        return ({
            auth: {
                username: `${this.USERNAME}-session-${this.sessionId}`,
                password: this.PASSWORD
            },
            host: this.HOST,
            port: this.PORT,
            rejectUnauthorized: false
        })
    }
}