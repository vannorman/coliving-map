 /* MAPBOX BOILER CODE */
  var map = new mapboxgl.Map({
    container: 'map',
    center:[-97.7441, 30.2714],
    zoom:10,
    style: 'mapbox://styles/mapbox/streets-v11'
  });

   map.on('click', (event) => {

        const popup = new mapboxgl.Popup({ offset: [0, -15] })
          .setHTML(
          'hi'
            // `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
          )
          .addTo(map);
      });

      const geojson = {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [ -97.64614403489333,30.50870443524099]

              },
              properties: {
                title: 'Mana House',
                description: 'www.mana.house'
              }
            },
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [-97.72984396411266,30.3209509611847]
              },
              properties: {
                title: 'Kyle\'s Growth House',
                description: 'https://growthhouseatx.info/'
              }
            }
          ]
        };
        // add markers to map
        for (const feature of geojson.features) {
            // create a HTML element for each feature
            const el = document.createElement('div');
            el.className = 'marker';

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates)
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }) // add popups
                .setHTML(
                    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
                )
            ).addTo(map);
        }


