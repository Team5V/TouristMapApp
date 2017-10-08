const htmlTemplateFactoryModule = () => {
  const routeBase = `<h1 id="title"></h1>
<image id="map"></image>
<h4 id="difficulty"></h4>
<h4 id="ratting"></h4>
<h4 id="length"></h4>
<h4 id="time"></h4>
<h4 id="description"></h4>`;

const groupBase = `<h1 id="routes"></h1>
<h4 id="participants"></h4>
<h4 id="ratting"></h4>
<input type="text" id="datePicker" placeholder="Click to pick date" />
<h4 id="weather"></h4>
<h4 id="location"></h4>`;

  const routesPage = () => {
    const main = `${routeBase}
<button class="rate">Оцени</button>
<button class="show-groups">Виж групите</button>`;
    const side = `<h3>Родопи</h3>
<div><ul id="rodopi"></ul></div>
<h3>Рила</h3>
<div><ul id="rila"></ul></div>
<h3>Пирин</h3>
<div><ul id="pirin"></ul></div>
<h3>СтараПланина</h3>
<div><ul id="stara"></ul></div>
<h3>Странджа</h3>
<div><ul id="strandja"></ul></div>`;
    return {
      template: { main, side }
    };
  };

  const groupsPage = () => {
    const main = `${groupBase}
<button class="rate">Запиши се</button>
<button class="show-groups">Създай група</button>`;
    const side = ``; //tuka pak li shte sa marshrutite
    return {
      template: { main, side }
    };
  };

  const aboutPage = () => {
    const main = `
<section id="aboutIntro" class="clear">
<h2>За нас</h2>
<img></img>
<p></p>
<p></p>
</section>
<section id="team">
<h2>Нашият отбор</h2>
  <ul>
    <li class="teamMember">
      <img></img>
          <p></p>
          <p></p>
          <p></p>
    </li>
  </ul>
</h2>
`;
    const side = ``;
    return {
      template: { main, side }
    };
  };

  return {
    routesPage,
    groupsPage,
    aboutPage
  };
};
