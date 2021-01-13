drop table if exists EventoAgua;
create table EventoAgua(
    id                       bigint auto_increment primary key,
    idSensor                 bigint,
    volumenL                 float,
    tiempoDurmiendo          int,
    tipoSensor               float,
    tiempoRegistro           float,
    `date`                   timestamp not null default current_timestamp
);