import { Storage, StorageSession } from '../common';
import tang01 from './tang01';
import tang02 from './tang02';
import tang03 from './tang03';
import tang04 from './tang04';
import tang05 from './tang05';
import tang06 from './tang06';
import tang07 from './tang07';
import tang08 from './tang08';
import tang09 from './tang09';
import tang10 from './tang10';
import tang11 from './tang11';
import tang12 from './tang12';
import tang13 from './tang13';
import tang14 from './tang14';
import tang15 from './tang15';
import tang16 from './tang16';
import tang17 from './tang17';
import tang18 from './tang18';
import tang19 from './tang19';
import tang20 from './tang20';
import tang21 from './tang21';
import tang22 from './tang22';
import tang23 from './tang23';
import tang24 from './tang24';

import tang25 from './tang25';
import tang26 from './tang26';
import tang27 from './tang27';
import tang28 from './tang28';
import tang29 from './tang29';
import tang30 from './tang30';
import tang31 from './tang31';
import tang32 from './tang32';
import tang33 from './tang33';
import tang34 from './tang34';
import tang35 from './tang35';
import tang36 from './tang36';
import tang37 from './tang37';
import tang38 from './tang38';
import tang39 from './tang39';
import tang40 from './tang40';
import tang41 from './tang41';
import tang42 from './tang42';
import tang43 from './tang43';
import tang44 from './tang44';
import tang45 from './tang45';
import tang46 from './tang46';
import tang47 from './tang47';
import tang48 from './tang48';
import tang49 from './tang49';
const tangKey1 = 'tang_poet1';
const tangKey2 = 'tang_poet2';
const tangKey3 = 'tang_poet3';
const tangKey4 = 'tang_poet4';
const tangKey5 = 'tang_poet5';
const tangKey6 = 'tang_poet6';
export default function Store() {
    let tangPoet_storage1 = Storage.get(tangKey1),
        tangPoet_storage2 = Storage.get(tangKey2),
        tangPoet_storage3 = Storage.get(tangKey3),
        tangPoet_storage4 = StorageSession.get(tangKey4),
        tangPoet_storage5 = StorageSession.get(tangKey5),
        tangPoet_storage6 = StorageSession.get(tangKey6);
    if (!tangPoet_storage1 || !tangPoet_storage2 || !tangPoet_storage3 || !tangPoet_storage4 || !tangPoet_storage5 || !tangPoet_storage6) {
        let tangPoet1 = [
            ...tang01,
            ...tang02,
            ...tang03,
            ...tang04,
            ...tang05,
            ...tang06,
            ...tang07,
            ...tang08,
        ],
            tangPoet2 =
                [
                    ...tang09,
                    ...tang10,
                    ...tang11,
                    ...tang12,
                    ...tang13,
                    ...tang14,
                    ...tang15,
                    ...tang16,
                    ...tang17
                ],
            tangPoet3 = [
                ...tang18,
                ...tang19,
                ...tang20,
                ...tang21,
                ...tang22,
                ...tang23,
                ...tang24,
                ...tang25
            ],
            tangPoet4 = [
                ...tang26,
                ...tang27,
                ...tang28,
                ...tang29,
                ...tang30,
                ...tang31,
                ...tang32,
                ...tang33
            ],
            tangPoet5 = [
                ...tang34,
                ...tang35,
                ...tang36,
                ...tang37,
                ...tang38,
                ...tang39,
                ...tang40,
                ...tang41
            ], tangPoet6 = [
                ...tang42,
                ...tang43,
                ...tang44,
                ...tang45,
                ...tang46,
                ...tang47,
                ...tang48,
                ...tang49
            ];
        Storage.set(tangKey1, tangPoet1);
        Storage.set(tangKey2, tangPoet2);
        Storage.set(tangKey3, tangPoet3);
        StorageSession.set(tangKey4, tangPoet4);
        StorageSession.set(tangKey5, tangPoet5);
        StorageSession.set(tangKey6, tangPoet6);
        return [
            ...tangPoet1,
            ...tangPoet2,
            ...tangPoet3,
            ...tangPoet4,
            ...tangPoet5,
            ...tangPoet6
        ];
    } else {
        return [
            ...tangPoet_storage1,
            ...tangPoet_storage2,
            ...tangPoet_storage3,
            ...tangPoet_storage4,
            ...tangPoet_storage5,
            ...tangPoet_storage6
        ];
    }
};

