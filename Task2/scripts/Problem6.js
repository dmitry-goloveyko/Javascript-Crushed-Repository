﻿var Summarize = function (previousValue, currentValue, index) {
    var sum = previousValue + currentValue;
    return sum;
}

Array.prototype.filter = function (callback, initialValue) {
    if (this.length === 0) {
        return initialValue;
    }
    else {
        if (this[0] < 10)
            this.shift();
        return callback(this[0], this.slice(1).filter(callback, initialValue));
    }
}

var execute6 = function () {
    var data = document.getElementById('Problem6_Output').value.split(' ');
    for (var i = 0; i < data.length; i++) {
        data[i] = +data[i];
    }

    var result = data.filter(Summarize, 0);
    document.getElementById('Problem6_Output').value = result;
}