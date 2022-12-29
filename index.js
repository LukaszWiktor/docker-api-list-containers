const Docker = require('dockerode');
const docker = new Docker();

(async() => {
    try {
        const options = {
            filters: {
              status: ['running']
            }
        };
        const containers = await docker.listContainers(options);
        console.log(containers);
    } catch (error) {
        console.log(error);
    }
})();
