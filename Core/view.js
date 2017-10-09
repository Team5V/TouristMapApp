const viewModule = () => {
  "use strict";
  const mainFrame = $("main");
  const sideFrame = $("aside");

  const updateTemplate = template => {
    if (template.main) mainFrame.html(template.main);
    if (template.side) sideFrame.html(template.side);
  };

  const updateData = data => {
    if (data.main) mainFrame.data(data.main);
    if (data.side) sideFrame.data(data.side);
    return data;
  };

  const initView = (() => {
    $("#routes").on("click", () => manager("routesPage"));
    $("#groups").on("click", () => manager("groupsPage"));
    $("#about").on("click", () => manager("aboutPage"));
    $( function() {
    $( "#accordion" )
      .accordion({
        header: "> div > h3"
      })
      .sortable({
        axis: "y",
        handle: "h3",
        stop: function( event, ui ) {
          // IE doesn't register the blur when sorting
          // so trigger focusout handlers to remove .ui-state-focus
          ui.item.children( "h3" ).triggerHandler( "focusout" );
 
          // Refresh accordion to handle new order
          $( this ).accordion( "refresh" );
        }
      });
  } );
  })();

  return {
    updateTemplate,
    updateData
  };
};
