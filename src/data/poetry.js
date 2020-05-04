import { Storage, StorageSession } from '../common';
// import tang01 from './tang01';
// import tang02 from './tang02';
// import tang03 from './tang03';
// import tang04 from './tang04';
// import tang05 from './tang05';
// import tang06 from './tang06';
// import tang07 from './tang07';
// import tang08 from './tang08';
// import tang09 from './tang09';
// import tang10 from './tang10';
// import tang11 from './tang11';
// import tang12 from './tang12';
// import tang13 from './tang13';
// import tang14 from './tang14';
// import tang15 from './tang15';
// import tang16 from './tang16';
// import tang17 from './tang17';
// import tang18 from './tang18';
// import tang19 from './tang19';
// import tang20 from './tang20';
// import tang21 from './tang21';
// import tang22 from './tang22';
// import tang23 from './tang23';
// import tang24 from './tang24';

// import tang25 from './tang25';
// import tang26 from './tang26';
// import tang27 from './tang27';
// import tang28 from './tang28';
// import tang29 from './tang29';
// import tang30 from './tang30';
// import tang31 from './tang31';
// import tang32 from './tang32';
// import tang33 from './tang33';
// import tang34 from './tang34';
// import tang35 from './tang35';
// import tang36 from './tang36';
// import tang37 from './tang37';
// import tang38 from './tang38';
// import tang39 from './tang39';
// import tang40 from './tang40';
// import tang41 from './tang41';
// import tang42 from './tang42';
// import tang43 from './tang43';
// import tang44 from './tang44';
// import tang45 from './tang45';
// import tang46 from './tang46';
// import tang47 from './tang47';
// import tang48 from './tang48';
// import tang49 from './tang49';

const tangKey1 = 'tang_poet1';
const tangKey2 = 'tang_poet2';
const tangKey3 = 'tang_poet3';
const tangKey4 = 'tang_poet4';
const tangKey5 = 'tang_poet5';
const tangKey6 = 'tang_poet6';
export default async function Store() {
    let tangPoet_storage1 = Storage.get(tangKey1),
        tangPoet_storage2 = Storage.get(tangKey2),
        tangPoet_storage3 = Storage.get(tangKey3),
        tangPoet_storage4 = StorageSession.get(tangKey4),
        tangPoet_storage5 = StorageSession.get(tangKey5),
        tangPoet_storage6 = StorageSession.get(tangKey6);
    if (!tangPoet_storage1 || !tangPoet_storage4) {
        let a =(await import('./tang01')).default;

        let tangPoet1 = [
            ...(await import('./tang01')).default,
            ...(await import('./tang02')).default,
            ...(await import('./tang03')).default,
            ...(await import('./tang04')).default,
            ...(await import('./tang05')).default,
            ...(await import('./tang06')).default,
            ...(await import('./tang07')).default,
            ...(await import('./tang08')).default,
        ],
            tangPoet2 =
                [
                    ...(await import('./tang09')).default,
                    ...(await import('./tang10')).default,
                    ...(await import('./tang11')).default,
                    ...(await import('./tang12')).default,
                    ...(await import('./tang13')).default,
                    ...(await import('./tang14')).default,
                    ...(await import('./tang15')).default,
                    ...(await import('./tang16')).default,
                    ...(await import('./tang17')).default,
                ],
            tangPoet3 = [
                ...(await import('./tang18')).default,
                ...(await import('./tang19')).default,
                ...(await import('./tang20')).default,
                ...(await import('./tang21')).default,
                ...(await import('./tang22')).default,
                ...(await import('./tang23')).default,
                ...(await import('./tang24')).default,
                ...(await import('./tang25')).default,
            ],
            tangPoet4 = [
                ...(await import('./tang26')).default,
                ...(await import('./tang27')).default,
                ...(await import('./tang28')).default,
                ...(await import('./tang29')).default,
                ...(await import('./tang30')).default,
                ...(await import('./tang31')).default,
                ...(await import('./tang32')).default,
                ...(await import('./tang33')).default,
            ],
            tangPoet5 = [
                ...(await import('./tang34')).default,
                ...(await import('./tang35')).default,
                ...(await import('./tang36')).default,
                ...(await import('./tang37')).default,
                ...(await import('./tang38')).default,
                ...(await import('./tang39')).default,
                ...(await import('./tang40')).default,
                ...(await import('./tang41')).default,
            ], tangPoet6 = [
                ...(await import('./tang42')).default,
                ...(await import('./tang43')).default,
                ...(await import('./tang44')).default,
                ...(await import('./tang45')).default,
                ...(await import('./tang46')).default,
                ...(await import('./tang47')).default,
                ...(await import('./tang48')).default,
                ...(await import('./tang49')).default,
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

