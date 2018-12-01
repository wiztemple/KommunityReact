import express from 'express';
import path from 'path';
import historyFallback from 'connect-history-api-fallback';

const app = express();
const port = process.env.PORT || 3000;
app.use(historyFallback());


// connect static files
app.use(express.static(path.resolve(__dirname, '../dist')));

app.get('/*', (request, response) => response.sendfile('../dist/index.html'));

app.listen(port, () => { });
