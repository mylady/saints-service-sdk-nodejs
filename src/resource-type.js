export const ResourceTypeName = {
    alarm: 'alarm',
    alarmHost: 'alarmhost',
    call: 'call',
    callHost: 'callhost',
    camera: 'camera',
    commonDevice: 'commondevice',
    commonVideoDevice: 'commonvideodevice',
    decoderChannel: 'decoderchannel',
    dm: 'dm',
    doorPoint: 'doorpoint',
    door: 'door',
    envMonitor: 'envmonitor',
    envMonitorHost: 'envmonitorhost',
    led: 'led',
    matrix: 'matrix',
    matrixChannel: 'matrixchannel',
    powergrid: 'powergrid',
    powergridHost: 'powergridhost',
    relay: 'relay',
    relayHost: 'relayhost',
    rfidTag: 'rfidtag',
    tvwall: 'tvwall',
    tvwallChannel: 'tvwallchannel',
    ups: 'ups',
    videoAnalyse: 'videoanalyse',
    videoAnalyseChannel: 'videoanalysechannel',
    vm: 'vm',
    vmGBServer: 'vmgbserver'
};

export const getResourceTypeName = (code) => {
    let n = '';
    switch (code) {
        case 0:
            n = ResourceTypeName.camera;
            break;
        case 1:
            n = ResourceTypeName.doorPoint;
            break;
        case 2:
            n = ResourceTypeName.door;
            break;
        case 3:
            n = ResourceTypeName.alarm;
            break;
        case 4:
            n = ResourceTypeName.call;
            break;
        case 5:
            n = ResourceTypeName.callHost;
            break;
        case 6:
            n = ResourceTypeName.powergrid;
            break;
        case 7:
            n = ResourceTypeName.envMonitor;
            break;
        case 8:
            n = ResourceTypeName.rfidTag;
            break;
        case 9:
            n = ResourceTypeName.relay;
            break;
        case 10:
            n = ResourceTypeName.led;
            break;
        case 128:
            n = ResourceTypeName.decoderChannel;
            break;
        case 129:
            n = ResourceTypeName.matrixChannel;
            break;
        case 130:
            n = ResourceTypeName.tvwallChannel;
            break;
        case 131:
            n = ResourceTypeName.videoAnalyseChannel;
            break;
        case 256:
            n = ResourceTypeName.vm;
            break;
        case 257:
            n = ResourceTypeName.dm;
            break;
        case 258:
            n = ResourceTypeName.matrix;
            break;
        case 259:
            n = ResourceTypeName.tvwall
            break;
        case 260:
            n = ResourceTypeName.alarmHost;
            break;
        // case 261: door controller has no table
        //     n = ResourceTypeName.door;
        //     break;
        case 262:
            n = ResourceTypeName.powergridHost;
            break;
        case 263:
            n = ResourceTypeName.envMonitorHost;
            break;
        case 264:
            n = ResourceTypeName.ups;
            break;
        case 265:
            n = ResourceTypeName.videoAnalyse;
            break;
        case 266:
            n = ResourceTypeName.relayHost;
            break;
        case 267:
            n = ResourceTypeName.vmGBServer;
            break;
    }
    return n;
};