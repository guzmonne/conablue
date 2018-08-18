export class Bluetooth {
  device: BluetoothDevice;
  server: BluetoothRemoteGATTServer;

  async connect(
    options: RequestDeviceOptions = {
      filters: [{ namePrefix: 'BW' }]
    }
  ) {
    this.device = await window.navigator.bluetooth.requestDevice(options);

    this.server = await this.device.gatt.connect();
  }

  async defaultInfo(): Promise<string> {
    await this.connect();

    return [
      `> Name: ${this.device.name}`,
      `> Id: ${this.device.id}`,
      `> Connected: ${this.device.gatt.connected}`
    ].join('\n');
  }

  async batteryLevel(): Promise<string> {
    await this.connect();

    var service = await this.server.getPrimaryService(0x0180f);
    var characteristic = await service.getCharacteristic(0x2a19);
    var value = await characteristic.readValue();
    return `> Battery level: ${value.getUint8(0)}%`;
  }

  async deviceInformation(): Promise<string> {
    await this.connect();

    var service = await this.server.getPrimaryService(0x0180a);
    var characteristic = await service.getCharacteristic(0x2a29);
    var value = await characteristic.readValue();

    return `> Manufacturer name: ${value.getString(0, value.byteLength)}`;
  }
}
