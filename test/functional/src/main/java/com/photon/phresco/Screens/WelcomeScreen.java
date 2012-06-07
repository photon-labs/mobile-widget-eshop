package com.photon.phresco.Screens;

import java.io.IOException;

import org.apache.commons.lang.StringUtils;

import com.photon.phresco.uiconstants.MobilewidgUiConstants;





public class WelcomeScreen extends PhotonAbstractScreen {
	public MobilewidgUiConstants phrsc;
    public WelcomeScreen(String host, int port, String browser, String url, String speed,String context ) throws InterruptedException,IOException, Exception {
    	super(host, port, browser, url, speed, context);
    	
    
    }
 public MenuScreen menuScreen(MobilewidgUiConstants phrsc,String methodName) throws Exception {
	 if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
 	      
    	return new MenuScreen(phrsc,methodName);
    }
    
}

