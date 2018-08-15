package StepDefinations;
import org.openqa.selenium.By;
//small modification
import org.openqa.selenium.WebDriver;



import com_FB_Base.TestBase;
import com_FB_Page.LoginPage;
import com_FB_Page.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefination extends TestBase 
{
	LoginPage LoginPage;
	HomePage HomePage;
	

	WebDriver driver;
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() 
	{
		TestBase.initalization();	
	}

	@When("^Login page Title is facebook$")
	public void Loginpage_Title_is_facebook() 
	{
		LoginPage = new LoginPage();
		String Actual= LoginPage.validateloginpagetitle();
		String Expected= "Facebook – log in or sign up";
	 Assert.assertEquals(Expected, Actual);
	    
	}

	

	@Then("^userisonHomePage\"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_is_on_home_page(String un, String psw) 
	{
		HomePage = LoginPage.LogintoFB(un, psw);
	   String Actual= driver.getTitle();
	   System.out.println(Actual);
	    
	}
	
	@Then("^user close the browser$")
	public void user_close_the_browser() 
	{
	 driver.quit();   
	}

}
