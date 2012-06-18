/*
 * ###
 * PHR_HTML5MobileWidget
 * %%
 * Copyright (C) 1999 - 2012 Photon Infotech Inc.
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ###
 */
package com.photon.phresco.Screens;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.WebDriverWait;
//import org.testng.TestException;

import com.google.common.base.Function;
import com.photon.phresco.selenium.util.GetCurrentDir;
import com.photon.phresco.selenium.util.ScreenException;

public class WebDriverAbstractBaseScreen extends BaseScreen {
	
	public static WebElement element;	
	private Log log = LogFactory.getLog(getClass());
	
	protected WebDriverAbstractBaseScreen(){
		log.info("Entering:********WebDriverAbstractBaseScreen Constructor********");
	}

	public WebDriverBaseScreen getXpathWebElement(String xpath)throws Exception{
		log.info("Entering:********getXpathWebElement********");
		try{
			
			element=driver.findElement(By.xpath(xpath));
			System.out.println("------------------->"+element);
			
		}catch(Throwable t){
			log.info("Entering:*********Exception in getXpathWebElement()******");
			t.printStackTrace();
			
		}
		return new WebDriverBaseScreen();
	}
	public WebDriverBaseScreen getIdWebElement(String id)throws ScreenException{
		log.info("Entering:****getIdWebElement**********");
		try{
		element=driver.findElement(By.id(id));
		System.out.println("------------------->"+element);
		
		}catch(Throwable t){
			log.info("Entering:*********Exception in getIdWebElement()******");
			t.printStackTrace();
			
		}
		return new WebDriverBaseScreen();
	}
	public WebDriverBaseScreen getcssWebElement(String selector)throws ScreenException{
		log.info("Entering:****getIdWebElement**********");
		try{
		element=driver.findElement(By.cssSelector(selector));
		
		
		
		}catch(Throwable t){
			log.info("Entering:*********Exception in getIdWebElement()******");
			
			t.printStackTrace();
			
		}
		return new WebDriverBaseScreen();
	}
	
	public void waitForElementPresent(String locator, String methodName) throws IOException, Exception{
		try{
		log.info("Entering:*********waitForElementPresent()******");
	    By by= By.xpath(locator);
		WebDriverWait wait=new WebDriverWait(driver, 10);
		log.info("Waiting:*************One second***********");
		wait.until(presenceOfElementLocated(by));
		}
		
		catch(Exception e){			
			File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		    FileUtils.copyFile(scrFile, new File(GetCurrentDir.getCurrentDirectory()+"\\" + methodName + ".png"));
//		    e.printStackTrace();
		    throw new Exception("********Exception*******");
		    
		}
	}
	
	Function<WebDriver, WebElement> presenceOfElementLocated(final By locator) { 
		log.info("Entering:*********presenceOfElementLocated()******Start");
		  return new Function<WebDriver, WebElement>() { 
		    public WebElement apply(WebDriver driver) { 
		    	log.info("Entering:*********presenceOfElementLocated()******End");
		     return driver.findElement(locator);
		     
		    }
		    
		  };
	
		 }
	
	
	}
	
	
	
	
	
	
	

