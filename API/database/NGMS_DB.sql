CREATE TABLE Project (id INT PRIMARY KEY, name VARCHAR(20), description VARCHAR(500));

CREATE TABLE Skill (id INT PRIMARY KEY, name VARCHAR(20), description VARCHAR(500));

CREATE TABLE Project_Skill (idSkill INT, idProject INT, PRIMARY KEY (idSkill, idProject), FOREIGN KEY (idProject) REFERENCES Project(id), FOREIGN KEY (idSkill) REFERENCES Skill(id));
