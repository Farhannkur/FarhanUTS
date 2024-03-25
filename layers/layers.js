ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([11602319.001494, -524804.736998, 11767354.060267, -437056.034992]);
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
var format_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_1 = format_ADMINISTRASIKECAMATAN_AR_50K_1.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_1);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_1, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_1,
                popuplayertitle: "ADMINISTRASIKECAMATAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_1.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_AGRIKEBUN_AR_50K_2 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_50K_2 = format_AGRIKEBUN_AR_50K_2.readFeatures(json_AGRIKEBUN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_50K_2.addFeatures(features_AGRIKEBUN_AR_50K_2);
var lyr_AGRIKEBUN_AR_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRIKEBUN_AR_50K_2, 
                style: style_AGRIKEBUN_AR_50K_2,
                popuplayertitle: "AGRIKEBUN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_50K_2.png" /> AGRIKEBUN_AR_50K'
            });
var format_AGRILADANG_AR_50K_3 = new ol.format.GeoJSON();
var features_AGRILADANG_AR_50K_3 = format_AGRILADANG_AR_50K_3.readFeatures(json_AGRILADANG_AR_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRILADANG_AR_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRILADANG_AR_50K_3.addFeatures(features_AGRILADANG_AR_50K_3);
var lyr_AGRILADANG_AR_50K_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AGRILADANG_AR_50K_3, 
                style: style_AGRILADANG_AR_50K_3,
                popuplayertitle: "AGRILADANG_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/AGRILADANG_AR_50K_3.png" /> AGRILADANG_AR_50K'
            });
var format_DANAU_AR_50K_4 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_4 = format_DANAU_AR_50K_4.readFeatures(json_DANAU_AR_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_4.addFeatures(features_DANAU_AR_50K_4);
var lyr_DANAU_AR_50K_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DANAU_AR_50K_4, 
                style: style_DANAU_AR_50K_4,
                popuplayertitle: "DANAU_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_4.png" /> DANAU_AR_50K'
            });
var format_PENDIDIKAN_AR_50K_5 = new ol.format.GeoJSON();
var features_PENDIDIKAN_AR_50K_5 = format_PENDIDIKAN_AR_50K_5.readFeatures(json_PENDIDIKAN_AR_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_AR_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_AR_50K_5.addFeatures(features_PENDIDIKAN_AR_50K_5);
var lyr_PENDIDIKAN_AR_50K_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENDIDIKAN_AR_50K_5, 
                style: style_PENDIDIKAN_AR_50K_5,
                popuplayertitle: "PENDIDIKAN_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_AR_50K_5.png" /> PENDIDIKAN_AR_50K'
            });
var format_EMPANG_AR_50K_6 = new ol.format.GeoJSON();
var features_EMPANG_AR_50K_6 = format_EMPANG_AR_50K_6.readFeatures(json_EMPANG_AR_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMPANG_AR_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMPANG_AR_50K_6.addFeatures(features_EMPANG_AR_50K_6);
var lyr_EMPANG_AR_50K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EMPANG_AR_50K_6, 
                style: style_EMPANG_AR_50K_6,
                popuplayertitle: "EMPANG_AR_50K",
                interactive: true,
                title: '<img src="styles/legend/EMPANG_AR_50K_6.png" /> EMPANG_AR_50K'
            });
var format_DERMAGA_PT_50K_7 = new ol.format.GeoJSON();
var features_DERMAGA_PT_50K_7 = format_DERMAGA_PT_50K_7.readFeatures(json_DERMAGA_PT_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DERMAGA_PT_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DERMAGA_PT_50K_7.addFeatures(features_DERMAGA_PT_50K_7);
var lyr_DERMAGA_PT_50K_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DERMAGA_PT_50K_7, 
                style: style_DERMAGA_PT_50K_7,
                popuplayertitle: "DERMAGA_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/DERMAGA_PT_50K_7.png" /> DERMAGA_PT_50K'
            });
var format_ARENAOLAHRAGA_PT_50K_8 = new ol.format.GeoJSON();
var features_ARENAOLAHRAGA_PT_50K_8 = format_ARENAOLAHRAGA_PT_50K_8.readFeatures(json_ARENAOLAHRAGA_PT_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ARENAOLAHRAGA_PT_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ARENAOLAHRAGA_PT_50K_8.addFeatures(features_ARENAOLAHRAGA_PT_50K_8);
var lyr_ARENAOLAHRAGA_PT_50K_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ARENAOLAHRAGA_PT_50K_8, 
                style: style_ARENAOLAHRAGA_PT_50K_8,
                popuplayertitle: "ARENAOLAHRAGA_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/ARENAOLAHRAGA_PT_50K_8.png" /> ARENAOLAHRAGA_PT_50K'
            });
var format_BANGUNAN_PT_50K_9 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_50K_9 = format_BANGUNAN_PT_50K_9.readFeatures(json_BANGUNAN_PT_50K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_50K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_50K_9.addFeatures(features_BANGUNAN_PT_50K_9);
var lyr_BANGUNAN_PT_50K_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_PT_50K_9, 
                style: style_BANGUNAN_PT_50K_9,
                popuplayertitle: "BANGUNAN_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_50K_9.png" /> BANGUNAN_PT_50K'
            });
var format_CAGARBUDAYA_PT_50K_10 = new ol.format.GeoJSON();
var features_CAGARBUDAYA_PT_50K_10 = format_CAGARBUDAYA_PT_50K_10.readFeatures(json_CAGARBUDAYA_PT_50K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAGARBUDAYA_PT_50K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAGARBUDAYA_PT_50K_10.addFeatures(features_CAGARBUDAYA_PT_50K_10);
var lyr_CAGARBUDAYA_PT_50K_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAGARBUDAYA_PT_50K_10, 
                style: style_CAGARBUDAYA_PT_50K_10,
                popuplayertitle: "CAGARBUDAYA_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/CAGARBUDAYA_PT_50K_10.png" /> CAGARBUDAYA_PT_50K'
            });
var format_KANTORPOS_PT_50K_11 = new ol.format.GeoJSON();
var features_KANTORPOS_PT_50K_11 = format_KANTORPOS_PT_50K_11.readFeatures(json_KANTORPOS_PT_50K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KANTORPOS_PT_50K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORPOS_PT_50K_11.addFeatures(features_KANTORPOS_PT_50K_11);
var lyr_KANTORPOS_PT_50K_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KANTORPOS_PT_50K_11, 
                style: style_KANTORPOS_PT_50K_11,
                popuplayertitle: "KANTORPOS_PT_50K",
                interactive: true,
                title: '<img src="styles/legend/KANTORPOS_PT_50K_11.png" /> KANTORPOS_PT_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_1.setVisible(true);lyr_AGRIKEBUN_AR_50K_2.setVisible(true);lyr_AGRILADANG_AR_50K_3.setVisible(true);lyr_DANAU_AR_50K_4.setVisible(true);lyr_PENDIDIKAN_AR_50K_5.setVisible(true);lyr_EMPANG_AR_50K_6.setVisible(true);lyr_DERMAGA_PT_50K_7.setVisible(true);lyr_ARENAOLAHRAGA_PT_50K_8.setVisible(true);lyr_BANGUNAN_PT_50K_9.setVisible(true);lyr_CAGARBUDAYA_PT_50K_10.setVisible(true);lyr_KANTORPOS_PT_50K_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ADMINISTRASIKECAMATAN_AR_50K_1,lyr_AGRIKEBUN_AR_50K_2,lyr_AGRILADANG_AR_50K_3,lyr_DANAU_AR_50K_4,lyr_PENDIDIKAN_AR_50K_5,lyr_EMPANG_AR_50K_6,lyr_DERMAGA_PT_50K_7,lyr_ARENAOLAHRAGA_PT_50K_8,lyr_BANGUNAN_PT_50K_9,lyr_CAGARBUDAYA_PT_50K_10,lyr_KANTORPOS_PT_50K_11];
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRILADANG_AR_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_AR_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PENDIDIKAN_AR_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGDPDK': 'FGDPDK', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSPDK': 'JNSPDK', 'JJGPDF': 'JJGPDF', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_EMPANG_AR_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DERMAGA_PT_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'PMLDRM': 'PMLDRM', 'OPRDRM': 'OPRDRM', 'LGTDRM': 'LGTDRM', 'LBRDRM': 'LBRDRM', 'LUAS': 'LUAS', 'KDLDRM': 'KDLDRM', 'KSTDRM': 'KSTDRM', 'STRDRM': 'STRDRM', 'REMARK': 'REMARK', 'FGSDRM': 'FGSDRM', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ARENAOLAHRAGA_PT_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'ELEVAS': 'ELEVAS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_BANGUNAN_PT_50K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_CAGARBUDAYA_PT_50K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_KANTORPOS_PT_50K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'JNKPOS': 'JNKPOS', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRILADANG_AR_50K_3.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_DANAU_AR_50K_4.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_PENDIDIKAN_AR_50K_5.set('fieldImages', {'NAMOBJ': '', 'KATPDK': '', 'JLPDDK': '', 'FGDPDK': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSPDK': '', 'JJGPDF': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_EMPANG_AR_50K_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_DERMAGA_PT_50K_7.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'PMLDRM': '', 'OPRDRM': '', 'LGTDRM': '', 'LBRDRM': '', 'LUAS': '', 'KDLDRM': '', 'KSTDRM': '', 'STRDRM': '', 'REMARK': '', 'FGSDRM': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_ARENAOLAHRAGA_PT_50K_8.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'ELEVAS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_BANGUNAN_PT_50K_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_CAGARBUDAYA_PT_50K_10.set('fieldImages', {'NAMOBJ': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_KANTORPOS_PT_50K_11.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'JNKPOS': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_1.set('fieldLabels', {'KDPPUM': 'inline label - always visible', 'NAMOBJ': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KDPBPS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'LUASWH': 'inline label - always visible', 'UUPP': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'KDEBPS': 'inline label - always visible', 'KDEPUM': 'inline label - always visible', 'KDCBPS': 'inline label - always visible', 'KDCPUM': 'inline label - always visible', 'KDBBPS': 'inline label - always visible', 'KDBPUM': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WIADKD': 'inline label - always visible', 'WADMKC': 'inline label - always visible', 'WIADKC': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WIADKK': 'inline label - always visible', 'WADMPR': 'inline label - always visible', 'WIADPR': 'inline label - always visible', 'TIPADM': 'inline label - always visible', 'Shape_Leng': 'inline label - always visible', 'Shape_Area': 'inline label - always visible', });
lyr_AGRIKEBUN_AR_50K_2.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'JNSKBN': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'PUDATE': 'inline label - always visible', 'AQDATE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KODLCO': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_AGRILADANG_AR_50K_3.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'AQDATE': 'inline label - always visible', 'PUDATE': 'inline label - always visible', 'KODLCO': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'JNSLDG': 'inline label - always visible', 'TNMLDG': 'inline label - always visible', 'TIPLDG': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_DANAU_AR_50K_4.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'OTODAN': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'KODLCO': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'VOLTAP': 'inline label - always visible', 'DTA': 'inline label - always visible', 'SEDIMN': 'inline label - always visible', 'VLCSDN': 'inline label - always visible', 'QUAAR': 'inline label - always visible', 'CRH': 'inline label - always visible', 'KPTS': 'inline label - always visible', 'NAMWS': 'inline label - always visible', 'NAMDAS': 'inline label - always visible', 'LOKASI': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_PENDIDIKAN_AR_50K_5.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'KATPDK': 'inline label - always visible', 'JLPDDK': 'inline label - always visible', 'FGDPDK': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'JNSPDK': 'inline label - always visible', 'JJGPDF': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_EMPANG_AR_50K_6.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', 'SHAPE_Leng': 'inline label - always visible', 'SHAPE_Area': 'inline label - always visible', });
lyr_DERMAGA_PT_50K_7.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'PMLDRM': 'inline label - always visible', 'OPRDRM': 'inline label - always visible', 'LGTDRM': 'inline label - always visible', 'LBRDRM': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'KDLDRM': 'inline label - always visible', 'KSTDRM': 'inline label - always visible', 'STRDRM': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'FGSDRM': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_ARENAOLAHRAGA_PT_50K_8.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'ELEVAS': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_BANGUNAN_PT_50K_9.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_CAGARBUDAYA_PT_50K_10.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'LUAS': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_KANTORPOS_PT_50K_11.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'FCODE': 'inline label - always visible', 'JNKPOS': 'inline label - always visible', 'REMARK': 'inline label - always visible', 'SRS_ID': 'inline label - always visible', 'LCODE': 'inline label - always visible', 'METADATA': 'inline label - always visible', });
lyr_KANTORPOS_PT_50K_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});