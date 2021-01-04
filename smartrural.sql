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
    canPhotosynthesisImprove tinyint(1)
);