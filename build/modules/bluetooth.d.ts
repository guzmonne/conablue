/// <reference types="web-bluetooth" />
export interface IBluetoothCharacteristic {
    number: number;
    label: string;
}
export interface IBluetoothCharacteristicsMap {
    [key: string]: IBluetoothCharacteristic[];
}
interface RequestDeviceOptions {
    filters: any[];
}
export declare class Bluetooth {
    device: BluetoothDevice;
    server: BluetoothRemoteGATTServer;
    characteristics: IBluetoothCharacteristicsMap;
    connect(options?: RequestDeviceOptions): Promise<void>;
    defaultInfo(): Promise<string>;
    batteryLevel(): Promise<string>;
    userData(): Promise<string>;
    deviceInformation(): Promise<string>;
}
export {};
