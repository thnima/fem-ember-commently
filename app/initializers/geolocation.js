export function initialize(app) {
  const geo = navigator.geolocation;
  geo.getCurrentPosition((pos) => {
    let pt = pos.coords;

    const coords = {
      lat: pt.latitude,
      lng: pt.longitude
    };

    app.register('data:location', coords, {
      instantiate: false
    });

    app.advanceReadiness();
  });

  app.deferReadiness();
}

export default {
  name: 'geolocation',
  initialize
}