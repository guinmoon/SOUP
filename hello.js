const VKApi = require('node-vkapi');
const VK    = new VKApi({
  app: {
    id: 5370934,
    secret: 'dpNkXhqq55hZswcRE8dO'
  }, 
  auth: {
    login: 'guinmoon@gmail.com', 
    pass: '1S7R7SFS'
  }
});

VK.auth.user({
  scope: ['audio', 'photos', 'friends', 'wall', 'offline']
}).then(token => {
  return VK.call('users.search', {
    q: 'Maria Hilton', 
    sort: 1, 
    fields: 'bdate',
    count: 1000
  }).then(res => {
    // wall.post response
    return res;
  });
}).then(link => {
  // returned data from previous .then
  console.log('Response: ' + JSON.stringify(link));
}).catch(error => {
  // catching errors
  console.log(error);
});