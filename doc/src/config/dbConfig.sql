CREATE SCHEMA IF NOT EXISTS client_service;

CREATE TABLE IF NOT EXISTS client_service.client (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    nickname VARCHAR(64) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS client_service.client_password (
    id VARCHAR(36) PRIMARY KEY,
    password_value VARCHAR(18) NOT NULL,
    client_id VARCHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    CONSTRAINT fk_user FOREIGN KEY (client_id) REFERENCES client_service.client(id) ON DELETE CASCADE
);