/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoicmJpc2hhbDUwIiwiYSI6ImNramlxN3RxazNxZ3ozNG10cTk1bGVzM3UifQ.bPh-fSBhAzrPIR7hyL9eDQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rbishal50/ckjir1oko0nez19qq59vmww73',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 4,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // extend the map bounce
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: { top: 200, bottom: 150, left: 100, right: 100 },
  });
};
