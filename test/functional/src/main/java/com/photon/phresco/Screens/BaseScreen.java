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
package com.photon.phresco.Screens;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;

import junit.framework.Assert;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.Platform;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.net.UrlChecker.TimeoutException;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Function;
import com.photon.phresco.model.YuiMobileWidgets.Mobilewidget;
import com.photon.phresco.selenium.util.Constants;
import com.photon.phresco.selenium.util.GetCurrentDir;
import com.photon.phresco.selenium.util.ScreenActionFailedException;
import com.photon.phresco.selenium.util.ScreenException;
import com.photon.phresco.uiconstants.MobileWidgetData;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;

public class BaseScreen {

	private WebDriver driver;
	private ChromeDriverService chromeService;
	private Log log = LogFactory.getLog("BaseScreen");
	private WebElement element;
	private MobileWidgetData mobileWidgetConstants;
	private UIConstants uiConstants;
	private PhrescoUiConstants phrsc;
	DesiredCapabilities capabilities;

	// private Log log = LogFactory.getLog(getClass());

	public BaseScreen() {

	}

	public BaseScreen(String selectedBrowser, String selectedPlatform,
			String applicationURL, String applicatinContext,
			MobileWidgetData mobileWidgetConstants, UIConstants uiConstants)
			throws AWTException, IOException, ScreenActionFailedException {

		this.mobileWidgetConstants = mobileWidgetConstants;
		this.uiConstants = uiConstants;
		try {
			instantiateBrowser(selectedBrowser, selectedPlatform,
					applicationURL, applicatinContext);
		} catch (ScreenException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public void instantiateBrowser(String selectedBrowser,
			String selectedPlatform, String applicationURL,
			String applicationContext) throws ScreenException,
			MalformedURLException {

		URL server = new URL("http://localhost:4444/wd/hub/");
		if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_CHROME)) {
			log.info("-------------***LAUNCHING GOOGLECHROME***--------------");
			try {

				/*
				 * chromeService = new ChromeDriverService.Builder()
				 * .usingChromeDriverExecutable( new File(getChromeLocation()))
				 * .usingAnyFreePort().build(); log.info(
				 * "-------------***LAUNCHING GOOGLECHROME***--------------");
				 * chromeService.start();
				 */
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("chrome");
				/*
				 * break; capabilities.setPlatform(Platform)
				 * capabilities.setPlatform(selectedPlatform); driver = new
				 * RemoteWebDriver(server, capabilities);
				 */
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_IE)) {
			log.info("---------------***LAUNCHING INTERNET EXPLORE***-----------");
			try {
				capabilities = new DesiredCapabilities();
				capabilities.setJavascriptEnabled(true);
				capabilities.setBrowserName("iexplorer");
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_OPERA)) {
			log.info("-------------***LAUNCHING OPERA***--------------");
			try {

				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("opera");
				capabilities.setCapability("opera.autostart ", true);

				System.out.println("-----------checking the OPERA-------");
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_SAFARI)) {
			log.info("-------------***LAUNCHING SAFARI***--------------");
			try {

				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("safari");
				capabilities.setCapability("safari.autostart ", true);
				System.out.println("-----------checking the SAFARI-------");
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_FIREFOX)) {
			log.info("-------------***LAUNCHING FIREFOX***--------------");
			capabilities = new DesiredCapabilities();
			capabilities.setBrowserName("firefox");
			System.out.println("-----------checking the firefox-------");
			// break;
			// driver = new RemoteWebDriver(server, capabilities);

		} else if (selectedBrowser.equalsIgnoreCase(Constants.IPHONE_WEBDRIVER)) {
			try {
				log.info("-------------***LAUNCHING iPhoneWebDriver***--------------");
				capabilities = new DesiredCapabilities();
				capabilities.setBrowserName("iPhone");
				capabilities.setJavascriptEnabled(true);
				System.out
						.println("-----------Checking in iPhoneWebDriver-------");
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			throw new ScreenException(
					"------Only FireFox,InternetExplore ,Chrome and IphoneWebdriver works-----------");
		}

		/**
		 * These 3 steps common for all the browsers
		 */

		/* for(int i=0;i<platform.length;i++) */

		if (selectedPlatform.equalsIgnoreCase("WINDOWS")) {
			capabilities.setCapability(CapabilityType.PLATFORM,
					Platform.WINDOWS);
			// break;
		} else if (selectedPlatform.equalsIgnoreCase("LINUX")) {
			capabilities.setCapability(CapabilityType.PLATFORM, Platform.LINUX);
			// break;
		} else if (selectedPlatform.equalsIgnoreCase("MAC")) {
			capabilities.setCapability(CapabilityType.PLATFORM, Platform.MAC);
			// break;
		}
		driver = new RemoteWebDriver(server, capabilities);
		// windowResize();
		driver.navigate().to(applicationURL + applicationContext);
		// driver.get(applicationURL + applicationContext);

		// driver.manage().window().maximize();
		// driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}

	public void windowResize() {
		phrsc = new PhrescoUiConstants();
		String resolution = phrsc.getResolution();
		if (resolution != null) {
			String[] tokens = resolution.split("x");
			String resolutionX = tokens[0];
			String resolutionY = tokens[1];
			int x = Integer.parseInt(resolutionX);
			int y = Integer.parseInt(resolutionY);
			Dimension screenResolution = new Dimension(x, y);
			driver.manage().window().setSize(screenResolution);
		} else {
			driver.manage().window().maximize();
		}
	}

	/*
	 * public static void windowMaximizeFirefox() {
	 * driver.manage().window().setPosition(new Point(0, 0)); java.awt.Dimension
	 * screenSize = java.awt.Toolkit.getDefaultToolkit() .getScreenSize();
	 * Dimension dim = new Dimension((int) screenSize.getWidth(), (int)
	 * screenSize.getHeight()); driver.manage().window().setSize(dim); }
	 */

	public void closeBrowser() {
		log.info("-------------***BROWSER CLOSING***--------------");
		if (driver != null) {
			driver.quit();
			if (chromeService != null) {

			}
		}

	}

	public String getChromeLocation() {
		log.info("getChromeLocation:*****CHROME TARGET LOCATION FOUND***");
		String directory = System.getProperty("user.dir");
		String targetDirectory = getChromeFile();
		String location = directory + targetDirectory;
		return location;
	}

	public String getChromeFile() {
		if (System.getProperty("os.name").startsWith(Constants.WINDOWS_OS)) {
			log.info("*******WINDOWS MACHINE FOUND*************");
			// getChromeLocation("/chromedriver.exe");
			return Constants.WINDOWS_DIRECTORY + "/chromedriver.exe";
		} else if (System.getProperty("os.name").startsWith(Constants.LINUX_OS)) {
			log.info("*******LINUX MACHINE FOUND*************");
			return Constants.LINUX_DIRECTORY_64 + "/chromedriver";
		} else if (System.getProperty("os.name").startsWith(Constants.MAC_OS)) {
			log.info("*******MAC MACHINE FOUND*************");
			return Constants.MAC_DIRECTORY + "/chromedriver";
		} else {
			throw new NullPointerException("******PLATFORM NOT FOUND********");
		}

	}

	public void getXpathWebElement(String xpath) throws Exception {
		log.info("Entering:-----getXpathWebElement-------");
		try {

			element = driver.findElement(By.xpath(xpath));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getXpathWebElement()-----------");
			t.printStackTrace();

		}

	}

	public void getIdWebElement(String id) throws ScreenException {
		log.info("Entering:---getIdWebElement-----");
		try {
			element = driver.findElement(By.id(id));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getIdWebElement()----------");
			t.printStackTrace();

		}

	}

	public void getcssWebElement(String selector) throws ScreenException {
		log.info("Entering:----------getIdWebElement----------");
		try {
			element = driver.findElement(By.cssSelector(selector));

		} catch (Throwable t) {
			log.info("Entering:---------Exception in getIdWebElement()--------");

			t.printStackTrace();

		}

	}

	public void waitForElementPresent(String locator, String methodName)
			throws Exception {
		try {
			By by = null;
			log.info("Entering:--------waitForElementPresent()--------");

			if (locator.startsWith("//")) {
				log.info("Entering:--------Xpath checker--------");
				by = By.xpath(locator);
			} else {
				log.info("Entering:--------Non-Xpath checker----------------");
				by = By.id(locator);
			}

			WebDriverWait wait = new WebDriverWait(driver, 20);
			wait.until(presenceOfElementLocated(by));

		}

		catch (Exception e) {
			log.info("presenceOfElementLocated" + e.getMessage());

			WebDriver augmentedDriver = new Augmenter().augment(driver);
			File screenshot = ((TakesScreenshot) augmentedDriver)
					.getScreenshotAs(OutputType.FILE);

			try {

				FileUtils.copyFile(screenshot,
						new File(GetCurrentDir.getCurrentDirectory() + "\\"
								+ methodName + ".png"));
			} catch (Exception e1) {
				log.info("presenceOfElementLocated" + e1.getMessage());
			}
			Assert.assertNull(e);

		}
	}

	Function<WebDriver, WebElement> presenceOfElementLocated(final By locator) {
		log.info("Entering:------presenceOfElementLocated()-----Start");
		return new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver driver) {
				return driver.findElement(locator);

			}

		};

	}

	public void clickOnBrowse(String methodName) throws IOException, Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getBrowse(), methodName);
		getXpathWebElement(uiConstants.getBrowse());
		element.click();

	}

	public void Television(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getTelevision(), methodName);
		getXpathWebElement(uiConstants.getTelevision());
		element.click();
		waitForElementPresent(uiConstants.getTeleProd1Det(), methodName);
		getXpathWebElement(uiConstants.getTeleProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void Computers(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getComputers(), methodName);
		getXpathWebElement(uiConstants.getComputers());
		element.click();
		waitForElementPresent(uiConstants.getCompProd1Det(), methodName);
		getXpathWebElement(uiConstants.getCompProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void MobilePhones(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getMobile(), methodName);
		getXpathWebElement(uiConstants.getMobile());
		element.click();
		waitForElementPresent(uiConstants.getMobileProd1Det(), methodName);
		getXpathWebElement(uiConstants.getMobileProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void AudioDevices(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}

		waitForElementPresent(uiConstants.getAudioDevice(), methodName);
		getXpathWebElement(uiConstants.getAudioDevice());
		element.click();
		waitForElementPresent(uiConstants.getAudioProd1Det(), methodName);
		getXpathWebElement(uiConstants.getAudioProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void Cameras(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getCameras(), methodName);
		getXpathWebElement(uiConstants.getCameras());
		element.click();
		waitForElementPresent(uiConstants.getCamerasProd1Det(), methodName);
		getXpathWebElement(uiConstants.getCamerasProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void Tablets(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getTablets(), methodName);
		getXpathWebElement(uiConstants.getTablets());
		element.click();
		waitForElementPresent(uiConstants.getTabletsProd1Det(), methodName);
		getXpathWebElement(uiConstants.getTabletsProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void MoviesnMusic(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getMovieAndMusic(), methodName);
		getXpathWebElement(uiConstants.getMovieAndMusic());
		element.click();
		waitForElementPresent(uiConstants.getmANDmProd1Det(), methodName);
		getXpathWebElement(uiConstants.getmANDmProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void VideoGames(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getVideoGames(), methodName);
		getXpathWebElement(uiConstants.getVideoGames());
		element.click();
		waitForElementPresent(uiConstants.getVideoGameProd1Det(), methodName);
		getXpathWebElement(uiConstants.getVideoGameProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void MP3Players(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getMp3Players(), methodName);
		getXpathWebElement(uiConstants.getMp3Players());
		element.click();
		waitForElementPresent(uiConstants.getMp3Prod1Det(), methodName);
		getXpathWebElement(uiConstants.getMp3Prod1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void Accessories(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getAccessories(), methodName);
		getXpathWebElement(uiConstants.getAccessories());
		element.click();
		waitForElementPresent(uiConstants.getAccProd1Det(), methodName);
		getXpathWebElement(uiConstants.getAccProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}
	
	public void Failure(String methodName) throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getAccProd1Det(), methodName);
		getXpathWebElement(uiConstants.getAccProd1Det());
		element.click();
		waitForElementPresent(uiConstants.getReview(), methodName);

	}

	public void BillingInfo(String methodName, Mobilewidget mobilewidget)
			throws Exception {
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1]
					.getMethodName();
			;
		}
		waitForElementPresent(uiConstants.getAddToCart(), methodName);
		getXpathWebElement(uiConstants.getAddToCart());
		element.click();
		waitForElementPresent(uiConstants.getUpdateCart(), methodName);
		getXpathWebElement(uiConstants.getUpdateCart());
		element.click();
		waitForElementPresent(uiConstants.getCheckOut(), methodName);
		getXpathWebElement(uiConstants.getCheckOut());
		element.click();
		waitForElementPresent(uiConstants.getCustomerInformation(), methodName);
		getXpathWebElement(uiConstants.getCustomerInformation());
		element.click();

		waitForElementPresent(uiConstants.getEmail(), methodName);
		Thread.sleep(2000);

		getXpathWebElement(uiConstants.getEmail());
		element.click();

		element.sendKeys(mobilewidget.getBillInfoEmailValue());

		waitForElementPresent(uiConstants.getDeliveryInfo(), methodName);
		getXpathWebElement(uiConstants.getDeliveryInfo());
		element.click();
		getIdWebElement(uiConstants.getFirstName());
		element.sendKeys(mobilewidget.getBillInfoFirstNameValue());
		Thread.sleep(2000);
		getIdWebElement(uiConstants.getLastName());
		element.sendKeys(mobilewidget.getBillInfoLastNameValue());
		getIdWebElement(uiConstants.getCompany());
		element.sendKeys(mobilewidget.getBillInfoCompanyValue());
		getIdWebElement(uiConstants.getAddress1());
		element.sendKeys(mobilewidget.getBillInfoAddress1Value());
		getIdWebElement(uiConstants.getAddress2());
		element.sendKeys(mobilewidget.getBillInfoAddress2Value());
		getIdWebElement(uiConstants.getCity());
		element.sendKeys(mobilewidget.getBillInfoCityValue());
		Thread.sleep(2000);
		getIdWebElement(uiConstants.getState());
		element.sendKeys(mobilewidget.getBillInfoStateValue());
		getIdWebElement(uiConstants.getPostcode());
		element.sendKeys(mobilewidget.getBillInfoPostCodeValue());
		getIdWebElement(uiConstants.getPhoneNumber());
		element.sendKeys(mobilewidget.getBillInfoPhoneNumberValue());
		waitForElementPresent(uiConstants.getBillingInfo(), methodName);
		getXpathWebElement(uiConstants.getBillingInfo());
		element.click();
		Thread.sleep(2000);
		waitForElementPresent(uiConstants.getCheckAddress(), methodName);
		getXpathWebElement(uiConstants.getCheckAddress());
		element.click();
		waitForElementPresent(uiConstants.getPaymentMethods(), methodName);
		getXpathWebElement(uiConstants.getPaymentMethods());
		element.click();
		/*
		 * waitForElementPresent(uiConstants.CASHONDELIVERY,methodName);
		 * getXpathWebElement(uiConstants.CASHONDELIVERY); element.click();
		 */
		waitForElementPresent(uiConstants.getOrderComments(), methodName);
		getXpathWebElement(uiConstants.getOrderComments());
		element.click();
		getIdWebElement(uiConstants.getGiveComments());
		element.sendKeys(mobilewidget.getBillInfoCommentsValue());
		waitForElementPresent(uiConstants.getReviewOrder(), methodName);
		getXpathWebElement(uiConstants.getReviewOrder());
		element.click();
		waitForElementPresent(uiConstants.getSubmitOrder(), methodName);
		getXpathWebElement(uiConstants.getSubmitOrder());
		element.click();
		waitForElementPresent("//li[@class='home']", methodName);
		getXpathWebElement("//li[@class='home']");
		element.click();
		Thread.sleep(2000);
	}

	public void click() throws ScreenException {
		log.info("Entering:********click operation start********");
		try {
			element.click();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********click operation end********");

	}

	public void clear() throws ScreenException {
		log.info("Entering:********clear operation start********");
		try {
			element.clear();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********clear operation end********");

	}

	public void sendKeys(String text) throws ScreenException {
		log.info("Entering:********enterText operation start********");
		try {
			clear();
			element.sendKeys(text);

		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********enterText operation end********");
	}

	public void submit() throws ScreenException {
		log.info("Entering:********submit operation start********");
		try {
			element.submit();
		} catch (Throwable t) {
			t.printStackTrace();
		}
		log.info("Entering:********submit operation end********");

	}

}
