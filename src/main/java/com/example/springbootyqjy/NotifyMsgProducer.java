package com.example.springbootyqjy;

import com.example.springbootyqjy.NotifyMsgSendVO;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
@Component
public class NotifyMsgProducer {

    @Resource
    private RabbitTemplate rabbitTemplate;

    public void producer(){
        String message = "疫情期间注意防护";
        System.out.println("乡长说：" + message);
        rabbitTemplate.convertAndSend("queue", message);
    }

    public void send(NotifyMsgSendVO notifyMsgSendVO) {
        System.out.println("收到："+notifyMsgSendVO);
        this.rabbitTemplate.convertAndSend("",
                "Queue", notifyMsgSendVO);
    }

}
