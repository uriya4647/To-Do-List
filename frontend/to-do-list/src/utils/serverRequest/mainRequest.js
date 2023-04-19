import {requestsConfiguration} from './requestsConfiguration';

const mainRequest = async (path, method, databody) => {

    try {
        
        let options = {
            url:path,
            method: method,
            data: databody
        }

        let res = await requestsConfiguration(options);
        return res.data
    }
    catch (err) {
      
        throw err;
    }
}

export default mainRequest;