package com.quiz.server;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootTest
class ServerApplicationTests {
	@BeforeAll
	static void loadEnv(){
		Dotenv dotenv=Dotenv.load();
		dotenv.entries().forEach(entry->{
			System.setProperty(entry.getKey(),entry.getValue());
		});
	}

	@Test
	void contextLoads() {
	}

}
