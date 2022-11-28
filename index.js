import express from 'express';
import pgp from 'pg-promise'

const app = express();

const connectionString = process.env.DATABASE_URL || 'postgresql://localhost:5432/express_dokku';

const db = pgp()(connectionString);

const PORT = process.env.PORT || 4007;

app.get('/', async (req, res) => {

    const names = await db.manyOrNone('select * from names');

    res.send({ message: 'Success!', status: 200, names })
});

app.listen(PORT, () => console.log(`App started : ${PORT}`))