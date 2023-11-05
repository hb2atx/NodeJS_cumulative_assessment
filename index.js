function timeToWords(time) {
    const hours = [
        'midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'noon', 'one'
    ];

    const minutes = [
        'oh', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
        'twenty', 'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six',
        'twenty seven', 'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three',
        'thirty four', 'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty',
        'forty one', 'forty two', 'forty three', 'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight',
        'forty nine', 'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six', 'fifty seven',
        'fifty eight', 'fifty nine'
    ];

    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour);
    const minuteInt = parseInt(minute);

    let period = 'am';
    let hourWord = hours[hourInt];

    if(hourInt >= 12) {
        period = 'pm';
        if(hourInt > 12) {
            hourWord = hours[hourInt - 12];
        }
    }

    let minuteWord = '';

    if (minuteInt === 0) {
      minuteWord = '';
    } else if (minuteInt <= 29) {
      if (minuteInt === 15) {
        minuteWord = 'quarter';
      } else if (minuteInt === 1) {
        minuteWord = `${minutes[minuteInt]} minute`;
      } else {
        minuteWord = `${minutes[minuteInt]} minutes`;
      }
    } else {
      if (minuteInt === 30) {
        minuteWord = 'half';
      } else if (minuteInt === 45) {
        minuteWord = 'quarter';
      } else {
        minuteWord = `${minutes[60 - minuteInt]} minutes`;
}
    }

    return `${hourWord} ${minuteWord} ${period}`}

    // TEST CASES //
    // console.log(timeToWords('00:00')); 

    module.exports = timeToWords;