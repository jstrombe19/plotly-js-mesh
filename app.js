const a = [];
const b = [];
const c = [];
const myDiv = document.querySelector('#myDiv');

// Generating random data
for(let i = 0; i < 50; i++) {
  let a_ = Math.random();
  a.push(a_);

  let b_ = Math.random();
  b.push(b_);

  let c_ = Math.random();
  c.push(c_);
}

// Ploting the data
let data=[
  {
    type: 'mesh3d',
    x: a,
    y: b,
    z: c,
    opacity: 0.8,
    intensity: [0, 0.33, 0.66, 1],
    colorscale: [
      [0, 'rgb(255,0,0)'],
      [0.5, 'rgb(0, 255, 0'],
      [1, 'rgb(0, 0, 255']
    ],
  }
];
Plotly.plot(myDiv, data);
