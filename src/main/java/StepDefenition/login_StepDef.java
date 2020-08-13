package StepDefenition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class login_StepDef {

	
	WebDriver driver;
	

	@Given("^Already in loging page$")
	public void already_in_loging_page()  {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Kiriti\\Test_Automation\\Java_Selenium\\chromedriver_win32_Ver84\\chromedriver.exe");
		driver = new ChromeDriver(); 
		driver.get("https://www.target.com.au/login");
	    
	}

	@When("^confirm login page$")
	public void confirm_login_page()  {
	   String Title = driver.getTitle();
	   System.out.println(Title);
	
	}

	@Then("^enter user name \"(.*)\"$")
	public void enter_user_name(String username)  {
		driver.findElement(By.id("j_username")).sendKeys(username);
	    
	}

	@And("^enter password \"(.*)\"$")
	public void enter_password(String password)  {
		driver.findElement(By.id("j_password")).sendKeys(password);
	}

	@Then("^press login button$")
	public void press_login_button()  {
	   driver.findElement(By.id("login")).click();
	   String Title = driver.getTitle();
	   System.out.println(Title);
	}
	@Then("^close the browser$")
	public void close_the_browser() {
	
		driver.close();
	}
	

}
