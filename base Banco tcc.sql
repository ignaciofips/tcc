CREATE DATABASE db_workUp
USE db_workUp

CREATE TABLE tb_Usuario ( 
	idUsuario INT PRIMARY KEY IDENTITY (1,1),
	nomeUsuario VARCHAR (40) not null,
	usernameUsuario VARCHAR (40) not null,
	nascUsuario DATE not null,
	emailUsuario VARCHAR (40) not null,
	senhaUsuario VARCHAR (40) not null,
	areaInteresseUsuario VARCHAR (40) not null,
	curriculoUsuario VARCHAR (40) not null,
	contatoUsuario VARCHAR (20) NOT NULL,
	fotoUsuario VARCHAR (40) not null,
	cidadeUsuario VARCHAR (40) not null,
	estadoUsuario VARCHAR (40) not null,
	LogradouroUsuario VARCHAR (40) not null,
	cepUsuario VARCHAR (40) not null,
	numeroLograUsuario VARCHAR (40) not null,
	sobreUsuario VARCHAR (40) not null,
	experienciaUsuario VARCHAR (40) not null,
	nomeCompetenciaUsuario VARCHAR (40) not null,
	formacaoCompetenciaUsuario VARCHAR (40) not null,
	dataFormaçãoCompetenciaUsuario DATE not null,
);

CREATE TABLE tb_Admin (
	idAdmin INT PRIMARY KEY IDENTITY (1,1),
	nomeAdmin VARCHAR (40) NOT NULL,
	usernameAdmin VARCHAR (40) not null,
	emailAdmin VARCHAR (40) not null,
	contatoAdmin VARCHAR (20) NOT NULL,
	senhaAdmin VARCHAR (40) not null,
	fotoAdmin VARCHAR (40) NOT NULL,
);

CREATE TABLE tb_StatusVaga (
	idStatusVaga INT PRIMARY KEY IDENTITY (1,1),
	tipoStatusVaga VARCHAR (40) NOT NULL,
);

CREATE TABLE tb_statusVagaUsuario (
	idStatusVagaUsuario INT PRIMARY KEY IDENTITY (1,1),
	tipoStatusVaga VARCHAR (40) NOT NULL,
);

CREATE TABLE tb_Empresa (
	idEmpresa INT PRIMARY KEY IDENTITY (1,1),
	usernameEmpresa VARCHAR (40) not null,
	nomeEmpresa VARCHAR (40) NOT NULL,
	fotoEmpresa VARCHAR (40) NOT NULL,
	sobreEmpresa VARCHAR (40) NOT NULL,
	atuacaoEmpresa VARCHAR (40) NOT NULL,
	cnpjEmpresa VARCHAR (40) NOT NULL,
	contatoEmpresa VARCHAR (20) NOT NULL,
	senhaEmpresa VARCHAR (40) not null,
	cidadeEmpresa VARCHAR (40) not null,
	estadoEmpresa VARCHAR (40) not null,
	LogradouroEmpresa VARCHAR (40) not null,
	cepEmpresa VARCHAR (40) not null,
	numeroLograEmpresa VARCHAR (40) not null,
);

CREATE TABLE tb_Vaga (
	idVaga INT PRIMARY KEY IDENTITY (1,1),
	nomeVaga VARCHAR (40) NOT NULL,
	dataPublicacaoVaga DATE NOT NULL,
	prazoVaga DATE NOT NULL,
	modalidadeVaga VARCHAR (40) NOT NULL,
	salarioVaga DECIMAL(10,2) NOT NULL,
	cidadeVaga VARCHAR (40) NOT NULL,
	estadoVaga VARCHAR (40) NOT NULL,
	areaVaga VARCHAR (40) NOT NULL,
	beneficiosVaga VARCHAR (40) NOT NULL,
	diferencialVaga VARCHAR (40) NOT NULL,
	idEmpresa INT FOREIGN KEY REFERENCES tb_Empresa(idEmpresa),
	idStatusVaga INT FOREIGN KEY REFERENCES tb_StatusVaga(idStatusVaga),
);

CREATE TABLE tb_Publicacao (
	idPublicacao INT PRIMARY KEY IDENTITY (1,1),
	detalhePublicacao VARCHAR (40) NOT NULL,
	fotoPublicacao VARCHAR (40),
	idEmpresa INT FOREIGN KEY REFERENCES tb_Empresa(idEmpresa),
	idAdmin INT FOREIGN KEY REFERENCES tb_Admin(idAdmin),
	idVaga INT FOREIGN KEY REFERENCES tb_Vaga(idVaga),
);

CREATE TABLE tb_Chat (
	idChat INT PRIMARY KEY IDENTITY (1,1),
	mensagemChat VARCHAR (40) NOT NULL,
	conversaChat VARCHAR (40) NOT NULL,
	idEmpresa INT FOREIGN KEY REFERENCES tb_Empresa(idEmpresa),
	idUsuario INT FOREIGN KEY REFERENCES tb_Usuario(idUsuario),
	idAdmin INT FOREIGN KEY REFERENCES tb_Admin(idAdmin),
);










