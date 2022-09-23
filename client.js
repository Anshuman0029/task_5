const http = require('http');

setInterval(send, 2000); //time is in ms


function send()
{
      const data = {
        id: 1,
        name: "DHT22",
        time: Date.now(),
        temperature: 20,
    
      }

      const low = 5;
      const high = 40;
      temp = Math.floor(Math.random() * (high - low) + low);
      hum =  Math.floor(Math.random() * (high - low) + low);
      data.temperature = temp;
      
      data_to_Send = JSON.stringify(data);
     
      var post_options = {
        host:'SIT314-824555519.us-east-1.elb.amazonaws.com',
        port: '3000',
        method: 'POST',
    
      }

      var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    post_req.write(data_to_Send);
    post_req.end();

    console.log("Data sent : " + data_to_Send);
       

}




