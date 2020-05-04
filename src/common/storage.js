var Storage = {

    set(key, value) {//增加
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

export default Storage;
