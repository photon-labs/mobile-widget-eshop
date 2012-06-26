package com.photon.phresco.testcases;

import java.io.IOException;

import junit.framework.TestCase;
import org.junit.Test;
import org.openqa.selenium.server.SeleniumServer;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.MobilewidgUiConstants;
import com.thoughtworks.selenium.Selenium;

public class WelcomePage extends TestCase {


	private MobilewidgUiConstants phrsc;
	private WelcomeScreen wel;
	private int SELENIUM_PORT;
	private String browserAppends;

	@Test
	public void testWel() throws InterruptedException, IOException, Exception {

		try {

			phrsc = new MobilewidgUiConstants();
			String serverURL = phrsc.PROTOCOL + "://"
					+ phrsc.HOST + ":"
					+ phrsc.PORT + "/";
			browserAppends = "*" + phrsc.BROWSER;
			assertNotNull("Browser name should not be null",browserAppends);
			SELENIUM_PORT = Integer.parseInt(phrsc.SERVER_PORT);
			assertNotNull("selenium-port number should not be null",
					SELENIUM_PORT);
			wel=new WelcomeScreen(phrsc.SERVER_HOST, SELENIUM_PORT,
					browserAppends, serverURL, phrsc.SPEED,
					phrsc.CONTEXT );
			assertNotNull(wel);
		} catch (Exception t) {
			t.printStackTrace();
			System.out.println("ScreenCaptured");
			
		}
	}

	public void setUp() throws Exception {
		phrsc = new MobilewidgUiConstants();
	}

	public void tearDown() {
		clean();
	}

	private void clean() {
		wel.closeBrowser();
	}

}