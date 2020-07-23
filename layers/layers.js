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
var format_EntireRoutewaypoints_2 = new ol.format.GeoJSON();
var features_EntireRoutewaypoints_2 = format_EntireRoutewaypoints_2.readFeatures(json_EntireRoutewaypoints_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EntireRoutewaypoints_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EntireRoutewaypoints_2.addFeatures(features_EntireRoutewaypoints_2);
var lyr_EntireRoutewaypoints_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EntireRoutewaypoints_2, 
                style: style_EntireRoutewaypoints_2,
                interactive: true,
                title: '<img src="styles/legend/EntireRoutewaypoints_2.png" /> EntireRoute, waypoints'
            });
var format_ReturnRoutetracks_3 = new ol.format.GeoJSON();
var features_ReturnRoutetracks_3 = format_ReturnRoutetracks_3.readFeatures(json_ReturnRoutetracks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReturnRoutetracks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReturnRoutetracks_3.addFeatures(features_ReturnRoutetracks_3);
var lyr_ReturnRoutetracks_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReturnRoutetracks_3, 
                style: style_ReturnRoutetracks_3,
                interactive: true,
                title: '<img src="styles/legend/ReturnRoutetracks_3.png" /> ReturnRoute, tracks'
            });
var format_OutboundProgresstracks_4 = new ol.format.GeoJSON();
var features_OutboundProgresstracks_4 = format_OutboundProgresstracks_4.readFeatures(json_OutboundProgresstracks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OutboundProgresstracks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OutboundProgresstracks_4.addFeatures(features_OutboundProgresstracks_4);
var lyr_OutboundProgresstracks_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OutboundProgresstracks_4, 
                style: style_OutboundProgresstracks_4,
                interactive: true,
                title: '<img src="styles/legend/OutboundProgresstracks_4.png" /> OutboundProgress, tracks'
            });
var format_ReturnRoutewaypoints_5 = new ol.format.GeoJSON();
var features_ReturnRoutewaypoints_5 = format_ReturnRoutewaypoints_5.readFeatures(json_ReturnRoutewaypoints_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReturnRoutewaypoints_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReturnRoutewaypoints_5.addFeatures(features_ReturnRoutewaypoints_5);
var lyr_ReturnRoutewaypoints_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReturnRoutewaypoints_5, 
                style: style_ReturnRoutewaypoints_5,
                interactive: true,
                title: '<img src="styles/legend/ReturnRoutewaypoints_5.png" /> ReturnRoute, waypoints'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EntireRoutetracks_1.setVisible(true);lyr_EntireRoutewaypoints_2.setVisible(true);lyr_ReturnRoutetracks_3.setVisible(true);lyr_OutboundProgresstracks_4.setVisible(true);lyr_ReturnRoutewaypoints_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EntireRoutetracks_1,lyr_EntireRoutewaypoints_2,lyr_ReturnRoutetracks_3,lyr_OutboundProgresstracks_4,lyr_ReturnRoutewaypoints_5];
lyr_EntireRoutetracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_EntireRoutewaypoints_2.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_ReturnRoutetracks_3.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_OutboundProgresstracks_4.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_ReturnRoutewaypoints_5.set('fieldAliases', {'name': 'name', 'elevation': 'elevation', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_EntireRoutetracks_1.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_EntireRoutewaypoints_2.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_ReturnRoutetracks_3.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_OutboundProgresstracks_4.set('fieldImages', {'name': '', 'symbol': '', 'number': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_ReturnRoutewaypoints_5.set('fieldImages', {'name': '', 'elevation': '', 'comment': '', 'description': '', 'source': '', 'url': '', 'url name': '', });
lyr_EntireRoutetracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_EntireRoutewaypoints_2.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_ReturnRoutetracks_3.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_OutboundProgresstracks_4.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_ReturnRoutewaypoints_5.set('fieldLabels', {'name': 'no label', 'elevation': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_ReturnRoutewaypoints_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});