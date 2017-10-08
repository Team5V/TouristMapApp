const htmlTemplateFactoryModule = () => {
  const routeBase = `<h1 id="title"></h1>
<image id="map"></image>
<h4 id="difficulty"></h4>
<h4 id="ratting"></h4>
<h4 id="length"></h4>
<h4 id="time"></h4>
<h4 id="description"></h4>`;

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
    `<input type="text" id="datePicker" placeholder="Click to pick date" />`;
  };

  const aboutPage = () => {
    //tuka shte sme nie
  };

  return {
    routesPage,
    groupsPage,
    aboutPage
  };
};
