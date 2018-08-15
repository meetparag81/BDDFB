package com_FB_Base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.Reader;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.WebDriverEventListener;


import com_FB_TestUtil.TestUtil;



public class TestBase 
{
	public static WebDriver driver;
	  public static Properties prop;
	  public static WebDriverEventListener e_driver;
	    public TestBase() 
	    {
	    	try 
				{
					 prop = new Properties();
					 FileInputStream ip = new FileInputStream("G:\\Javaprogramming\\FBBDD\\FacebookBDD\\src\\main\\java\\com_FB_Config\\config.properties");
					prop.load(ip);
				} 
	    	catch (Exception e) 
	    	{
					System.out.println("Exception is seen");
	    	}
		}
	    
	  
	  public static void initalization()
	  {
		  String browser=prop.getProperty("browser");
			 if(browser.equals("firefox"))
			 {
				 System.setProperty("webdriver.gecko.driver","G:\\Javaprogramming\\Selenium\\Selenium Setup\\geckodriver.exe");
					driver = new FirefoxDriver(); 
			 }		 
			 else if(browser.equals("chrome"))
			 {
				 System.setProperty("webdriver.chrome.driver" ,"G:\\Javaprogramming\\Selenium\\Selenium Setup\\chromedriver\\chromedriver.exe");
					driver = new ChromeDriver(); 
			 }
			 System.out.println("Browserlaunched");
			
			//driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT, TimeUnit.SECONDS);
			driver.get(prop.getProperty("url"));
			
			
		  
	  }
		
		
	
	
	
	

}
