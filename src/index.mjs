import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

const server = express();
const port = process.env.PORT || 4000;
server.use(cors());
server.use(express.json({ limit: '25mb' }));
server.set('view engine', 'ejs');

//Conexión con la base de datos
const turso = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//Pinta los proyectos
server.get('/projects', async (req, res) => {
  try {
    const projectSQL = await turso.execute(
      'SELECT * FROM authors JOIN projects ON authors.idAuthor = projects.fk_idAuthors'
    );
    res.json(projectSQL.rows);
  } catch (error) {
    res.status(500).json({ error: 'Se ha producido un error' });
  }
});

//Añadir proyectos
server.post('/newProject', async (req, res) => {
  try {
    const insertAuthor =
      'INSERT INTO authors (author, job, photo) VALUES (?, ?, ?)';
    const [resultsAuthor] = await turso.execute(insertAuthor, [
      req.body.author,
      req.body.job,
      req.body.photo,
    ]);
    const fkAuthor = resultsAuthor.insertId;
    const insertProject =
      'INSERT INTO projects (name, slogan, technologies, repo, demo, `desc`, image, fk_idAuthors) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    const [resultsProject] = await turso.execute(insertProject, [
      req.body.name,
      req.body.slogan,
      req.body.technologies,
      req.body.repo,
      req.body.demo,
      req.body.desc,
      req.body.image,
      fkAuthor,
    ]);
    res.json({
      success: true,
      cardURL: `https://proyectos-molones-xz0d.onrender.com/detail/${resultsProject.insertId}`,
    });
  } catch (error) {
    res.status(500).json({ error: 'Se ha producido un error' });
  }
});

//Cargar plantilla de proyecto individual
server.get('/detail/:idProject', async (req, res) => {
  const { idProject } = req.params;
  try {
    const selectProject =
      'SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors and idProject = ?';
    const [resultProject] = await turso.execute(selectProject, [idProject]);
    {
    }
    res.render('detail', { project: resultProject[0] });
  } catch (error) {
    res.status(500).json({ error: 'Se ha producido un error' });
  }
});

//Servidores estáticos
const statictServer = './src/public-react';
server.use(express.static(statictServer));

const staticImage = './src/images';
server.use(express.static(staticImage));

const staticStyle = './src/public-css';
server.use(express.static(staticStyle));
