var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_full_routetracks_1 = new ol.format.GeoJSON();
var features_full_routetracks_1 = format_full_routetracks_1.readFeatures(json_full_routetracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_full_routetracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_full_routetracks_1.addFeatures(features_full_routetracks_1);
var lyr_full_routetracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_full_routetracks_1, 
                style: style_full_routetracks_1,
                interactive: true,
                title: '<img src="styles/legend/full_routetracks_1.png" /> full_route, tracks'
            });
var format_full_routewaypoints_2 = new ol.format.GeoJSON();
var features_full_routewaypoints_2 = format_full_routewaypoints_2.readFeatures(json_full_routewaypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_full_routewaypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_full_routewaypoints_2.addFeatures(features_full_routewaypoints_2);
var lyr_full_routewaypoints_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_full_routewaypoints_2, 
                style: style_full_routewaypoints_2,
                interactive: true,
                title: '<img src="styles/legend/full_routewaypoints_2.png" /> full_route, waypoints'
            });
var format_progresstracks_3 = new ol.format.GeoJSON();
var features_progresstracks_3 = format_progresstracks_3.readFeatures(json_progresstracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_progresstracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_progresstracks_3.addFeatures(features_progresstracks_3);
var lyr_progresstracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_progresstracks_3, 
                style: style_progresstracks_3,
                interactive: true,
                title: '<img src="styles/legend/progresstracks_3.png" /> progress, tracks'
            });
var format_progresswaypoints_4 = new ol.format.GeoJSON();
var features_progresswaypoints_4 = format_progresswaypoints_4.readFeatures(json_progresswaypoints_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_progresswaypoints_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_progresswaypoints_4.addFeatures(features_progresswaypoints_4);
var lyr_progresswaypoints_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_progresswaypoints_4, 
                style: style_progresswaypoints_4,
                interactive: true,
                title: '<img src="styles/legend/progresswaypoints_4.png" /> progress, waypoints'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_full_routetracks_1.setVisible(true);lyr_full_routewaypoints_2.setVisible(true);lyr_progresstracks_3.setVisible(true);lyr_progresswaypoints_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_full_routetracks_1,lyr_full_routewaypoints_2,lyr_progresstracks_3,lyr_progresswaypoints_4];
lyr_full_routetracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_full_routewaypoints_2.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_progresstracks_3.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_progresswaypoints_4.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_full_routetracks_1.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_full_routewaypoints_2.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_progresstracks_3.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_progresswaypoints_4.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_full_routetracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_full_routewaypoints_2.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_progresstracks_3.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_progresswaypoints_4.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_progresswaypoints_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});