package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.MobileWidgetData;
import com.photon.phresco.uiconstants.UIConstants;

public class PhotonAbstractScreen extends BaseScreen {

	// public PhrescoUiConstantsXml phrescoXml;

	protected PhotonAbstractScreen() {

	}

	protected PhotonAbstractScreen(String selectedBrowser, String applicationURL, String context, MobileWidgetData mobileWidgetConstants, UIConstants uiConstants) throws IOException,
			Exception {
		super(selectedBrowser, applicationURL, context, mobileWidgetConstants, uiConstants);
	}

}
