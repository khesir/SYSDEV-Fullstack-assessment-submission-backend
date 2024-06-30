

CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    avatar VARCHAR(255)
);

CREATE TABLE programming_languages {
    id INT AUTO_INCREMENT PRIMARY KEY,
    favorites VARCHAR(50) NOT NULL,
}