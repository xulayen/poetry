import cookieManager from '../common/cookie';
import Storage  from '../common/storage';

var Token = {
    async Refesh(token) {
        
        cookieManager.setCookie('TxzToken', token, 1);
        Storage.set('TxzToken', { u: token });

    }

};

export default Token;