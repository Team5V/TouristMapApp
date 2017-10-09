const htmlTemplateFactoryModule = () => {
  const routeBase = `<h1 id="name">име</h1>
<image id="map">карта</image>
<h4 id="difficulty">трудност</h4>
<h4 id="ratting">рейтинг</h4>
<h4 id="length">дължина</h4>
<h4 id="time">време</h4>
<h4 id="description">описание</h4>`;

  const groupBase = `<h1 id="routes"></h1>
<h4 id="participants"></h4>
<h4 id="ratting"></h4>
<input type="text" id="datePicker" placeholder="Click to pick date" />
<h4 id="weather"></h4>
<h4 id="location"></h4>`;

  let main = "";
  let side = "";

  const routesPage = () => {
    main = `${routeBase}
<button class="rate">Оцени</button>
<button class="show-groups">Виж групите</button>`;
    side = `<div class="accordion">
<h3>Родопи</h3>
<div><ul id="rodopi"></ul></div>
<h3>Рила</h3>
<div><ul id="rila"></ul></div>
<h3>Пирин</h3>
<div><ul id="pirin"></ul></div>
<h3>СтараПланина</h3>
<div><ul id="stara"></ul></div>
<h3>Странджа</h3>
<div><ul id="strandja"></ul></div></div>`;
    return { main };
  };

  const groupsPage = () => {
    main = `${groupBase}
<button class="rate">Запиши се</button>
<button class="show-groups">Създай група</button>`;
    side = `tuka pak li shte sa marshrutite`;
    return { main, side };
  };

  const aboutPage = () => {
    main = `
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
</h2>`;
    return { main };
  };

  return {
    routesPage,
    groupsPage,
    aboutPage
  };
};
