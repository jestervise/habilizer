CREATE TABLE IF NOT EXISTS habit (
    id       VARCHAR(60)  PRIMARY KEY,
    decription     VARCHAR      NOT NULL,
    title          VARCHAR,
    done           BOOLEAN DEFAULT 'N',
    created_date        timestamp           NOT NULL,
    user_id        VARCHAR NOT NULL,
    until_date        timestamp           NOT NULL,
);

CREATE TABLE IF NOT EXISTS auth_user (
    id       VARCHAR(60)  PRIMARY KEY,
    name VARCHAR(60) NOT NULL
);