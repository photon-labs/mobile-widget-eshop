package com.photon.phresco;

import junit.framework.Test;
import junit.framework.TestSuite;


public class AllTest {

	public static Test suite() {
		TestSuite suite = new TestSuite(AllTest.class.getName());
		//$JUnit-BEGIN$
		suite.addTestSuite(AppTest.class);
		//$JUnit-END$
		return suite;
	}

}