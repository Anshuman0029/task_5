const http = require('http');
const Sensor = require('./models/sensor');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://anshuman:9351919275@cluster0.kbo3ozz.mongodb.net/Sensor', { useNewUrlParser: true, useUnifiedTopology: true });

const port = 3000;

var sensordata = {
    id: 1,
    name: "DHT22",
    time: Date.now(),
    temperature: 25,
   
}


const server = http.createServer((req, res) => {
    res.statusCode = 200
    req.on('data', function (chunk) {
        console.log('Data received: ' + chunk);

         
        sensordata = JSON.parse(chunk);
        const newSensor = new Sensor({
            id: sensordata.id,
            name: sensordata.name,
            time: sensordata.time,
            temperature: sensordata.temperature,
      
        });

        newSensor.save().then(doc => {
            console.log("Data saved on database");
            console.log(doc);
        })

    });

}).listen(port, () => {
    console.log(`Server running at port ${port}`)
})




