import Point from '@arcgis/core/geometry/Point';
import ArcGISMap from '@arcgis/core/Map';
import Graphic from '@arcgis/core/Graphic'
import MapView from '@arcgis/core/views/MapView'
import SimpleMarkerSymbol from '@arcgis/core/symbols/SimpleMarkerSymbol'
import { ItemProps } from './../interfaces';

export const app: any = {}

const selectedSymbol = new SimpleMarkerSymbol({
    style: "square",
    outline: { width: 1, color: [255, 255, 255, 1] },
    size: 18,
    color: [61, 214, 200, 0.64]
})
const symbol = new SimpleMarkerSymbol({
    outline: { width: 1, color: [61, 28, 53, 1] },
    size: 7,
    color: [255, 8, 8, 1]
})
export async function initialize(container: HTMLDivElement, items?: ItemProps[]) {
    const map = new ArcGISMap({
        basemap: 'arcgis-navigation'
    });

    const view = new MapView({
        map,
        container,
        center: [-118, 34],
        zoom: 4
    });

    app.view = view;

    if (items?.length) {
       const graphics = items.map((x) => (new Graphic({
            geometry: new Point(x.location),
            attributes: {...x},
            symbol,
            popupTemplate: {
                title: '{name}',
                content: '{*}'
            }  
       })))

       view.graphics.addMany(graphics)
    }
    return view.when();
}

export function addLocationToMap(item: ItemProps) {
    const point = new Point(item.location);
    const graphic = new Graphic({
        geometry: point,
        attributes: {...item},
        symbol: selectedSymbol,
        popupTemplate: {
            title: '{name}',
            content: '{*}'
        }
    })
    app.view.graphics.add(graphic)
    app.view.goTo({target: graphic, zoom: 16})
}