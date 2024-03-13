const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

//Generador de token
const generateToken = (payload) => {
  const token = jwt.sign(payload, 'secret_key', { expiresIn: '1h' });
  return token;
};

//Verificar token
const verifyToken = (token) => {
  try {
    const verifyT = jwt.verify(token, 'secret_key');
    return verifyT;
  } catch (error) {
    return null;
  }
};

//Autenticación
const authenticate = (req, res, next) => {
  const tokenBearer = req.headers['authorization'];
  if (!tokenBearer) {
    return res.status(401).json({ error: 'No se encuentra el token' });
  }
  const token = tokenBearer.split(' ')[1];
  const validateToken = verifyToken(token);
  if (!validateToken) {
    return res.status(401).json({ error: 'Token incorrecto' });
  }
  req.user = validateToken;
  next();
};

//Validación correo electrónico
const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

//por qué puerto va a escuchar las peticiones
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

//static server
const statictServer = './src/public-react';
server.use(express.static(statictServer));

// //Login
// server.post('/', async (req, resp) => {
//   const { email, password } = req.body;
//   const connect = await getConnection();
//   const selectUser = 'SELECT * FROM authors WHERE email = ?';
//   const [resultSelect] = await connect.query(selectUser, [email]);
//   if (resultSelect.length !== 0) {
//     const isOkPass = await bcrypt.compare(
//       password,
//       resultSelect[0].hashed_password
//     );
//     console.log(resultSelect);
//     if (isOkPass) {
//       const infoToken = {
//         id: resultSelect[0].idAuthor,
//         email: resultSelect[0].email,
//       };
//       const token = generateToken(infoToken);
//       resp.json({
//         success: true,
//         token: token,
//       });
//     } else {
//       resp.json({
//         success: false,
//         msg: 'Contraseña incorrecta.',
//       });
//     }
//   } else {
//     resp.json({
//       success: false,
//       msg: 'Por favor, comprueba el correo electrónico.',
//     });
//   }
//   connect.end();
// });

// //Registro
// server.post('/register', async (req, resp) => {
//   const { author, email, password } = req.body;
//   console.log(req.body);
//   const connect = await getConnection();
//   const selectUser = 'SELECT * FROM authors WHERE email = ?';
//   const [resultSelect] = await connect.query(selectUser, [email]);
//   if (!validateEmail(email)) {
//     return resp.json({
//       success: false,
//       msg: 'El correo electrónico no es válido',
//     });
//   }
//   if (resultSelect.length === 0) {
//     const passwordHashed = await bcrypt.hash(password, 10);
//     const insertUser =
//       'INSERT INTO authors (author, email, hashed_password) VALUES (?, ?, ?)';
//     const [resultUser] = await connect.query(insertUser, [
//       author,
//       email,
//       passwordHashed,
//     ]);
//     // const userId = resultUser.insertId;
//     // const insertWizard =
//     //   'INSERT INTO authors (author, job, email, hashed_password) VALUES (?, ?, ?, ?)';
//     // const [resultWizard] = await connect.query(insertWizard, [
//     // w
//     //   userId,
//     // ]);
//     resp.json({ success: true, data: resultUser });
//   } else {
//     resp.json({
//       success: false,
//       msg: 'Ese correo electrónico ya está registrado.',
//     });
//   }
// });

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
    cardURL: `https://project-promo-v-module-4-team-3.onrender.com/detail/${resultsProject.insertId}`,
  });
});

//
server.get('/detail/:idProject', async (req, res) => {
  console.log(req.params);
  const { idProject } = req.params; //req.params sería la forma de recoger el id del proyecto, que viene a través de la URL (poner el nombre de la propiedad de la base de datos)

  //conectamos con la BD
  const connect = await getConnection();

  //hacemos el select para realizar la consulta a la BD

  const selectProject =
    'SELECT * FROM authors, projects WHERE authors.idAuthor = projects.fk_idAuthors and idProject = ?'; // ?  representa al idProyect de la linea 80

  const [resultProject] = await connect.query(selectProject, [idProject]);
  {
  }

  console.log(resultProject);
  res.render('detail', { project: resultProject[0] });
});

const staticImage = './src/images';
server.use(express.static(staticImage));

const staticStyle = './src/public-css';
server.use(express.static(staticStyle));
