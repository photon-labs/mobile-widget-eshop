package com.photon.phresco.testcases;

import java.io.IOException;

import junit.framework.TestCase;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.Test;
import org.openqa.selenium.server.SeleniumServer;

import com.photon.phresco.Screens.MenuScreen;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.selenium.report.Reporter;
import com.photon.phresco.uiconstants.WidgetData;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;
import com.thoughtworks.selenium.Selenium;

public class CamerasAddcart extends TestCase {


	private UIConstants phrsc;
	private PhrescoUiConstants phr;
	private WidgetData mobwigdata;
	private WelcomeScreen wel;
	private int SELENIUM_PORT;
	private String browserAppends;
	//private LoginScreen loginObject;
	private Log log = LogFactory.getLog(getClass());
	String methodName;

	@Test
	public void testCameras() throws InterruptedException, IOException, Exception {

		try {

			phr = new PhrescoUiConstants();
			mobwigdata = new WidgetData();
			String serverURL = phr.PROTOCOL + "://"
					+ phr.HOST + ":"
					+ phr.PORT + "/";
			browserAppends = "*" + phr.BROWSER;
			assertNotNull("Browser name should not be null",browserAppends);
			SELENIUM_PORT = Integer.parseInt(phr.SERVER_PORT);
			assertNotNull("selenium-port number should not be null",
					SELENIUM_PORT);
			wel=new WelcomeScreen(phr.SERVER_HOST, SELENIUM_PORT,
					browserAppends, serverURL, phr.SPEED,
					phr.CONTEXT );
			assertNotNull(wel);
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
			System.out.println("methodName = " + methodName);
			MenuScreen menu = wel.menuScreen(phrsc,methodName);
			menu.Cameras(methodName);
			menu.BillingInfo(mobwigdata,methodName);
		} catch (Exception t) {
			t.printStackTrace();
			System.out.println("ScreenCaptured");
			
		}
	}

	public void setUp() throws Exception {
		phrsc = new UIConstants();
	}

	public void tearDown() {
		clean();
	}

	private void clean() {
		wel.closeBrowser();
	}

}