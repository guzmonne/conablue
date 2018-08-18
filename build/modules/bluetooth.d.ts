/// <reference types="web-bluetooth" />
export declare class Bluetooth {
    device: BluetoothDevice;
    server: BluetoothRemoteGATTServer;
    connect(): Promise<void>;
    defaultInfo(): Promise<string>;
    batteryLevel(): Promise<string>;
}
