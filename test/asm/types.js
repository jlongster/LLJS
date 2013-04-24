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
  function Point$Point(thisPtr, x, y) {
    thisPtr = thisPtr | 0;
    x = +x;
    y = +y;
    var $SP = 0;
    F8[(thisPtr) >> 3] = x;
    F8[((thisPtr) + 8 | 0) >> 3] = y;
  }
function bar(p) {
  p = p | 0;
  var _ = 0.0, c = 0, $SP = 0;
  U4[1] = (U4[1] | 0) - 16;
  $SP = U4[1] | 0;
  F8[(($SP)) >> 3] = 3.4;
  I4[((($SP)) + 8 | 0) >> 2] = 5;
  U4[((($SP)) + 12 | 0) >> 2] = p | 0;
  return +(_ = +(+(I4[((($SP)) + 8 | 0) >> 2] | 0 | 0) + +F8[(U4[((($SP)) + 12 | 0) >> 2] | 0) >> 3]), U4[1] = (U4[1] | 0) + 16 | 0, _);
  U4[1] = (U4[1] | 0) + 16;
  return 0.0;
}
function foo() {
  var _ = 0.0, p1 = 0, p2 = 0, p3 = 0, $SP = 0;
  U4[1] = (U4[1] | 0) - 48;
  $SP = U4[1] | 0;
  (Point$Point(($SP) | 0 | 0, 5.5, 6.6), F8[($SP) >> 3]);
  (Point$Point(($SP) + 16 | 0 | 0, 7.7, 8.8), F8[(($SP) + 16 | 0) >> 3]);
  (Point$Point(($SP) + 32 | 0 | 0, 9.9, 1.1), F8[(($SP) + 32 | 0) >> 3]);
  return +(_ = +(+F8[(($SP) + 16 | 0) >> 3] + +F8[((($SP) + 32 | 0) + 8 | 0) >> 3]), U4[1] = (U4[1] | 0) + 48 | 0, _);
  U4[1] = (U4[1] | 0) + 48;
  return 0.0;
}
function main() {
  var p1 = 0, p2 = 0, p3 = 0, p4 = 0, p5 = 0, p = 0, v = 0, $SP = 0;
  U4[1] = totalSize - 64;
  U4[0] = 4;
  U4[1] = (U4[1] | 0) - 88;
  $SP = U4[1] | 0;
  (Point$Point(($SP) | 0 | 0, 1.2, 3.4), F8[($SP) >> 3]);
  (Point$Point(($SP) + 16 | 0 | 0, 1.3, 3.5), F8[(($SP) + 16 | 0) >> 3]);
  (Point$Point(($SP) + 32 | 0 | 0, 1.4, 3.6), F8[(($SP) + 32 | 0) >> 3]);
  (Point$Point(($SP) + 48 | 0 | 0, 1.5, 3.7), F8[(($SP) + 48 | 0) >> 3]);
  (Point$Point(($SP) + 64 | 0 | 0, 1.6, 3.8), F8[(($SP) + 64 | 0) >> 3]);
  assertEqual(+F8[(($SP) + 64 | 0) >> 3], 1.6);
  assertEqual(+F8[((($SP) + 32 | 0) + 8 | 0) >> 3], 3.6);
  p = ($SP) + 16 | 0 | 0;
  assertEqual(+F8[(p) >> 3], 1.3);
  assertEqual(foo(), 8.8);
  assertEqual(bar(($SP) | 0), 6.2);
  assertEqual(+F8[(($SP) + 64 | 0) >> 3], 1.6);
  assertEqual(+F8[((($SP) + 32 | 0) + 8 | 0) >> 3], 3.6);
  I4[(($SP) + 80 | 0) >> 2] = 512;
  assertEqual(U1[(((($SP) + 80 | 0) | 0) + 0) >> 0] >>> 0, 0);
  assertEqual(U1[(((($SP) + 80 | 0) | 0) + 1) >> 0] >>> 0, 2);
  assertEqual(U1[(((($SP) + 80 | 0) | 0) + 2) >> 0] >>> 0, 0);
  assertEqual(U1[(((($SP) + 80 | 0) | 0) + 3) >> 0] >>> 0, 0);
  U4[1] = (U4[1] | 0) + 88;
  return 0.0;
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

