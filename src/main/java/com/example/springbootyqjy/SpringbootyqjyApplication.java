package com.example.springbootyqjy;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.io.*;
import java.net.InetAddress;


@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
@ServletComponentScan
@RestController
public class SpringbootyqjyApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootyqjyApplication.class, args);


    }

}




@Component
class MyRunner implements ApplicationRunner {


    @Override
    public void run(ApplicationArguments args) throws Exception {


    }


}