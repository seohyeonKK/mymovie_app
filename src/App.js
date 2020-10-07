import React from "react";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg",
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image: "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304",
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2017/04/13/abcf293fb7d0d73d61e274127ced7b931.jpg",
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://th3.tmon.kr/thumbs/image/6ea/082/d57/2906e06a0_700x700_95_FIT.jpg",
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
  },
];

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

// (dish) => (
//   <Food name={dish.name} />
// )

//Same Thing

// function (dish) {
//   return <Food name={dish.name} />;
// }

export default App;
