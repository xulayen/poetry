
import { observable, action, computed } from 'mobx'
import { OnlineDate } from '../../../config';

class HomeStore {
    @observable
    _txtKey = "";
    get txtKey() {
        return this._txtKey;
    }
    set txtKey(value) {
        this._txtKey = value;
    }

    @action 
    updateTxtKey(txtKey) {
        debugger;
        this.txtKey = txtKey;
    }
}

export default new HomeStore();