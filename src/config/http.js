import expressApp from '#Config/express.js';
import { createServer } from 'http';

const httpServer = createServer(expressApp);

export default httpServer;
