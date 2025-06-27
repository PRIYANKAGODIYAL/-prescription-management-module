const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const prescriptionRoutes = require('./routes/prescriptionRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/prescriptions', prescriptionRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
