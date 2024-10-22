package com.example.springbootyqjy;

import org.springframework.amqp.rabbit.annotation.Queue;
import org.springframework.amqp.rabbit.annotation.RabbitHandler;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
@RabbitListener(queues = "queue")
public class NotifyMsgConsumer {

    @RabbitHandler
    public void receive(Object msg) {
        System.out.println("接收到消息--" + msg);
    }

}
