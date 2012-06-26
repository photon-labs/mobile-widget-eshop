package com.photon.phresco.testcases;

import java.io.IOException;

import junit.framework.TestCase;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.junit.Test;
import com.photon.phresco.Screens.MenuScreen;
import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.MobilewidgUiConstants;


public class AccessoriesAddcart extends TestCase {


	private MobilewidgUiConstants phrsc;
	private WelcomeScreen wel;
	private int SELENIUM_PORT;
	private String browserAppends;
	//private LoginScreen loginObject;
	String methodName;
	
	

	@Test
	public void testAccessories() throws InterruptedException, IOException, Exception {

		try {

			
			String serverURL = phrsc.PROTOCOL + "://"
					+ phrsc.HOST + ":"
					+ phrsc.PORT + "/";
			browserAppends = "*" + phrsc.BROWSER;
			assertNotNull("Browser name should not be null",browserAppends);
			SELENIUM_PORT = Integer.parseInt(phrsc.SERVER_PORT);
			System.out.println("----------------->"+serverURL+"------------->"+browserAppends);
			assertNotNull("selenium-port number should not be null",
					SELENIUM_PORT);
			wel=new WelcomeScreen(phrsc.SERVER_HOST, SELENIUM_PORT,
					browserAppends, serverURL, phrsc.SPEED,
					phrsc.CONTEXT );
			assertNotNull(wel);
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();
			System.out.println("methodName = " + methodName);
			MenuScreen menu = wel.menuScreen(phrsc,methodName);
			menu.Accessories(methodName);
			menu.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();
			System.out.println("ScreenCaptured");
    		
		}
	}

	public void setUp() throws Exception {
		System.out.println("---------loading------------");
		phrsc = new MobilewidgUiConstants();
	}

	public void tearDown() {
		clean();
	}

	private void clean() {
		wel.closeBrowser();
	}

}