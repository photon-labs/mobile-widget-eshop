package com.photon.phresco.testcases;

import java.io.IOException;

import org.junit.AfterClass;
import org.junit.Assert;
import org.junit.BeforeClass;
import org.junit.Test;

import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.uiconstants.MobileWidgetData;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;

public class WelcomePage {

	private static UIConstants uiConstants;
	private static PhrescoUiConstants phrescoUIConstants;
	private static WelcomeScreen welcomeScreen;
	private static String methodName;
	private static String selectedBrowser;
	private static MobileWidgetData mobileWidgetConstants;

	// private Log log = LogFactory.getLog(getClass());

	@BeforeClass
	public static void setUp() throws Exception {
		try {
			phrescoUIConstants = new PhrescoUiConstants();
			uiConstants = new UIConstants();
			// assertNotNull(uiConstants);
			mobileWidgetConstants = new MobileWidgetData();
			launchingBrowser();
			
		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}

	public static void launchingBrowser() throws Exception {
		try {
			String applicationURL = phrescoUIConstants.PROTOCOL + "://"
					+ phrescoUIConstants.HOST + ":" + phrescoUIConstants.PORT
					+ "/";
			selectedBrowser = phrescoUIConstants.BROWSER;
			welcomeScreen = new WelcomeScreen(selectedBrowser, applicationURL,
					phrescoUIConstants.CONTEXT, mobileWidgetConstants,
					uiConstants);
		} catch (Exception exception) {
			exception.printStackTrace();

		}

	}

	@Test
	public void testWelcomePageScreen() throws InterruptedException,
			IOException, Exception {
		try {
			Assert.assertNotNull(welcomeScreen);
			// Thread.sleep(10000);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheAudioDevicesAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheAudioDevicesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.AudioDevices(methodName);			
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheCamerasAddToCart() throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheCamerasAddToCart()-------------");
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.Cameras(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheVideoGamesAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheVideoGamesAddToCart()-------------");
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.VideoGames(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheTelevisionAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTelevisionAddToCart()-------------");

			welcomeScreen.Television(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheTabletsAddToCart() throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTabletsAddToCart()-------------");

			welcomeScreen.Tablets(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheMP3PlayersAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMP3PlayersAddToCart()-------------");

			welcomeScreen.MP3Players(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheMoviesAndMusicAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMoviesAndMusicAddToCart()-------------");

			welcomeScreen.MoviesnMusic(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheMobilePhonesAddToCart()
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMobilePhonesAddToCart()-------------");

			welcomeScreen.MobilePhones(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheAccessoriesAddToCart()
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheAccessoriesAddToCart()-------------");

			welcomeScreen.Accessories(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test
	public void testToVerifyTheComputersAddToCart()
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheComputersAddToCart()-------------");

			welcomeScreen.Computers(methodName);
			welcomeScreen.BillingInfo(methodName);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@AfterClass
	public static void tearDown() {
		welcomeScreen.closeBrowser();
	}

}
