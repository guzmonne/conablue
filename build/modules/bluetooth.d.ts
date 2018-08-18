/// <reference types="web-bluetooth" />
export declare class Bluetooth {
    device: BluetoothDevice;
    server: BluetoothRemoteGATTServer;
    connect(options?: RequestDeviceOptions): Promise<void>;
    defaultInfo(): Promise<string>;
    batteryLevel(): Promise<string>;
    deviceInformation(): Promise<string>;
}
