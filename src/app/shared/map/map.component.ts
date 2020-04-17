import { Component, OnInit } from '@angular/core';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format';
import {defaults as defaultInteractions, DragAndDrop} from 'ol/interaction';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {XYZ, Vector as VectorSource, OSM} from 'ol/source';
import * as Proj from 'ol/Proj';
import {defaults as defaultControls} from 'ol/control';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: []
})
export class MapComponent implements OnInit {

  mapTilerKey = 'b78ikDGuzTGOKUTJjp33';

  // attributions = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  // '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';
  attributions='';

  dragAndDropInteraction = new DragAndDrop({
    formatConstructors: [
      GPX,
      GeoJSON,
      IGC,
      KML,
      TopoJSON
    ]
  });

  constructor() { }

  ngOnInit() {

    // const urlMap = `https://api.maptiler.com/maps/streets/?key=YkTUjJOEucFxlg6wtlLd#0.56/0/0`;
    // const map = new Map({
    //   interactions: defaultInteractions().extend([this.dragAndDropInteraction]),
    //   layers: [
    //     new TileLayer({
    //       source: new XYZ({
    //         attributions: this.attributions,
    //         url: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=YkTUjJOEucFxlg6wtlLd',
    //         maxZoom: 20
    //       })
    //     })
    //   ],
    //   target: 'map',
    //   view: new View({
    //     center: [0, 0],
    //     zoom: 2
    //   })
    // });

	// const map = new Map({
    //   target: "map",
    //   layers: [
    //     new TileLayer({
    //       source: new OSM()
    //     })
    //   ],
    //   view: new View({
    //     center: Proj.fromLonLat([0, 0]),
    //     zoom: 10
    //   }),
    //   controls: defaultControls({attribution: false, zoom: false}).extend([])
    // });


    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        // center: ol.proj.fromLonLat([37.41, 8.82]),
        center: [0, 0],
        zoom: 4
      })
    });
  }

}
