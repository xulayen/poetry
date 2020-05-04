var Storage = {

    set(key, value) {//增加
        debugger;
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {//获取
        var t = localStorage.getItem(key);
        return t && t !== 'null' ? JSON.parse(t) : '';
    },
    remove(key) {//删除
        localStorage.removeItem(key);
    }

};



let StorageSession = {
    set(key, value) {//增加
        debugger;
        
        sessionStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {//获取
        var t = sessionStorage.getItem(key);
        return t && t !== 'null' ? JSON.parse(t) : '';
    },
    remove(key) {//删除
        sessionStorage.removeItem(key);
    }

};

export default Storage;

export { StorageSession }


