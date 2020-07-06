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
var format_EntireRoutetracks_1 = new ol.format.GeoJSON();
var features_EntireRoutetracks_1 = format_EntireRoutetracks_1.readFeatures(json_EntireRoutetracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EntireRoutetracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EntireRoutetracks_1.addFeatures(features_EntireRoutetracks_1);
var lyr_EntireRoutetracks_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EntireRoutetracks_1, 
                style: style_EntireRoutetracks_1,
                interactive: true,
                title: '<img src="styles/legend/EntireRoutetracks_1.png" /> EntireRoute, tracks'
            });
var format_Progresstracks_2 = new ol.format.GeoJSON();
var features_Progresstracks_2 = format_Progresstracks_2.readFeatures(json_Progresstracks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Progresstracks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Progresstracks_2.addFeatures(features_Progresstracks_2);
var lyr_Progresstracks_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Progresstracks_2, 
                style: style_Progresstracks_2,
                interactive: true,
                title: '<img src="styles/legend/Progresstracks_2.png" /> Progress, tracks'
            });
var format_Progresswaypoints_3 = new ol.format.GeoJSON();
var features_Progresswaypoints_3 = format_Progresswaypoints_3.readFeatures(json_Progresswaypoints_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Progresswaypoints_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Progresswaypoints_3.addFeatures(features_Progresswaypoints_3);
var lyr_Progresswaypoints_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Progresswaypoints_3, 
                style: style_Progresswaypoints_3,
                interactive: true,
                title: '<img src="styles/legend/Progresswaypoints_3.png" /> Progress, waypoints'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EntireRoutetracks_1.setVisible(true);lyr_Progresstracks_2.setVisible(true);lyr_Progresswaypoints_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EntireRoutetracks_1,lyr_Progresstracks_2,lyr_Progresswaypoints_3];
lyr_EntireRoutetracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Progresstracks_2.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_Progresswaypoints_3.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_EntireRoutetracks_1.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_Progresstracks_2.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_Progresswaypoints_3.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_EntireRoutetracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Progresstracks_2.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Progresswaypoints_3.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_Progresswaypoints_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});