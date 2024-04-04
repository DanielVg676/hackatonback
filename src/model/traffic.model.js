const mongoose = require('mongoose');

const TrafficSchema = new mongoose.Schema({
  
  src_port: Number,
  dest_port: Number,
  proto: String,
  flow_pkts_toserver: Number,
  flow_pkts_toclient: Number,
  flow_bytes_toserver: Number,
  flow_bytes_toclient: Number,
  tcp_flags: String,
  
  // Agrega todos los campos generados por el preprocesamiento, especialmente las columnas one-hot
  // Por ejemplo:
  // 'proto_tcp': Number,
  // 'tcp_flags_ack': Number,
  // Recuerda que los nombres de campos deben coincidir exactamente con los de tu DataFrame
});

module.exports = mongoose.model('Traffic', TrafficSchema);
