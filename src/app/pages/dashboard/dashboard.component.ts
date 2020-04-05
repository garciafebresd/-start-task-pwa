import { Component, OnInit } from '@angular/core';

// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format';
// import {defaults as defaultInteractions, DragAndDrop} from 'ol/interaction';
// import {XYZ, Vector as VectorSource, OSM, TileDebug} from 'ol/source';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {GPX, GeoJSON, IGC, KML, TopoJSON} from 'ol/format';
import {defaults as defaultInteractions, DragAndDrop} from 'ol/interaction';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {XYZ, Vector as VectorSource, OSM} from 'ol/source';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  mapTilerKey = 'b78ikDGuzTGOKUTJjp33';

  attributions = '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';

  // map: Map;

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

    //const urlMap = `https://api.maptiler.com/maps/streets/?key=${this.mapTilerKey}#0.0/0.00000/0.00000`;
    const urlMap = `https://api.maptiler.com/maps/streets/?key=YkTUjJOEucFxlg6wtlLd#0.56/0/0`;

    const map = new Map({
      interactions: defaultInteractions().extend([this.dragAndDropInteraction]),
      layers: [
        new TileLayer({
          source: new XYZ({
            attributions: this.attributions,
            url: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=YkTUjJOEucFxlg6wtlLd',
            maxZoom: 20
          })
        })
      ],
      // layers: [
      //   new TileLayer({
      //     preload: 4,
      //     source: new OSM()
      //   })
      // ],
      target: 'map',
      view: new View({
        center: [0, 0],
        zoom: 2
      })
    });
  }

}
