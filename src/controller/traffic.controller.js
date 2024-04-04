const mongoose = require('mongoose');
const TrafficSchema = require('../model/traffic.model');
const bcrypt= require('bcrypt');


// Función para convertir el DataFrame a JSON y cargar los datos
async function syncdata() {
  // Simula la lectura del DataFrame preprocesado de Pandas
  // En la práctica, necesitarías convertir df_preprocessed a un formato que Node.js pueda entender directamente o usar un archivo intermediario (como JSON)
  const dfPreprocessed = new pandas.DataFrame( /* tus datos preprocesados aquí */);
  const dataJson = dfPreprocessed.toJSON();

  // Inserta los datos en MongoDB
  try {
    await traffic.insertMany(dataJson);
    console.log('Datos cargados con éxito.');
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
}

const manageTrafficData = async (operation, data, id = null, updateData = null) => {
  try {
    switch(operation) {
      case 'save':
        const newTrafficData = new Traffic(data);
        await newTrafficData.save();
        console.log('Datos del tráfico guardados con éxito.');
        break;
      case 'upload':
        await Traffic.insertMany(data);
        console.log('Datos del tráfico subidos con éxito.');
        break;
      case 'update':
        if (id && updateData) {
          const updatedTrafficData = await Traffic.findByIdAndUpdate(id, updateData, { new: true });
          if (updatedTrafficData) {
            console.log('Datos del tráfico actualizados con éxito.');
          } else {
            console.log('No se encontró el documento para actualizar.');
          }
        } else {
          throw new Error('Para actualizar se requiere un ID y datos de actualización.');
        }
        break;
      default:
        throw new Error('Operación no válida.');
    }
  } catch (error) {
    console.error(`Error al ${operation} datos del tráfico:`, error);
  }
};