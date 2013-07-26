/**
 * PHR_HTML5MobileWidget
 *
 * Copyright (C) 1999-2013 Photon Infotech Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.photon.phresco.testcases;

import java.io.IOException;

import org.testng.Assert;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import com.photon.phresco.Screens.WelcomeScreen;
import com.photon.phresco.model.YuiMobileWidgets.Mobilewidget;
import com.photon.phresco.uiconstants.MobileWidgetData;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;

@SuppressWarnings("unused")
public class WelcomePageTestCase {

	private UIConstants uiConstants;
	private PhrescoUiConstants phrescoUIConstants;
	private WelcomeScreen welcomeScreen;
	private String methodName;
	private String selectedBrowser;
	private MobileWidgetData mobileWidgetConstants;

	// private Log log = LogFactory.getLog(getClass());
	@Parameters(value = { "browser", "platform" })
	@BeforeTest
	public void setUp(String browser,String platform) throws Exception {
		try {
			phrescoUIConstants = new PhrescoUiConstants();
			uiConstants = new UIConstants();
			mobileWidgetConstants = new MobileWidgetData();
			String selectedBrowser = browser;
			String selectedPlatform = platform;
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			String applicationURL = phrescoUIConstants.getProtocol() + "://"
					+ phrescoUIConstants.getHost() + ":" + phrescoUIConstants.getPort()
					+ "/";
			welcomeScreen = new WelcomeScreen(selectedBrowser,
					selectedPlatform, applicationURL, mobileWidgetConstants,
					uiConstants,phrescoUIConstants);

		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}
	
	@Test
	public void testWelcomePageScreen() throws InterruptedException,
			IOException, Exception {
		try {
			Assert.assertNotNull(welcomeScreen);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheAudioDevicesAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheAudioDevicesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();

			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.AudioDevices(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheCamerasAddToCart(Mobilewidget mobilewidget) throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheCamerasAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.Cameras(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheVideoGamesAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheVideoGamesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.VideoGames(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheTelevisionAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTelevisionAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.Television(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheTabletsAddToCart(Mobilewidget mobilewidget) throws InterruptedException,
			IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheTabletsAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.Tablets(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMP3PlayersAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMP3PlayersAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.MP3Players(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMoviesAndMusicAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMoviesAndMusicAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.MoviesnMusic(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheMobilePhonesAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {

			System.out
					.println("---------testToVerifyTheMobilePhonesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.MobilePhones(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheAccessoriesAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheAccessoriesAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.Accessories(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	@Test(dataProvider = "yuiMobilewidgetdata", dataProviderClass=com.photon.phresco.uiconstants.TestDataProvider.class)
	public void testToVerifyTheComputersAddToCart(Mobilewidget mobilewidget)
			throws InterruptedException, IOException, Exception {
		try {
			System.out
					.println("---------testToVerifyTheComputersAddToCart()-------------");
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			welcomeScreen.clickOnBrowse(methodName);
			welcomeScreen.Computers(methodName);
			welcomeScreen.BillingInfo(methodName,mobilewidget);
		} catch (Exception t) {
			t.printStackTrace();

		}
	}

	
	@AfterTest
	public void tearDown() {
		welcomeScreen.closeBrowser();
	}

}
