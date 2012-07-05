package com.photon.phresco.Screens;

import java.io.IOException;

import org.apache.commons.lang.StringUtils;
import com.photon.phresco.uiconstants.UIConstants;





public class WelcomeScreen extends PhotonAbstractScreen {
	public UIConstants phrsc;
    public WelcomeScreen(String host, int port, String browser, String url, String speed,String context ) throws InterruptedException,IOException, Exception {
    	super(host, port, browser, url, speed, context);
    	
    
    }
 public MenuScreen menuScreen(UIConstants phrsc,String methodName) throws Exception {
	 if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
 	      
    	return new MenuScreen(phrsc,methodName);
    }
    
}

