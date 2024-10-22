package com.example.springbootyqjy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.UUID;

@RestController
public class TestMqController {

    @Resource
    private NotifyMsgProducer notifyMsgProducer;

    @GetMapping("/produce")
    public String produce() {

        notifyMsgProducer.producer();
        return "success";
    }


}
