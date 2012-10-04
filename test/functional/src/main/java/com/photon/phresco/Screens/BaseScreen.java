package com.photon.phresco.Screens;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.google.common.base.Function;
import com.photon.phresco.selenium.util.Constants;
import com.photon.phresco.selenium.util.GetCurrentDir;
import com.photon.phresco.selenium.util.ScreenException;
import com.photon.phresco.uiconstants.MobileWidgetData;
import com.photon.phresco.uiconstants.PhrescoUiConstants;
import com.photon.phresco.uiconstants.UIConstants;

public class BaseScreen {

	private static WebDriver driver;
	private ChromeDriverService chromeService;
	private Log log = LogFactory.getLog("BaseScreen");
	private WebElement element;	
	private MobileWidgetData mobileWidgetConstants;
	private UIConstants uiConstants;
	private static PhrescoUiConstants phrsc;

	// private Log log = LogFactory.getLog(getClass());

	public BaseScreen() {

	}

	public BaseScreen(String selectedBrowser, String applicationURL, String applicatinContext, MobileWidgetData mobileWidgetConstants, UIConstants uiConstants)
			throws ScreenException {
	
		this.mobileWidgetConstants=mobileWidgetConstants;
		this.uiConstants = uiConstants;
		instantiateBrowser(selectedBrowser, applicationURL, applicatinContext);

	}

	public void instantiateBrowser(String selectedBrowser,
			String applicationURL, String applicationContext)
			throws ScreenException {

		if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_CHROME)) {
			try {
				// "D:/Selenium-jar/chromedriver_win_19.0.1068.0/chromedriver.exe"
				chromeService = new ChromeDriverService.Builder()
						.usingDriverExecutable(
								new File(getChromeLocation()))
						.usingAnyFreePort().build();	
				
				log.info("-------------***LAUNCHING GOOGLECHROME***--------------");						
				driver=new ChromeDriver(chromeService);
				driver.manage().window().maximize();
			//	driver = new ChromeDriver(chromeService, chromeOption);
				// driver.manage().timeouts().implicitlyWait(30,
				// TimeUnit.SECONDS);				
				//driver.navigate().to(applicationURL + applicationContext);
				driver.navigate().to(applicationURL+applicationContext);
			

			} catch (Exception e) {
				e.printStackTrace();
			}

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_IE)) {
			log.info("---------------***LAUNCHING INTERNET EXPLORE***-----------");
			driver = new InternetExplorerDriver();
			driver.navigate().to(applicationURL + applicationContext);
		

		} else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_FIREFOX)) {
			log.info("-------------***LAUNCHING FIREFOX***--------------");
			driver = new FirefoxDriver();
			//driver.manage().window().maximize();
			// windowMaximizeFirefox();
			windowResize();
			driver.navigate().to(applicationURL + applicationContext);

		}

		else if (selectedBrowser.equalsIgnoreCase(Constants.BROWSER_OPERA)) {
			log.info("-------------***LAUNCHING OPERA***--------------");
			// WebDriver driver = new OperaDriver();
			
			 System.out.println("******entering window maximize********");
			  Robot robot; try { robot = new Robot();
			  robot.keyPress(KeyEvent.VK_ALT);
			  robot.keyPress(KeyEvent.VK_SPACE);
			  robot.keyRelease(KeyEvent.VK_ALT);
			  robot.keyRelease(KeyEvent.VK_SPACE);
			  robot.keyPress(KeyEvent.VK_X); robot.keyRelease(KeyEvent.VK_X); }
			  catch (AWTException e) {
			  
			  e.printStackTrace(); }
			  
		
	

		} else {
			throw new ScreenException(
					"------Only FireFox,InternetExplore and Chrome works-----------");
		}

	}
	
	public static void windowResize(){
		phrsc = new PhrescoUiConstants();		
		String resolution = phrsc.RESOLUTION;
		String[] tokens = resolution.split("x");
		String resolutionX=tokens[0];
		String resolutionY=tokens[1];		
		int x= Integer.parseInt(resolutionX);
		int y= Integer.parseInt(resolutionY);
		Dimension screenResolution = new Dimension(x,y);
		driver.manage().window().setSize(screenResolution);
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
			if (chromeService!=null) {				
				
				
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
			throws IOException, Exception {
		try {
			log.info("Entering:--------waitForElementPresent()--------");
			By by = By.xpath(locator);
			WebDriverWait wait = new WebDriverWait(driver, 10);
			log.info("Waiting:--------One second----------");
			wait.until(presenceOfElementLocated(by));
		}

		catch (Exception e) {
			File scrFile = ((TakesScreenshot) driver)
					.getScreenshotAs(OutputType.FILE);
			FileUtils.copyFile(scrFile,
					new File(GetCurrentDir.getCurrentDirectory() + "\\"
							+ methodName + ".png"));
			throw new RuntimeException("waitForElementPresent"
					+ super.getClass().getSimpleName() + " failed", e);

		}
	}

	Function<WebDriver, WebElement> presenceOfElementLocated(final By locator) {
		log.info("Entering:------presenceOfElementLocated()-----Start");
		return new Function<WebDriver, WebElement>() {
			public WebElement apply(WebDriver driver) {
				log.info("Entering:*********presenceOfElementLocated()******End");
				return driver.findElement(locator);

			}

		};

	}

	public void clickOnBrowse(String methodName) throws IOException, Exception{
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
			waitForElementPresent(uiConstants.BROWSE,methodName);
			getXpathWebElement(uiConstants.BROWSE);
			element.click();

	}
	 public  void Television(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.TELEVISION,methodName);
	    	getXpathWebElement(uiConstants.TELEVISION);
			element.click();
	    	waitForElementPresent(uiConstants.TELE_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.TELE_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
	    	
			
		}
	    public  void Computers(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.COMPUTERS,methodName);
	    	getXpathWebElement(uiConstants.COMPUTERS);
			element.click();
	    	waitForElementPresent(uiConstants.COMP_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.COMP_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
	    	
			
		}
	    public  void MobilePhones(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.MOBILE,methodName);
	    	getXpathWebElement(uiConstants.MOBILE);
			element.click();
	    	waitForElementPresent(uiConstants.MOBILE_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.MOBILE_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
	    	
			
		}
	    public  void AudioDevices(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	System.out.println("-----------------*********--------------------------");
	    	waitForElementPresent(uiConstants.AUDIO_DEVICES,methodName);
	    	getXpathWebElement(uiConstants.AUDIO_DEVICES);
			element.click();
	    	waitForElementPresent(uiConstants.AUDIO_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.AUDIO_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
	    	
		}
	    public  void Cameras(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.CAMERAS,methodName);
	    	getXpathWebElement(uiConstants.CAMERAS);
			element.click();
	    	waitForElementPresent(uiConstants.CAMERAS_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.CAMERAS_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
			
		}
	    public  void Tablets(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.TABLETS,methodName);
	    	 getXpathWebElement(uiConstants.TABLETS);
			element.click();
	    	waitForElementPresent(uiConstants.TABLETS_PROD1_DETAILS,methodName);
	    	 getXpathWebElement(uiConstants.TABLETS_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
			
		}
	    public  void MoviesnMusic(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.MOVIESnMUSIC,methodName);
	    	getXpathWebElement(uiConstants.MOVIESnMUSIC);
			element.click();
	    	waitForElementPresent(uiConstants.MnM_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.MnM_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
			
		}
	    public  void VideoGames(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.VIDEOGAMES,methodName);
	    	getXpathWebElement(uiConstants.VIDEOGAMES);
			element.click();
	    	waitForElementPresent(uiConstants.VIDGAMES_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.VIDGAMES_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
			
		}
	    public  void MP3Players(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.MP3PLAYERS,methodName);
	    	getXpathWebElement(uiConstants.MP3PLAYERS);
			element.click();
	    	waitForElementPresent(uiConstants.MP3_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.MP3_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
			
		}
	    public  void Accessories(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.ACCESSORIES,methodName);
	    	 getXpathWebElement(uiConstants.ACCESSORIES);
			element.click();
	    	waitForElementPresent(uiConstants.ACC_PROD1_DETAILS,methodName);
	    	getXpathWebElement(uiConstants.ACC_PROD1_DETAILS);
			element.click();
	    	waitForElementPresent(uiConstants.REVIEW,methodName);
			
		}
	    public void BillingInfo(String methodName)throws Exception {
	    	if (StringUtils.isEmpty(methodName)) {
				methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
			}
	    	waitForElementPresent(uiConstants.ADDTOCART,methodName);
	    	getXpathWebElement(uiConstants.ADDTOCART);
			element.click();
	    	waitForElementPresent(uiConstants.UPDATECART,methodName);
	    	getXpathWebElement(uiConstants.UPDATECART);
			element.click();
	    	waitForElementPresent(uiConstants.CHECKOUT,methodName);
	    	 getXpathWebElement(uiConstants.CHECKOUT);
			element.click();
	    	waitForElementPresent(uiConstants.CUSTOMERINFORMATION,methodName);
	    	getXpathWebElement(uiConstants.CUSTOMERINFORMATION);
			element.click();
			
			waitForElementPresent(uiConstants.EMAIL,methodName);
			
			
			getIdWebElement(uiConstants.EMAIL);
			element.click();
			
			element.sendKeys(this.mobileWidgetConstants.EMAIL_VALUE);
			
	    	waitForElementPresent(uiConstants.DELIVERYINFO,methodName);
	    	getXpathWebElement(uiConstants.DELIVERYINFO);
			element.click();
			 getIdWebElement(uiConstants.FIRSTNAME);
			element.sendKeys(this.mobileWidgetConstants.FIRSTNAME_VALUE);
			getIdWebElement(uiConstants.LASTNAME);
			element.sendKeys(this.mobileWidgetConstants.LASTNAME_VALUE);
			 getIdWebElement(uiConstants.COMPANY);
			element.sendKeys(this.mobileWidgetConstants.COMPANY_VALUE);
			getIdWebElement(uiConstants.ADDRESS1);
			element.sendKeys(this.mobileWidgetConstants.ADDRESS1_VALUE);
			getIdWebElement(uiConstants.ADDRESS2);
			element.sendKeys(this.mobileWidgetConstants.ADDRESS2_VALUE);
			getIdWebElement(uiConstants.CITY);
			element.sendKeys(this.mobileWidgetConstants.CITY_VALUE);
			getIdWebElement(uiConstants.STATE);
			element.sendKeys(this.mobileWidgetConstants.STATE_VALUE);
			getIdWebElement(uiConstants.POSTCODE);
			element.sendKeys(this.mobileWidgetConstants.POSTALCODE_VALUE);
			 getIdWebElement(uiConstants.PHONENUMBER);
			element.sendKeys(this.mobileWidgetConstants.PHONENUMBER_VALUE);
	    	waitForElementPresent(uiConstants.BILLINGINFO,methodName);
	    	getXpathWebElement(uiConstants.BILLINGINFO);
			element.click();
			Thread.sleep(5000);
	    	waitForElementPresent(uiConstants.CHECKADDRESS,methodName);
	    	getXpathWebElement(uiConstants.CHECKADDRESS);
			element.click();
	    	waitForElementPresent(uiConstants.PAYMENTMETHODS,methodName);
	    	getXpathWebElement(uiConstants.PAYMENTMETHODS);
			element.click();
	    	waitForElementPresent(uiConstants.CASHONDELIVERY,methodName);
	    	getXpathWebElement(uiConstants.CASHONDELIVERY);
			element.click();
	    	waitForElementPresent(uiConstants.ORDERCOMMENTS,methodName);
	    	getXpathWebElement(uiConstants.ORDERCOMMENTS);
			element.click();
			getIdWebElement(uiConstants.GIVECOMMENTS);
			element.sendKeys(this.mobileWidgetConstants.ORDERCOMMENTS_VALUE);
	    	waitForElementPresent(uiConstants.REVIEWORDER,methodName);
	    	getXpathWebElement(uiConstants.REVIEWORDER);
			element.click();
	    	waitForElementPresent(uiConstants.SUBMITORDER,methodName);
	    	getXpathWebElement(uiConstants.SUBMITORDER);
			element.click();
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
