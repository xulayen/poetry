const mysql = require('mysql');
const fs = require('fs');
var task = [];
const rp = require('request-promise');
const cnchar = require("cnchar");
const trad = require("cnchar-trad");
cnchar.use(trad); // use 在浏览器环境中非必须

const simplify = cnchar.convert.tradToSimple;


var connection = mysql.createConnection({
    host: '192.168.101.30',
    user: 'root',
    password: 'abc123.',
    database: 'poetry'
});

connection.connect();

/****
 * 唐诗导入
 */

function loadTang() {

    for (var i = 1, t = '0'; i < 50; i++) {

        if (i < 10) {
            t = '0' + i;
        } else {
            t = i;
        }
        var b = fs.readFileSync(`./src/data/tang${t}.js`);
        var res = simplify(b.toString());
        var str_json = res.replace('export', '').replace('default', '').replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");



        var data = eval(str_json);
        data.forEach(element => {
            element.content = element.content.join('');
            if (element.tags) {
                element.tags = element.tags.join('、')
            }
        });

        task.push(data);

    }


    let inc = 0, c = 0;
    task.forEach(element => {

        for (var i in element) {
            connection.query('INSERT INTO poetry SET ?', element[i], function (error, results, fields) {
                if (error) {
                    console.log(`插入成功第${c}条数据，失败${inc}条数据`);
                    inc++;
                } else {
                    c++;
                }

            });
        }
    });

}

//loadTang();








async function loadSong() {

    var filename = [0, 1000, 10000, 100000, 101000, 102000, 103000, 104000, 105000, 106000, 107000, 108000, 109000, 11000, 110000, 111000, 112000, 113000, 114000, 115000, 116000, 117000, 118000, 119000, 12000, 120000, 121000, 122000, 123000, 124000, 125000, 126000, 127000, 128000, 129000, 13000, 130000, 131000, 132000, 133000, 134000, 135000, 136000, 137000, 138000, 139000, 14000, 140000, 141000, 142000, 143000, 144000, 145000, 146000, 147000, 148000, 149000, 15000, 150000, 151000, 152000, 153000, 154000, 155000, 156000, 157000, 158000, 159000, 16000, 160000, 161000, 162000, 163000, 164000, 165000, 166000, 167000, 168000, 169000, 17000, 170000, 171000, 172000, 173000, 174000, 175000, 176000, 177000, 178000, 179000, 18000, 180000, 181000, 182000, 183000, 184000, 185000, 186000, 187000, 188000, 189000, 19000, 190000, 191000, 192000, 193000, 194000, 195000, 196000, 197000, 198000, 199000, 2000, 20000, 200000, 201000, 202000, 203000, 204000, 205000, 206000, 207000, 208000, 209000, 21000, 210000, 211000, 212000, 213000, 214000, 215000, 216000, 217000, 218000, 219000, 22000, 220000, 221000, 222000, 223000, 224000, 225000, 226000, 227000, 228000, 229000, 23000, 230000, 231000, 232000, 233000, 234000, 235000, 236000, 237000, 238000, 239000, 24000, 240000, 241000, 242000, 243000, 244000, 245000, 246000, 247000, 248000, 249000, 25000, 250000, 251000, 252000, 253000, 254000, 26000, 27000, 28000, 29000, 3000, 30000, 31000, 32000, 33000, 34000, 35000, 36000, 37000, 38000, 39000, 4000, 40000, 41000, 42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 5000, 50000, 51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000, 6000, 60000, 61000, 62000, 63000, 64000, 65000, 66000, 67000, 68000, 69000, 7000, 70000, 71000, 72000, 73000, 74000, 75000, 76000, 77000, 78000, 79000, 8000, 80000, 81000, 82000, 83000, 84000, 85000, 86000, 87000, 88000, 89000, 9000, 90000, 91000, 92000, 93000, 94000, 95000, 96000, 97000, 98000, 99000];




    /****
     * 宋词导入
     */
    for (var j = 0; j < filename.length; j++) {

        let f = filename[j];
        var url = `https://raw.githubusercontent.com/xulayen/chinese-poetry/master/json/poet.song.${f}.json`;



        var t = await setMethodWithUri({
            url: url,
            method: 'get'
        });

        


        let res = eval(simplify(t));

        console.log(`序号：${j}，${res && res.length}条！`);

        if (res===undefined || res.length === undefined) {
            --j;
            continue;
        }

        debugger;



        task.push(res);


        await Import('song');


        

    }




}







//console.log('执行中...');
loadSong();


async function Import(times) {
    debugger;
    if (task.length >= 254) {

        console.log('开始导入...');
        let inc = 0, c = 0;
        task.forEach(async res => {
            debugger;
            for (var i in res) {
                debugger;
                var current = res[i];
                if (current) {
                    try {

                        current.content = current.paragraphs ? current.paragraphs.join('') : '';
                        current.times = times;
                        if (current.tags) {
                            current.tags = current.tags.join('、')
                        }
                        delete current.paragraphs;

                    } catch (error) {

                    }

                    await connection.query('INSERT INTO poetry SET ?', current, function (error, results, fields) {
                        if (error) {
                            //console.log('失败！' + error.message);
                            inc++;
                            console.log(`插入第${c}条数据成功！${inc}条数据失败`);
                        } else {
                            //console.log('成功！');
                            c++;

                        }

                    });
                }

            }
        });


    } 
}








async function ErrorInterceptors(err) {
    return err;
}

async function setMethodWithUri(option) {


    var __option = {
        url: option.url,
        method: option.method,
    }

    const reqPromiseOpt = Object.assign({}, __option, {
        transform: function (body, res, resolveWithFullResponse) {
            return body;
        }
    });

    try {

        return rp(reqPromiseOpt).catch(ErrorInterceptors);


    } catch (e) {
        console.error(e);

    }


}











// connection.query('select count(1) from poetry', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0]);
// });






