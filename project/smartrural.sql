drop table if exists SmartRural;
create table SmartRural(
    id                       bigint auto_increment primary key,
    sensorId                 bigint,
    roomTemperature          float,
    airHumidity              float,
    groundHumidity           float,
    litrePerMeterWater       float,
    windForce                float,
    windDirection            float,
    countIllumination        float,
    isRaining                tinyint(1),
    isCeilingGreenhouseOpen  tinyint(1),
    isWallGreenhouseOpen     tinyint(1),
    isAtDaytime              tinyint(1),
    canPhotosynthesisImprove tinyint(1),
    `date`                   timestamp not null default current_timestamp
);

drop table if exists OpenCeilingGreenHouse;
create table OpenCeilingGreenHouse(
    id     bigint auto_increment primary key,
    `date` timestamp not null default current_timestamp
);

drop table if exists Irrigate;
create table Irrigate(
    id     bigint auto_increment primary key,
    `date` timestamp not null default current_timestamp
);

drop table if exists CanFertilizer;
create table CanFertilizer(
    id     bigint auto_increment primary key,
    `date` timestamp not null default current_timestamp
);

drop table if exists CanOpenWallGreenhouse;
create table CanOpenWallGreenhouse(
    id     bigint auto_increment primary key,
    `date` timestamp not null default current_timestamp
);