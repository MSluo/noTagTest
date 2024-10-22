package com.example.springbootyqjy;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;

import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class QueueConfig {
    private static final String QUEUE = "queue";


    @Bean
    public Queue queue() {
        return new Queue(QUEUE);
    }



}
