import React from 'react';

function Food({name, n}) {
  return <h3>i like {name}, {n}</h3>;
}

function App() {
  return (
    <div>
      {foodilike.map(dish => (
        <Food name={dish.name} n={dish.num} />
      ))}
    </div>
  );
}

const foodilike = [ {name:"kimchi", num:1},
                    {name:"bibimbap", num:2}
];

export default App;
