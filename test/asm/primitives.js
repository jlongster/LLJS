(function() {

if(!Math.imul) {
    Math.imul = function(x, y) { return x * y; };
}

var MB = 1024 * 1024;
var SIZE = 256 * MB;
var STACK_SIZE = 2 * MB;
var HEAP_SIZE = SIZE - STACK_SIZE;
var buffer = new ArrayBuffer(SIZE);

if(typeof window !== 'undefined') {
    window.asmBuffer = buffer;
}

var asm = (function (global, env, buffer) {
    "use asm";

    var stackSize = env.STACK_SIZE|0;
    var heapSize = env.HEAP_SIZE|0;
    var totalSize = env.TOTAL_SIZE|0;

    var assertEqual = env.assertEqual;

    var U1 = new global.Uint8Array(buffer);
    var I1 = new global.Int8Array(buffer);
    var U2 = new global.Uint16Array(buffer);
    var I2 = new global.Int16Array(buffer);
    var U4 = new global.Uint32Array(buffer);
    var I4 = new global.Int32Array(buffer);
    var F4 = new global.Float32Array(buffer);
    var F8 = new global.Float64Array(buffer);

    var acos = global.Math.acos;
    var asin = global.Math.asin;
    var atan = global.Math.atan;
    var cos = global.Math.cos;
    var sin = global.Math.sin;
    var tan = global.Math.tan;
    var ceil = global.Math.ceil;
    var floor = global.Math.floor;
    var exp = global.Math.exp;
    var log = global.Math.log;
    var sqrt = global.Math.sqrt;
    var abs = global.Math.abs;
    var atan2 = global.Math.atan2;
    var pow = global.Math.pow;
    var imul = global.Math.imul;

var globalSP = 64;
function main() {
  var _ = 0, x = 0, y = 0, z = 0.0, w = 0.0, i = 0, $SP = 0;
  U4[1] = totalSize - 64;
  U4[0] = 4;
  assertEqual(1, 1);
  assertEqual(1, 1);
  assertEqual(2, 2);
  assertEqual(2, 2);
  assertEqual(4, 4);
  assertEqual(4, 4);
  assertEqual(4, 4);
  assertEqual(8, 8);
  assertEqual(-1 & 255, 255);
  assertEqual(-1, -1);
  assertEqual(-1 & 65535, 65535);
  assertEqual(-1, -1);
  assertEqual(-1 >>> 0, 4294967295);
  assertEqual(-1, -1);
  x = 8;
  y = 6;
  assertEqual((x | 0) + (y | 0) | 0, 14);
  assertEqual((x | 0) - (y | 0) | 0, 2);
  assertEqual((x | 0) / (y | 0) | 0, 1);
  assertEqual(imul(x, y), 48);
  assertEqual((x | 0) % (y | 0) | 0, 2);
  z = 5.1;
  w = +6.0;
  assertEqual(z + w, 11.1);
  assertEqual(z - w, -0.9);
  assertEqual(z / w, 0.85);
  assertEqual(z * w, 30.6);
  // mixing ints and doubles coerces everything to doubles
  assertEqual(z * +(x | 0), 40.8);
  // while loop
  x = 0;
  y = 1;
  while ((x | 0) < 10) {
    x = (x | 0) + 1 | 0;
    y = imul(y, 2);
  }
  assertEqual(y | 0, 1024);
  // for loop
  y = 1;
  // only works when declaring outside loop (for now)
  for (i = 0; (i | 0) < 10; _ = i, i = (i | 0) + 1 | 0, _) {
    y = imul(y, 2);
  }
  assertEqual(y | 0, 1024);
}
    function memcpy(dest, src, num) {
        dest = dest|0; src = src|0; num = num|0;
        var ret = 0;
        ret = dest|0;
        if ((dest&3) == (src&3)) {
            while (dest & 3) {
                if ((num|0) == 0) return ret|0;
                U1[(dest)]=U1[(src)];
                dest = (dest+1)|0;
                src = (src+1)|0;
                num = (num-1)|0;
            }
            while ((num|0) >= 4) {
                U4[((dest)>>2)]=U4[((src)>>2)];
                dest = (dest+4)|0;
                src = (src+4)|0;
                num = (num-4)|0;
            }
        }
        while ((num|0) > 0) {
            U1[(dest)]=U1[(src)];
            dest = (dest+1)|0;
            src = (src+1)|0;
            num = (num-1)|0;
        }
        return ret|0;
    }

    function memset(ptr, value, num) {
        ptr = ptr|0; value = value|0; num = num|0;
        var stop = 0, value4 = 0, stop4 = 0, unaligned = 0;
        stop = (ptr + num)|0;
        if ((num|0) >= 20) {
            // This is unaligned, but quite large, so work hard to get to aligned settings
            value = value & 0xff;
            unaligned = ptr & 3;
            value4 = value | (value << 8) | (value << 16) | (value << 24);
            stop4 = stop & ~3;
            if (unaligned) {
                unaligned = (ptr + 4 - unaligned)|0;
                while ((ptr|0) < (unaligned|0)) { // no need to check for stop, since we have large num
                    U1[(ptr)]=value;
                    ptr = (ptr+1)|0;
                }
            }
            while ((ptr|0) < (stop4|0)) {
                U4[((ptr)>>2)]=value4;
                ptr = (ptr+4)|0;
            }
        }
        while ((ptr|0) < (stop|0)) {
            U1[(ptr)]=value;
            ptr = (ptr+1)|0;
        }
    }

    return { main: main };

})({ Uint8Array: Uint8Array,
     Int8Array: Int8Array,
     Uint16Array: Uint16Array,
     Int16Array: Int16Array,
     Uint32Array: Uint32Array,
     Int32Array: Int32Array,
     Float32Array: Float32Array,
     Float64Array: Float64Array,
     Math: Math },
   { assertEqual: assertEqual,
     HEAP_SIZE: HEAP_SIZE,
     STACK_SIZE: STACK_SIZE,
     TOTAL_SIZE: SIZE },
   buffer);

function assertEqual(val1, val2) {
  var err = true;
  var msg;
  if(val1 | 0 !== val1) {
    if(Math.abs(val1 - val2) < .00000001) {
      err = false;
    }
    else {
      msg = 'eps';
    }
  }
  else if(val1 === val2) {
    err = false;
  }

  if(err) {
    throw new Error(val1 + ' does not equal ' + val2);
  }
}

function _print(/* arg1, arg2, ..., argN */) {
    var func = ((typeof console !== 'undefined' && console.log) || print);
    func.apply(null, arguments);
}

var _time;
function start() {
  _time = Date.now();
}

function end() {
  return Date.now() - _time;
}

asm.main();
})();

