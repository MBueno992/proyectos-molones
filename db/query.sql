CREATE TABLE authors(
idAuthor INTEGER PRIMARY KEY AUTOINCREMENT,
author VARCHAR(50) NOT NULL,
job VARCHAR(50) NOT NULL,
photo TEXT
);

CREATE TABLE projects(
idProject INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR (100) NOT NULL,
slogan VARCHAR (100) NOT NULL,
technologies VARCHAR(100) NOT NULL,
repo VARCHAR(1000) NOT NULL, 
demo VARCHAR(1000) NOT NULL, 
`desc` VARCHAR(1000) NOT NULL, 
image TEXT NOT NULL,
fk_idAuthors INT,
FOREIGN KEY (fk_idAuthors) REFERENCES authors(idAuthor)
);

INSERT INTO authors (author, job, photo) VALUES ('Marta Bueno', 'Junior Full-Stack Developer', "https://media.licdn.com/dms/image/D4E03AQH6l--EAspeAw/profile-displayphoto-shrink_200_200/0/1702931768737?e=1715817600&v=beta&t=3_HnzB7p4qejNEl8fd6FoAB_gE758H3T9_s7ruTJibY"), ('Carolina Rodríguez', 'Junior Full-Stack Developer', 'https://ca.slack-edge.com/T2Q8FS5QB-U066VBLUX4Z-c592f12fc758-512'), ('Rosa Ponce', 'Junior Full-Stack Developer', 'https://ca.slack-edge.com/T2Q8FS5QB-U066A3JA7B8-10121d1ae222-512');
INSERT INTO projects (name, slogan, technologies, repo, demo, `desc`, image, fk_idAuthors) VALUES ('Series de Anime', 'Busca tus series anime favoritas', 'Javascript - SASS - HTML5', 'https://github.com/carodriguezp/modulo-2-evaluacion-final-carodriguezp', 'http://beta.adalab.es/modulo-2-evaluacion-final-carodriguezp/', 'En esta web podrás buscar información acerca de tus series anime favoritas y hacer una lista de favoritos para verlas siempre que quieras.', 'https://github.com/Adalab/modulo-2-evaluacion-final-carodriguezp/raw/main/public/images/image-3.PNG', 2),
('Registro de Hogwarts', 'Encuentra tu personaje favorito', 'ReactJs - SASS - HTML5', 'https://github.com/MBueno992/Harry-Potter-characters', 'https://mbueno992.github.io/Harry-Potter-characters/', 'Registro de magos y muggles de Harry Potter, en este proyecto podrás encontrar los personajes de las películas de Harry Potter y filtrarles por la casa de Hogwarts a la que pertenecen y también no nos olvidemos de los muggles.', 'https://github.com/Adalab/modulo-3-evaluacion-final-MBueno992/raw/main/public/desktop.PNG', 1 ),
('Busca en Hogwarts', 'A tope con Harry Potter', 'ReactJs - SASS - HTML5', 'https://github.com/Adalab/modulo-3-evaluacion-final-rosapon', 'https://beta.adalab.es/modulo-3-evaluacion-final-rosapon/', 'Este es mi ejercicio final del módulo 3 del bootcamp de Adalab. Se trata de un buscador de personajes de Harry Potter y está hecho con React y Sass.', 'https://i.postimg.cc/wTHpYpP4/Captura-de-pantalla-2024-02-29-a-las-13-51-17.png', 3 ),
("Sheldon's Game", "¿Podrás ganar a Sheldon?", "HTML5 - CSS3 - Javascript", "https://github.com/MBueno992/sheldon-s-Game", "https://mbueno992.github.io/sheldon-s-Game/", "Esta sencilla página es un guiño al juego que menciona Sheldon Cooper en la serie The Big Bang Theory, una versión renovada del conocido piedra, papel o tijera.", "https://i.postimg.cc/FKw41W4T/sheldon.png", 1 );

