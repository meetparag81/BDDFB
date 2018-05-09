package StepDefinations;
//small modification
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination 
{
	WebDriver driver;
	@Given("^user is already on login page$")
	public void user_is_already_on_login_page() 
	{
		System.setProperty("webdriver.gecko.driver","G:\\Javaprogramming\\Selenium\\Selenium Setup\\geckodriver.exe");
		driver = new FirefoxDriver();
	 driver.get("https://www.facebook.com/");
	    
	    
	}

	@When("^Title of login page is freecrm$")
	public void title_of_login_page_is_freecrm()  {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() throws Throwable 
	{
	    // Write code here that turns the phrase above into concrete actions
	    
	}

}
