<?php

Class Categories {

    static function get($categ) {
        $categories = array(
            "Geodesia" => "GEOBASIG",
            //"grandesobras" => "GRANDES OBRAS",
            "Ada" => "ADA",
            "Vialidad" => "VIALIDAD",
            "Secciones" => "SECC. ELECTORALES 2015",
            "Censo2010" => "CENSO 2010",
            "Red_a" => "RED DE AGUA",
            "Red_c" => "RED DE CLOACA",
            "IGN" => "IGN",
            "habitat" => "SUBS. TIERRAS URB. Y VIVIENDA",
            "energia" => "ENERGIA",
            "gasoducto" => "GASODUCTOS",
	    "mineria" => "MINERIA",
	    "hidraulica" => "HIDRAULICA"
            //"Oceba" => "OCEBA",            
            //"Salud" => "SALUD".
            //"Pluri_c" => "PLURIANUAL CLOACA",
            //"Pluri_a" => "PLURIANUAL AGUA",
            //"Pluri_arq" => "PLURIANUAL ARQUITECTURA",
            //"urbasig" => "UrbaSig",
            //"arba" => "ARBA"
        );
                
        return $categories[$categ];
    }

}

?>
