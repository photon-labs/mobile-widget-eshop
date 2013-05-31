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
package com.photon.phresco.uiconstants;

import java.lang.reflect.Field;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class MobileWidgetData {

	private Log log = LogFactory.getLog("MobileWidgetData");

	public String stateValue = "billInfoStateValue";
	public String postalCodeValue = "billInfoPostCodeValue";
	public String orderCommentValue = "billInfoCommentsValue";
	public String cityValue = "billInfoCityValue";
	public String address2Value = "billInfoAddress2Value";
	public String address1Value = "billInfoAddress1Value";
	public String companyValue = "billInfoCompanyValue";
	public String lastNameValue = "billInfoLastNameValue";
	public String firstNameValue = "billInfoFirstNameValue";
	public String emailValue = "billInfoEmailValue";
	public String phoneNumberValue = "billInfoPhoneNumberValue";

	public MobileWidgetData() {
		try {
			ReadXMLFile readXml = new ReadXMLFile();
			//readXml.loadMobileWidgetData();
			Field[] arrayOfField = this.getClass().getDeclaredFields();
			for (Field field : arrayOfField) {
				field.setAccessible(true);
				Object localObject = field.get(this);
				if (localObject instanceof String) {
					field.set(this, readXml.getValue((String) localObject));
				}
			}
		} catch (Exception localException) {
			log.info("Exception in MobileWidgetData"
					+ localException.getMessage());
		}
	}

	public String getStateValue() {
		return stateValue;
	}

	public void setStateValue(String stateValue) {
		this.stateValue = stateValue;
	}

	public String getPostalCodeValue() {
		return postalCodeValue;
	}

	public void setPostalCodeValue(String postalCodeValue) {
		this.postalCodeValue = postalCodeValue;
	}

	public String getOrderCommentValue() {
		return orderCommentValue;
	}

	public void setOrderCommentValue(String orderCommentValue) {
		this.orderCommentValue = orderCommentValue;
	}

	public String getCityValue() {
		return cityValue;
	}

	public void setCityValue(String cityValue) {
		this.cityValue = cityValue;
	}

	public String getAddress2Value() {
		return address2Value;
	}

	public void setAddress2Value(String address2Value) {
		this.address2Value = address2Value;
	}

	public String getAddress1Value() {
		return address1Value;
	}

	public void setAddress1Value(String address1Value) {
		this.address1Value = address1Value;
	}

	public String getCompanyValue() {
		return companyValue;
	}

	public void setCompanyValue(String companyValue) {
		this.companyValue = companyValue;
	}

	public String getLastNameValue() {
		return lastNameValue;
	}

	public void setLastNameValue(String lastNameValue) {
		this.lastNameValue = lastNameValue;
	}

	public String getFirstNameValue() {
		return firstNameValue;
	}

	public void setFirstNameValue(String firstNameValue) {
		this.firstNameValue = firstNameValue;
	}

	public String getEmailValue() {
		return emailValue;
	}

	public void setEmailValue(String emailValue) {
		this.emailValue = emailValue;
	}

	public String getPhoneNumberValue() {
		return phoneNumberValue;
	}

	public void setPhoneNumberValue(String phoneNumberValue) {
		this.phoneNumberValue = phoneNumberValue;
	}
}
