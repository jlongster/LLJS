(function() {

if(!Math.imul) {
    Math.imul = function(x, y) { return x * y; };
}

var MB = 1024 * 1024;
var SIZE = 256 * MB;
var STACK_SIZE = 2 * MB;
var HEAP_SIZE = SIZE - STACK_SIZE;
var buffer = window.asmBuffer = new ArrayBuffer(SIZE);

var asm = (function (global, env, buffer) {
    "use asm";

    var stackSize = env.STACK_SIZE|0;
    var heapSize = env.HEAP_SIZE|0;
    var totalSize = env.TOTAL_SIZE|0;
    var assertEqual = env.assertEqual;
    var print = env.print;
    var start = env.start;
    var end = env.end;

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

    var base = 0;
    var freep = 0;
    var nUnitsMin = 1024;

var globalSP = 64;
var count = 0;
  function Vector3$Vector3(thisPtr, x, y, z) {
    thisPtr = thisPtr | 0;
    x = x | 0;
    y = y | 0;
    z = z | 0;
    var $SP = 0;
    I4[(thisPtr) >> 2] = x;
    I4[((thisPtr) + 4 | 0) >> 2] = y;
    I4[((thisPtr) + 8 | 0) >> 2] = z;
    count = (count | 0) + 1 | 0;
    I4[((thisPtr) + 12 | 0) >> 2] = count;
    return thisPtr | 0;
  }
  function Vector3$add(thisPtr, vector) {
    thisPtr = thisPtr | 0;
    vector = vector | 0;
    var $SP = 0;
    I4[(thisPtr) >> 2] = (I4[(thisPtr) >> 2] | 0) + (I4[(vector) >> 2] | 0 | 0) | 0;
    I4[((thisPtr) + 4 | 0) >> 2] = (I4[((thisPtr) + 4 | 0) >> 2] | 0) + (I4[((vector) + 4 | 0) >> 2] | 0 | 0) | 0;
    I4[((thisPtr) + 8 | 0) >> 2] = (I4[((thisPtr) + 8 | 0) >> 2] | 0) + (I4[((vector) + 8 | 0) >> 2] | 0 | 0) | 0;
    return thisPtr | 0;
  }
  function Vector3$sub(thisPtr, vector) {
    thisPtr = thisPtr | 0;
    vector = vector | 0;
    var $SP = 0;
    I4[(thisPtr) >> 2] = (I4[(thisPtr) >> 2] | 0 | 0) - (I4[(vector) >> 2] | 0 | 0) | 0;
    I4[((thisPtr) + 4 | 0) >> 2] = (I4[((thisPtr) + 4 | 0) >> 2] | 0 | 0) - (I4[((vector) + 4 | 0) >> 2] | 0 | 0) | 0;
    I4[((thisPtr) + 8 | 0) >> 2] = (I4[((thisPtr) + 8 | 0) >> 2] | 0 | 0) - (I4[((vector) + 8 | 0) >> 2] | 0 | 0) | 0;
    return thisPtr | 0;
  }
  function Vector3$clone(thisPtr) {
    thisPtr = thisPtr | 0;
    var _ = 0, ret = 0, $SP = 0;
    ret = (Vector3$Vector3((_ = malloc(16) | 0) | 0, 0, 0, 0), _) | 0;
    I4[(ret) >> 2] = I4[(thisPtr) >> 2] | 0;
    I4[((ret) + 4 | 0) >> 2] = I4[((thisPtr) + 4 | 0) >> 2] | 0;
    I4[((ret) + 8 | 0) >> 2] = I4[((thisPtr) + 8 | 0) >> 2] | 0;
    return ret | 0;
  }
  function Vector3$copy(thisPtr, vector) {
    thisPtr = thisPtr | 0;
    vector = vector | 0;
    var $SP = 0;
    I4[(thisPtr) >> 2] = I4[(vector) >> 2] | 0;
    I4[((thisPtr) + 4 | 0) >> 2] = I4[((vector) + 4 | 0) >> 2] | 0;
    I4[((thisPtr) + 8 | 0) >> 2] = I4[((vector) + 8 | 0) >> 2] | 0;
    return thisPtr | 0;
  }
function main() {
  var _ = 0, _$1 = 0, _$2 = 0, _$3 = 0, a = 0, b = 0, c = 0, d = 0, e = 0, $SP = 0;
  U4[1] = totalSize - 64;
  U4[0] = 4;
  console.log('// ------------------------------------------- //');
  console.log('// ** B E G I N   M A I N');
  console.log('// ------------------------------------------- //');
  a = (Vector3$Vector3((_ = malloc(16) | 0) | 0, 1, 0, 4), _) | 0;
  b = (Vector3$Vector3((_$1 = malloc(16) | 0) | 0, 0, 2, 4), _$1) | 0;
  c = (Vector3$Vector3((_$2 = malloc(16) | 0) | 0, 20, 5, 3), _$2) | 0;
  d = (Vector3$Vector3((_$3 = malloc(16) | 0) | 0, 10, 6, 5), _$3) | 0;
  console.log('trying a + b :  ');
  Vector3$add(a | 0, b | 0);
  console.log('\t\texpected: 1 2 8');
  console.log('\t\tactual:   ' + (I4[(a) >> 2] | 0) + ' ' + (I4[((a) + 4 | 0) >> 2] | 0) + ' ' + (I4[((a) + 8 | 0) >> 2] | 0));
  console.log('// ------------------------------------------- //');
  console.log('trying b - d :  ');
  Vector3$sub(b | 0, d | 0);
  console.log('\t\texpected: -10 -4 -1');
  console.log('\t\tactual:   ' + (I4[(b) >> 2] | 0) + ' ' + (I4[((b) + 4 | 0) >> 2] | 0) + ' ' + (I4[((b) + 8 | 0) >> 2] | 0));
  console.log('// ------------------------------------------- //');
  console.log('trying d - c :  ');
  Vector3$sub(d | 0, c | 0);
  console.log('\t\texpected: -10 1 2');
  console.log('\t\tactual:   ' + (I4[(d) >> 2] | 0) + ' ' + (I4[((d) + 4 | 0) >> 2] | 0) + ' ' + (I4[((d) + 8 | 0) >> 2] | 0));
  console.log('// ------------------------------------------- //');
  console.log('trying clone c :  ');
  e = Vector3$clone(c | 0) | 0;
  console.log('\t\texpected: 20 5 3');
  console.log('\t\tactual:   ' + (I4[(e) >> 2] | 0) + ' ' + (I4[((e) + 4 | 0) >> 2] | 0) + ' ' + (I4[((e) + 8 | 0) >> 2] | 0));
  console.log('// ------------------------------------------- //');
  console.log('trying copy d :  ');
  Vector3$copy(e | 0, d | 0);
  console.log('\t\texpected: -10 1 2');
  console.log('\t\tactual:   ' + (I4[(e) >> 2] | 0) + ' ' + (I4[((e) + 4 | 0) >> 2] | 0) + ' ' + (I4[((e) + 8 | 0) >> 2] | 0));
  console.log('// ------------------------------------------- //');
  console.log('trying e + a  ');
  Vector3$add(e | 0, a | 0);
  console.log('\t\texpected: -9 3 10');
  console.log('\t\tactual:   ' + (I4[(e) >> 2] | 0) + ' ' + (I4[((e) + 4 | 0) >> 2] | 0) + ' ' + (I4[((e) + 8 | 0) >> 2] | 0));
  console.log('// ------------------------------------------- //');
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

    
    function reset() {
      var $SP = 0;
      U4[((($SP) + 32 | 0) + 0 * 4) >> 2] = 4;
      U4[((($SP) + 32 | 0) + 1 * 4) >> 2] = totalSize >>> 0;
      base = 2 | 0;
      freep = 0;
    }

    function sbrk(nBytes) {
      nBytes = nBytes | 0;
      var nWords = 0, j = 0, address = 0, $SP = 0;
      nWords = (nBytes | 0 | 0) / 4 | 0 | 0;
      j = (U4[((($SP) + 32 | 0) + 0 * 4) >> 2] >>> 0 >>> 0) + (nWords | 0 | 0) | 0 | 0;
      if ((j | 0) > (heapSize | 0 | 0)) {
        //print(int("anull sbrk"));
        return 0;
      }
      address = U4[((($SP) + 32 | 0) + 0 * 4) >> 2] | 0;
      U4[(($SP) + 32 + 0 * 4) >> 2] = ((U4[(($SP) + 32 + 0 * 4) >> 2] >>> 0) + (nWords | 0) | 0) >>> 0;
      //print("address = " + address);
      return address | 0;
    }
    function morecore(nUnits) {
      nUnits = nUnits | 0;
      var buffer = 0, header = 0, $SP = 0;
      if (nUnits >>> 0 < nUnitsMin >>> 0) {
        nUnits = nUnitsMin;
      }
      buffer = sbrk(imul(nUnits | 0, 8)) | 0;
      if ((~~buffer | 0) == 0) {
        return 0;
      }
      header = buffer | 0 | 0;
      U4[((header) + 4 | 0) >> 2] = nUnits;
      free(header + 1 * 8 | 0 | 0);
      return freep | 0;
    }
    function malloc(nBytes) {
      nBytes = nBytes | 0;
      var _ = 0, p = 0, prevp = 0, nUnits = 0, i = 0, $SP = 0;
      nUnits = (((((nBytes | 0 | 0) + 8 | 0 | 0 | 0 | 0) - 1 | 0 | 0 | 0 | 0) / 8 | 0 | 0 | 0 | 0) + 1 | 0 | 0) >>> 0;
      if ((prevp = freep | 0) == 0) {
        U4[(base) >> 2] = (freep = (prevp = base | 0) | 0) | 0;
        U4[((base) + 4 | 0) >> 2] = 0;
      }
      i = 0;
      for (p = U4[(prevp) >> 2] | 0 | 0; (i | 0) < 10; prevp = p | 0, p = U4[(p) >> 2] | 0 | 0, (_ = i, i = (i | 0) + 1 | 0, _)) {
        //print("hue with psize = " + p->size + " and nUnits = " + nUnits );
        if ((U4[((p) + 4 | 0) >> 2] | 0) >>> 0 >= nUnits >>> 0) {
          if ((U4[((p) + 4 | 0) >> 2] | 0) >>> 0 == nUnits >>> 0) {
            U4[(prevp) >> 2] = U4[(p) >> 2] | 0;
          } else {
            U4[((p) + 4 | 0) >> 2] = ((U4[((p) + 4 | 0) >> 2] >>> 0) - (nUnits >>> 0) | 0) >>> 0;
            //console.log(" p pre-resize = " + p + " as uint " + uint(p) + " as double " + double(p) )
            //p + (U4[((p) + 4 | 0) >> 2] | 0) * 8
            p = (~~p | 0) + (imul(U4[((p) + 4 | 0) >> 2] | 0, 8) | 0) | 0 | 0;
            U4[((p) + 4 | 0) >> 2] = nUnits;
          }
          freep = prevp | 0;
          //print(" about to return p = " + p);
          //print("     returning " + (byte*)(p + 1));
          return p + 1 * 8 | 0 | 0;
        }
        if (~~p >>> 0 == ~~freep >>> 0) {
          //print("grabbing morecore");
          if ((p = morecore(nUnits) | 0) == 0) {
            return 0;
          }
        }
      }
      return 0;
    }
    function free(ap) {
      ap = ap | 0;
      var bp = 0, p = 0, comp1 = 0, comp2 = 0, i = 0, $SP = 0;
      bp = (ap | 0) - 1 * 8 | 0 | 0;
      i = 0;
      for (p = freep | 0; (i | 0) == 0; p = U4[(p) >> 2] | 0 | 0) {
        if (~~bp >>> 0 > ~~p >>> 0) {
          if (~~bp >>> 0 < ~~(U4[(p) >> 2] | 0) >>> 0) {
            break;
          }
        }
        //!(bp > p && bp < p->next)
        if (~~p >>> 0 >= ~~(U4[(p) >> 2] | 0) >>> 0) {
          if (~~bp >>> 0 > ~~p >>> 0) {
            break;
          } else if (~~bp >>> 0 < ~~(U4[(p) >> 2] | 0) >>> 0) {
            break;
          }
        }
      }
      comp1 = (~~bp | 0) + (imul(U4[((bp) + 4 | 0) >> 2] | 0, 8) | 0) | 0 | 0;
      comp2 = (~~p | 0) + (imul(U4[((p) + 4 | 0) >> 2] | 0, 8) | 0) | 0 | 0;
      if (~~comp1 >>> 0 == ~~(U4[(p) >> 2] | 0) >>> 0) {
        U4[((bp) + 4 | 0) >> 2] = ((U4[((bp) + 4 | 0) >> 2] >>> 0) + ((U4[((U4[(p) >> 2] | 0) + 4 | 0) >> 2] | 0) >>> 0) | 0) >>> 0;
        U4[(bp) >> 2] = U4[(U4[(p) >> 2] | 0) >> 2] | 0;
      } else {
        U4[(bp) >> 2] = U4[(p) >> 2] | 0;
      }
      if (~~comp2 >>> 0 == ~~bp >>> 0) {
        U4[((p) + 4 | 0) >> 2] = ((U4[((p) + 4 | 0) >> 2] >>> 0) + ((U4[((bp) + 4 | 0) >> 2] | 0) >>> 0) | 0) >>> 0;
        U4[(p) >> 2] = U4[(bp) >> 2] | 0;
      } else {
        U4[(p) >> 2] = bp | 0;
      }
      freep = p | 0;
    }

    return { main: main,
 reset:  reset };

})({ Uint8Array: Uint8Array,
     Int8Array: Int8Array,
     Uint16Array: Uint16Array,
     Int16Array: Int16Array,
     Uint32Array: Uint32Array,
     Int32Array: Int32Array,
     Float32Array: Float32Array,
     Float64Array: Float64Array,
     Math: Math },
   { HEAP_SIZE: HEAP_SIZE,
     STACK_SIZE: STACK_SIZE,
     TOTAL_SIZE: SIZE,
     assertEqual: assertEqual,
     print: _print,
     start: start,
     end: end },
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

function _print(arg/* arg1, arg2, ..., argN */) {
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

asm.reset(); asm.main();
})();


