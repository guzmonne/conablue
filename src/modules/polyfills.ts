DataView.prototype.getString = function(
  offset: number,
  length: number
): string {
  var self = this,
    bitArray = [],
    firstByte,
    highSurrogate,
    lowSurrogate,
    codePoint;
  length = length || self.byteLength;
  while (length > 0) {
    firstByte = self.getUint8(offset);
    if (self.getUint8(offset) <= 127) {
      bitArray.push(self.getUint8(offset++));
      length--;
    } else if (self.getUint8(offset) >= 128 && self.getUint8(offset) <= 223) {
      bitArray.push(
        ((self.getUint8(offset++) & 0x1f) << 6) |
          (self.getUint8(offset++) & 0x3f)
      );
      length -= 2;
    } else if (self.getUint8(offset) >= 224 && self.getUint8(offset) <= 239) {
      bitArray.push(
        ((self.getUint8(offset++) & 0x1f) << 12) |
          (((self.getUint8(offset++) & 0x3f) << 6) |
            (self.getUint8(offset++) & 0x3f))
      );
      length -= 3;
    } else {
      codePoint =
        ((self.getUint8(offset++) & 0x07) << 18) |
        (((self.getUint8(offset++) & 0x3f) << 12) |
          (((self.getUint8(offset++) & 0x3f) << 6) |
            (self.getUint8(offset++) & 0x3f)));
      codePoint -= 0x10000;
      highSurrogate = (codePoint >> 10) + 0xd800;
      lowSurrogate = (codePoint % 0x400) + 0xdc00;
      bitArray.push(highSurrogate, lowSurrogate);
      length -= 4;
    }
  }
  return String.fromCharCode.apply(null, bitArray);
};
