<?php

if( $_POST["action"] == "save_image" ){

    $d = $_POST["data"];    

	$filename = basename($d["orgImageFullPath"]);
    $imageBase64Arr = explode(',', $d["imageBase64"]);
	
	file_put_contents( $filename , base64_decode( $imageBase64Arr[1] ));
		
	outputSuccessMessage("Image has been saved. Image name: " . $filename );
	
}

function outputSuccessMessage($msq) {
	$retObj = (object) array();
	$retObj->success = true;
	$retObj->message = $msq;
	echo json_encode($retObj);
}
	
	
function outputError($msq) {
	$retObj = (object) array();
	$retObj->error = true;
	$retObj->errorMessage = $msq;
	echo json_encode($retObj);		
}
	
?>