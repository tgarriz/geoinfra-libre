<?php

Class Urls {

    static function get($url) {
        $urls = array(
            //"Geobasig" => "http://geobasig.com.ar/geoserver29/Geodesia/wms?",
            "Geodesia" => "http://geobasig.com.ar/geoserver29/Geodesia/wms?",
            "IGN" => "http://wms.ign.gob.ar/geoserver/wms?",
            "Habitat" => "http://190.188.234.6/geoserver/wms?",
            "ARBA" => "http://cartoservices.arba.gov.ar/geoserver/cartoservice/wms",
            "UrbaSig" => "http://sig.gobierno.gba.gov.ar/geoserver/urbasig/wms?",
	    //"Pergamino" => "http://ide.pergamino.gob.ar:8080/geoserver/wms?",
            "Energia" => "http://sig.se.gob.ar/cgi-bin/mapserv6?map=/var/www/html/visor/geofiles/map/mapase.map",
	    "ADA1" => "http://gis.ada.gba.gov.ar/cgi-bin/hx3Fo33vw2.fcgi?"
        );
        return $urls[$url];
    }

}

?>
