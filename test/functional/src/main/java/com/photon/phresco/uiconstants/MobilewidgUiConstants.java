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
package com.photon.phresco.uiconstants;

import java.lang.reflect.Field;

public class MobilewidgUiConstants {
	
	private ReadXMLFile readXml;
	
	public String PROTOCOL="protocol";
	public String SERVER_PORT ="server.port";
	public String CONTEXT = "context";	
	public String SERVER_HOST = "server.host";
	public String HOST = "host";
	public String PORT = "port";
	public String BROWSER = "Browser";
	public String SPEED = "speed";
    public String BROWSE="browseWidget";
	public String BROWSE_BACK="browsepgBackButton";
	public String TELEVISION = "televisiontab";
	public String COMPUTERS = "computerstab";
	public String MOBILE = "mobiletab";
	public String AUDIO_DEVICES = "audioDevicestab";
	public String CAMERAS = "camerastab";
	public String TABLETS = "tabletstab";
	public String MOVIESnMUSIC = "moviesNmusictab";
	public String VIDEOGAMES = "videoGamestab";
	public String MP3PLAYERS = "mp3Playerstab";
	public String ACCESSORIES = "accessoriestab";
	public String MORE = "moretab";
	public String HOME = "hometab";
	public String TELE_PROD1_DETAILS="teleProd1Details";
	public String COMP_PROD1_DETAILS="compProd1Details";
	public String MOBILE_PROD1_DETAILS="mobileProd1Details";
	public String AUDIO_PROD1_DETAILS="audioProd1Details";
	public String CAMERAS_PROD1_DETAILS="camerasProd1Details";
	public String TABLETS_PROD1_DETAILS="tabProd1Details";
	public String MnM_PROD1_DETAILS="MnMProd1Details";
	public String VIDGAMES_PROD1_DETAILS="vidGamesProd1Details";
	public String MP3_PROD1_DETAILS="mp3Prod1Details";
	public String ACC_PROD1_DETAILS="accessoriesProd1Details";
    public String STATE="billInfoState";
	public String STATE_VALUE="billInfoStateValue";
	public String POSTALCODE_VALUE="billInfoPostCodeValue";
	public String PHONENUMBER="billInfoPhoneNumber";
	public String PHONENUMBER_VALUE="billInfoPhoneNumberValue";
	public String ADDTOCART="addToCart";
	public String UPDATECART="updateCart";
	public String VIEWMYCART="viewMyCart";
	public String CHECKOUT="checkout";
	public String CUSTOMERINFORMATION="custInfo";
	public String EMAIL="billInfoEmail";
	public String EMAIL_VALUE="billInfoEmailValue";
	public String DELIVERYINFO="deliveryInfo";
	public String FIRSTNAME="billInfoFirstName";
	public String FIRSTNAME_VALUE="billInfoFirstNameValue";
	public String LASTNAME="billInfoLastName";
	public String LASTNAME_VALUE="billInfoLastNameValue";
	public String COMPANY="billInfoCompany";
	public String COMPANY_VALUE="billInfoCompanyValue";
	public String ADDRESS1="billInfoAddress1";
	public String ADDRESS1_VALUE="billInfoAddress1Value";
	public String ADDRESS2="billInfoAddress2";
	public String ADDRESS2_VALUE="billInfoAddress2Value";
	public String CITY="billInfoCity";
	public String CITY_VALUE="billInfoCityValue";
	public String POSTCODE="billInfoPostCode";
	public String BILLINGINFO="billInfo";
	public String CHECKADDRESS="billInfocheckAddress";
	public String PAYMENTMETHODS="billInfopaymentMethods";
	public String CASHONDELIVERY="billInfoPayMethodCOD";
	public String CHEQUEorCASH = "billInfoPayMethodCheqOrCash";
	public String ORDERCOMMENTS="billInfoComments";
	public String ORDERCOMMENTS_VALUE="billInfoCommentsValue";
	public String GIVECOMMENTS="billInfoGiveComments";
	public String REVIEWORDER="reviewOrder";
	public String REVIEW="review";
	public String SUBMITORDER="submitOrder";
	 
	public MobilewidgUiConstants() {
		try {
			readXml = new ReadXMLFile();
			Field[] arrayOfField1 = super.getClass().getFields();
			Field[] arrayOfField2 = arrayOfField1;
			int i = arrayOfField2.length;
			for (int j = 0; j < i; ++j) {
				Field localField = arrayOfField2[j];
				Object localObject = localField.get(this);
				if (localObject instanceof String)
					localField
							.set(this, readXml.getValue((String) localObject));

			}
		} catch (Exception localException) {
			throw new RuntimeException("Loading "
					+ super.getClass().getSimpleName() + " failed",
					localException);
		}
	}
}
