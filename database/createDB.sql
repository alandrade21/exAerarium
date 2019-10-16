/* Table Language
 * This table is meant to register the languages that are in use in the database (not in the app).
 * The system column, meant to be boolean, represents languages used by the system, so, they cannot 
 * be removed by the user.
 */
CREATE TABLE tb_language (
  id TEXT not null PRIMARY KEY,
  name TEXT not null,
  system INTEGER DEFAULT 0 -- boolean
);

INSERT INTO tb_language (id, name, system)
VALUES('en', 'English', 1);

/* Table Enviro
 * Allows global configuration for the app and the database.
 * This table is designed to have only one line, and one column for each configuration element.
 */

CREATE TABLE tb_enviro (
  db_version TEXT not null,
  db_default_language TEXT not null REFERENCES tb_language(id),
  last_alteration_date TEXT DEFAULT (date('now')) -- date
); 

INSERT INTO tb_enviro(db_version, db_default_language, last_alteration_date)
VALUES('0.0.1', 'en', '2019-01-22 00:00:00.000');

/* Table Rule_System */
CREATE TABLE tb_rule_system (
  id INTEGER not null PRIMARY KEY autoincrement,
  name TEXT not null,
  description TEXT
);
