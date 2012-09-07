package com.photon.phresco.Screens;

import java.io.IOException;

import com.photon.phresco.uiconstants.MobileWidgetData;
import com.photon.phresco.uiconstants.UIConstants;





public class WelcomeScreen extends PhotonAbstractScreen {
	public UIConstants phrsc;
    public WelcomeScreen(String selectedBrowser, String applicationURL, String context, MobileWidgetData mobileWidgetConstants, UIConstants uiConstants ) throws InterruptedException,IOException, Exception {
    	super(selectedBrowser, applicationURL, context, mobileWidgetConstants, uiConstants);
    	
    
    }
	
    
}

