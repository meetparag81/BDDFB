package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions(
		features = "G:\\Javaprogramming\\FBBDD\\FacebookBDD\\src\\main\\java\\features\\Login.feature",
		glue= {"StepDefinations"},
		format={"pretty","html:test-outout","json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},
		monochrome=true,
			strict = true, //it will check if any step is not defined in step definition file
		dryRun = false)


public class TestRunner 
{		
			

}
