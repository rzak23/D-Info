const si = require('systeminformation');

si.diskLayout()
  .then(data => console.log(data))
  .catch(error => console.error(error));