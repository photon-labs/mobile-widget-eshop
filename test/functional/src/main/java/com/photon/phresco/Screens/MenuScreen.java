package com.photon.phresco.Screens;

import java.io.IOException;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

import com.photon.phresco.uiconstants.WidgetData;
import com.photon.phresco.uiconstants.UIConstants;






public class MenuScreen extends WebDriverAbstractBaseScreen{
	UIConstants phrsc;
	private Log log = LogFactory.getLog(getClass());
	public WebDriverBaseScreen element;
	public MenuScreen(UIConstants phrsc,String methodName) throws Exception {
		this.phrsc = phrsc;
		if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
		waitForElementPresent(phrsc.BROWSE,methodName);
		element = getXpathWebElement(phrsc.BROWSE);
		element.click();
    	
	}

    
    public  void Television(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.TELEVISION,methodName);
    	element = getXpathWebElement(phrsc.TELEVISION);
		element.click();
    	waitForElementPresent(phrsc.TELE_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.TELE_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
    	
		
	}
    public  void Computers(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.COMPUTERS,methodName);
    	element = getXpathWebElement(phrsc.COMPUTERS);
		element.click();
    	waitForElementPresent(phrsc.COMP_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.COMP_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
    	
		
	}
    public  void MobilePhones(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.MOBILE,methodName);
    	element = getXpathWebElement(phrsc.MOBILE);
		element.click();
    	waitForElementPresent(phrsc.MOBILE_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.MOBILE_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
    	
		
	}
    public  void AudioDevices(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.AUDIO_DEVICES,methodName);
    	element = getXpathWebElement(phrsc.AUDIO_DEVICES);
		element.click();
    	waitForElementPresent(phrsc.AUDIO_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.AUDIO_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
    	
	}
    public  void Cameras(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.CAMERAS,methodName);
    	element = getXpathWebElement(phrsc.CAMERAS);
		element.click();
    	waitForElementPresent(phrsc.CAMERAS_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.CAMERAS_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
		
	}
    public  void Tablets(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.TABLETS,methodName);
    	element = getXpathWebElement(phrsc.TABLETS);
		element.click();
    	waitForElementPresent(phrsc.TABLETS_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.TABLETS_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
		
	}
    public  void MoviesnMusic(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.MOVIESnMUSIC,methodName);
    	element = getXpathWebElement(phrsc.MOVIESnMUSIC);
		element.click();
    	waitForElementPresent(phrsc.MnM_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.MnM_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
		
	}
    public  void VideoGames(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.VIDEOGAMES,methodName);
    	element = getXpathWebElement(phrsc.VIDEOGAMES);
		element.click();
    	waitForElementPresent(phrsc.VIDGAMES_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.VIDGAMES_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
		
	}
    public  void MP3Players(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.MP3PLAYERS,methodName);
    	element = getXpathWebElement(phrsc.MP3PLAYERS);
		element.click();
    	waitForElementPresent(phrsc.MP3_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.MP3_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
		
	}
    public  void Accessories(String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.ACCESSORIES,methodName);
    	element = getXpathWebElement(phrsc.ACCESSORIES);
		element.click();
    	waitForElementPresent(phrsc.ACC_PROD1_DETAILS,methodName);
    	element = getXpathWebElement(phrsc.ACC_PROD1_DETAILS);
		element.click();
    	waitForElementPresent(phrsc.REVIEW,methodName);
		
	}
    public void BillingInfo(WidgetData mobwigdata,String methodName)throws Exception {
    	if (StringUtils.isEmpty(methodName)) {
			methodName = Thread.currentThread().getStackTrace()[1].getMethodName();;
		}
    	waitForElementPresent(phrsc.ADDTOCART,methodName);
    	element = getXpathWebElement(phrsc.ADDTOCART);
		element.click();
    	waitForElementPresent(phrsc.UPDATECART,methodName);
    	element = getXpathWebElement(phrsc.UPDATECART);
		element.click();
    	waitForElementPresent(phrsc.CHECKOUT,methodName);
    	element = getXpathWebElement(phrsc.CHECKOUT);
		element.click();
    	waitForElementPresent(phrsc.CUSTOMERINFORMATION,methodName);
    	element = getXpathWebElement(phrsc.CUSTOMERINFORMATION);
		element.click();
		element = getIdWebElement(phrsc.EMAIL);
		element.type(mobwigdata.EMAIL_VALUE);
    	waitForElementPresent(phrsc.DELIVERYINFO,methodName);
    	element = getXpathWebElement(phrsc.DELIVERYINFO);
		element.click();
		element = getIdWebElement(phrsc.FIRSTNAME);
		element.type(mobwigdata.FIRSTNAME_VALUE);
		element = getIdWebElement(phrsc.LASTNAME);
		element.type(mobwigdata.LASTNAME_VALUE);
		element = getIdWebElement(phrsc.COMPANY);
		element.type(mobwigdata.COMPANY_VALUE);
		element = getIdWebElement(phrsc.ADDRESS1);
		element.type(mobwigdata.ADDRESS1_VALUE);
		element = getIdWebElement(phrsc.ADDRESS2);
		element.type(mobwigdata.ADDRESS2_VALUE);
		element = getIdWebElement(phrsc.CITY);
		element.type(mobwigdata.CITY_VALUE);
		element = getIdWebElement(phrsc.STATE);
		element.type(mobwigdata.STATE_VALUE);
		element = getIdWebElement(phrsc.POSTCODE);
		element.type(mobwigdata.POSTALCODE_VALUE);
		element = getIdWebElement(phrsc.PHONENUMBER);
		element.type(mobwigdata.PHONENUMBER_VALUE);
    	waitForElementPresent(phrsc.BILLINGINFO,methodName);
    	element = getXpathWebElement(phrsc.BILLINGINFO);
		element.click();
		Thread.sleep(5000);
    	waitForElementPresent(phrsc.CHECKADDRESS,methodName);
    	element = getXpathWebElement(phrsc.CHECKADDRESS);
		element.click();
    	waitForElementPresent(phrsc.PAYMENTMETHODS,methodName);
    	element = getXpathWebElement(phrsc.PAYMENTMETHODS);
		element.click();
    	waitForElementPresent(phrsc.CASHONDELIVERY,methodName);
    	element = getXpathWebElement(phrsc.CASHONDELIVERY);
		element.click();
    	waitForElementPresent(phrsc.ORDERCOMMENTS,methodName);
    	element = getXpathWebElement(phrsc.ORDERCOMMENTS);
		element.click();
		element = getIdWebElement(phrsc.GIVECOMMENTS);
		element.type(mobwigdata.ORDERCOMMENTS_VALUE);
    	waitForElementPresent(phrsc.REVIEWORDER,methodName);
    	element = getXpathWebElement(phrsc.REVIEWORDER);
		element.click();
    	waitForElementPresent(phrsc.SUBMITORDER,methodName);
    	element = getXpathWebElement(phrsc.SUBMITORDER);
		element.click();
    }


}
