import User from "./user.model.js";
import PlantInformation from "./plantInformation.model.js";
import Reports from "./reports.model.js";
import Logs from "./logs.model.js";
import PlantHarvest from "./plantHarvest.model.js";
import PlantRequirements from "./plantRequirement.model.js";
import PlantStage from "./plantStage.model.js";
import PlantTransplant from "./plantTransplant.model.js";
import SensorReadings from "./sensorReadings.model.js";
import Sensors from "./sensors.model.js";
import HydroponicModel from "./hydroponicModel.model.js";
import CropSeasons from "./cropSeasons.model.js";

User.hasMany(Logs, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Logs.belongsTo(User, {
    foreignKey: 'user_id'
});

Sensors.hasMany(SensorReadings, {
    foreignKey: 'sensor_id',
    onDelete: 'CASCADE'
});

SensorReadings.belongsTo(Sensors, {
    foreignKey: 'sensor_id'
})

HydroponicModel.hasMany(SensorReadings, {
    foreignKey: 'hydromodel_id',
    onDelete: 'CASCADE'
});

SensorReadings.belongsTo(HydroponicModel, {
    foreignKey: 'hydromodel_id'
});

PlantInformation.hasMany(PlantRequirements, {
    foreignKey: 'plant_id',
    onDelete: 'CASCADE'
});

PlantRequirements.belongsTo(PlantInformation, {
    foreignKey: 'plant_id'
});
PlantInformation.hasMany(CropSeasons, {
    foreignKey: 'plant_id',
    onDelete: 'CASCADE'
});

CropSeasons.belongsTo(PlantInformation, {
    foreignKey: 'plant_id'
});

PlantInformation.hasMany(HydroponicModel, {
    foreignKey: 'plant_id',
    onDelete: 'CASCADE'
});

HydroponicModel.belongsTo(PlantInformation, {
    foreignKey: 'plant_id'
});

HydroponicModel.hasMany(PlantTransplant, {
    foreignKey: 'hydromodel_id',
    onDelete: 'CASCADE'
});

PlantTransplant.belongsTo(HydroponicModel, {
    foreignKey: 'hydromodel_id'
});

PlantTransplant.hasMany(PlantStage, {
    foreignKey: 'transplant_id',
    onDelete: 'CASCADE'
});

PlantStage.belongsTo(PlantTransplant, {
    foreignKey: 'transplant_id'
});

PlantTransplant.hasMany(PlantHarvest, {
    foreignKey: 'transplant_id',
    onDelete: 'CASCADE'
});

PlantHarvest.belongsTo(PlantTransplant, {
    foreignKey: 'transplant_id'
});

export default {
    User,
    HydroponicModel,
    Reports,
    Logs,
    PlantInformation,
    PlantRequirements,
    PlantHarvest,
    PlantStage,
    PlantTransplant,
    SensorReadings,
    Sensors,
    CropSeasons
}