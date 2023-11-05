const timeToWords = require('./timeToWords');

describe('timeToWords function', () => {
  it('should convert 00:00 to "midnight"', () => {
    expect(timeToWords('00:00')).toBe('midnight');
  });

  it('should convert 00:12 to "twelve twelve am"', () => {
    expect(timeToWords('00:12')).toBe('twelve twelve am');
  });

  it('should convert 01:00 to "one o’clock am"', () => {
    expect(timeToWords('01:00')).toBe('one o’clock am');
  });

  it('should convert 06:01 to "six oh one am"', () => {
    expect(timeToWords('06:01')).toBe('six oh one am');
  });

  it('should convert 06:10 to "six ten am"', () => {
    expect(timeToWords('06:10')).toBe('six ten am');
  });

  it('should convert 12:00 to "noon"', () => {
    expect(timeToWords('12:00')).toBe('noon');
  });

  it('should convert 12:09 to "twelve oh nine pm"', () => {
    expect(timeToWords('12:09')).toBe('twelve oh nine pm');
  });

  it('should convert 23:23 to "eleven twenty three pm"', () => {
    expect(timeToWords('23:23')).toBe('eleven twenty three pm');
  });
});

