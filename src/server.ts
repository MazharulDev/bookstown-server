import mongoose from 'mongoose';
import app from './app';
import config from './config';
import { Server } from 'http';

process.on('uncaughtException', error => {
    console.log(error);
    process.exit(1);
});

let server: Server;
async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log(`Database is connected`);

        server = app.listen(config.port, () => {
            console.log(`Application app listening on port ${config.port}`);
        });
    } catch (error) {
        console.log('Failed to connect', error);
    }
}

main();

