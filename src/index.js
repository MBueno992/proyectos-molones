const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const server = express();
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

//crear conexión con los datos de freeDb
async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  connection.connect();
  return connection;
}

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//Pinta los proyectos
server.get('/projects', async (req, res) => {
  const connect = await getConnection();
  const sql =
    'SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors';
  const [results] = await connect.query(sql);
  connect.end();
  res.json({ success: true, data: results });
});

//Añadir proyectos
server.post('/newProject', async (req, res) => {
  const connect = await getConnection();
  const insertAuthor =
    'INSERT INTO authors (author, job, photo) VALUES (?, ?, ?)';
  const [resultsAuthor] = await connect.query(insertAuthor, [
    req.body.author,
    req.body.job,
    req.body.photo,
  ]);
  const fkAuthor = resultsAuthor.insertId;
  const insertProject =
    'INSERT INTO projects (name, slogan, technologies, repo, demo, `desc`, image, fk_idAuthors) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  const [resultsProject] = await connect.query(insertProject, [
    req.body.name,
    req.body.slogan,
    req.body.technologies,
    req.body.repo,
    req.body.demo,
    req.body.desc,
    req.body.image,
    fkAuthor,
  ]);
  connect.end();
  res.json({
    success: true,
    cardURL: `https://proyectos-molones-xz0d.onrender.com/detail/${resultsProject.insertId}`,
  });
});

//
server.get('/detail/:idProject', async (req, res) => {
  console.log(req.params);
  const { idProject } = req.params;
  const connect = await getConnection();
  const selectProject =
    'SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors and idProject = ?';
  const [resultProject] = await connect.query(selectProject, [idProject]);
  {
  }
  res.render('detail', { project: resultProject[0] });
});

//Servidores estáticos
const statictServer = './src/public-react';
server.use(express.static(statictServer));

const staticImage = './src/images';
server.use(express.static(staticImage));

const staticStyle = './src/public-css';
server.use(express.static(staticStyle));
