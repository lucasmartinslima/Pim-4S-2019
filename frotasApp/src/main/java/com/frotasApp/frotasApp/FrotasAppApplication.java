package com.frotasApp.frotasApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Controller;

@Controller
@SpringBootApplication
@ComponentScan
public class FrotasAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(FrotasAppApplication.class, args);
	}

}
