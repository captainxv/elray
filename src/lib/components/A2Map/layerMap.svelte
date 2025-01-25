<script lang="ts">
  import { onMount, onDestroy, tick } from 'svelte';
  import { browser } from '$app/environment';
  import Map from 'ol/Map';
  import type { Map as OLMap } from 'ol';
  import View from 'ol/View';
  import TileLayer from 'ol/layer/Tile';
  import OSM from 'ol/source/OSM';
  import { fromLonLat } from 'ol/proj';
  import Feature from 'ol/Feature';
  import Point from 'ol/geom/Point';
  import { Vector as VectorLayer } from 'ol/layer';
  import { Vector as VectorSource } from 'ol/source';
  import { Style, Icon, Circle, Fill, Stroke } from 'ol/style';
  import 'ol/ol.css';
  import { defaults as defaultInteractions } from 'ol/interaction';
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  interface $$Slots {
    'map-icons': {};
  }

  interface Marker {
    coordinates: number[];
    title: string;
    type: 'user' | 'pilot';
  }

  let map: OLMap;
  let mapInitialized = false;
  let mapElement: HTMLElement;
  const progress = tweened(0, {
    duration: 3500,
    easing: cubicOut
  });

  let markers: Marker[] = [
    { coordinates: fromLonLat([-100.3928, 20.5931]), title: 'User 1', type: 'user' },
    { coordinates: fromLonLat([-100.3898, 20.5971]), title: 'Pilot 1', type: 'pilot' }
  ];

  async function initializeMap() {
    if (!browser) return;
    await tick(); // Ensure DOM is ready

    // Start progress animation
    progress.set(0.4);

    map = new Map({
      target: mapElement,
      layers: [
        new TileLayer({
          source: new OSM(),
          className: 'ol_dark',
          preload: Infinity,
          useInterimTilesOnError: true
        })
      ],
      interactions: defaultInteractions({
        mouseWheelZoom: true,
        doubleClickZoom: true,
        pinchRotate: false,
        altShiftDragRotate: false
      }),
      view: new View({
        center: fromLonLat([-100.3928, 20.5931]),
        zoom: 14,
        maxZoom: 19,
        minZoom: 8,
        constrainResolution: false,
        animation: {
          duration: 450,
          easing: 'easeOut'
        }
      })
    });

    // Add dark background to prevent white flash
    document.documentElement.style.backgroundColor = '#1a1a1a';

    // Create vector source and layer for markers
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource
    });
    map.addLayer(vectorLayer);

    // Create marker styles
    const userStyle = new Style({
      image: new Circle({
        radius: 12,
        fill: new Fill({
          color: 'rgba(255, 229, 85)'
        }),
        stroke: new Stroke({
          color: 'rgb(232, 254, 134)',
          width: 2,
          lineDash: [],
          lineCap: 'round'
        })
      })
    });

    const pilotStyle = new Style({
      image: new Circle({
        radius: 12,
        fill: new Fill({
          color: 'rgba(88, 95, 234)'
        }),
        stroke: new Stroke({
          color: 'rgb(56, 53, 231)',
          width: 2,
          lineDash: [],
          lineCap: 'round'
        })
      })
    });

    // Add markers to vector layer
    markers.forEach(({ coordinates, title, type }) => {
      const feature = new Feature({
        geometry: new Point(coordinates)
      });
      feature.setStyle(type === 'pilot' ? pilotStyle : userStyle);
      vectorSource.addFeature(feature);
    });

    // Handle offline status
    window.addEventListener('online', () => {
      map.getAllLayers().forEach(layer => layer.setVisible(true));
    });
    
    window.addEventListener('offline', () => {
      // Show cached tiles only
      map.getAllLayers().forEach(layer => {
        if (layer instanceof TileLayer) {
          layer.getSource().setTileLoadFunction((tile, src) => {
            if (tile.getState() === 0) { // Not loaded
              tile.setState(3); // Error state
            }
          });
        }
      });
    });

    // Complete progress when map is loaded
    map.once('rendercomplete', () => {
      progress.set(1, { duration: 300 }).then(() => {
        // Reset progress after animation
        setTimeout(() => progress.set(0), 200);
      });
    });

    mapInitialized = true;
  }

  onMount(initializeMap);
  onDestroy(() => {
    if (map) map.remove();
  });
</script>

<div bind:this={mapElement} class="map-container">
  {#if !mapInitialized}
    <p>Cargando Ray...</p>
  {/if}
  <div class="progress-bar">
    <div class="progress-sliver" style="width:{$progress * 200}%"></div>
  </div>
  <slot name="map-icons" />
</div>

<style>
  :global(.ol_dark) {
    filter: grayscale(180%) invert(62%) brightness(60%) contrast(165%);
  }

  .map-container {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: #1a1a1a;
    position: relative;
  }

  :global(.ol-control) {
    display: none;
  }

  :global(.ol-zoom) {
    display: none;
  }

  .progress-bar {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    height: 2px;
    z-index: 1000;
    width: 100%;
  }

  .progress-sliver {
    height: 100%;
    width: 100px;
    background: linear-gradient(
      90deg,
      transparent 100%,
      gold 25%,
      #ffd700 50%,
      gold 75%,
      transparent 100%
    );
    background-repeat: repeat;
    box-shadow: 0 0 10px 0 rgba(255, 166, 0, 0);
    animation: shine 0.8s ease-in-out;
    transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 0.1);
  }

  @keyframes shine {
    from { background-position: -100% 0; }
    to { background-position: 100% 0; }
  }
</style> 