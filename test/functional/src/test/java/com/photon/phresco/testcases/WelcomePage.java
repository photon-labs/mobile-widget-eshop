package com.photon.phresco.testcases;

import java.io.IOException;

import junit.framework.TestCase;
import org.junit.Test;
import org.openqa.selenium.server.SeleniumServer;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.PhrescoUiConstants;


public class WelcomePage extends TestCase {


	
	private PhrescoUiConstants phr;
	private WelcomeScreen wel;
	private int SELENIUM_PORT;
	private String browserAppends;

	@Test
	public void testWel() throws InterruptedException, IOException, Exception {

		try {

			
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
		} catch (Exception t) {
			t.printStackTrace();
			System.out.println("ScreenCaptured");
			
		}
	}

	public void setUp() throws Exception {
		phr = new PhrescoUiConstants();
	}

	public void tearDown() {
		clean();
	}

	private void clean() {
		wel.closeBrowser();
	}

}