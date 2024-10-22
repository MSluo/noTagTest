package com.example.springbootyqjy;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.io.FileWriter;
import java.io.IOException;
import java.net.*;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.concurrent.TimeUnit;

@SpringBootTest
class SpringbootyqjyApplicationTests {


    @Resource
    private NotifyMsgProducer notifyMsgProducer;


    @Test
    public void sendSyslog() {

//        String SERVER_HOSTNAME = "192.168.31.250";
////        String SERVER_HOSTNAME = "192.168.200.253";
////        String SERVER_HOSTNAME = "192.168.31.163";
//
////        SERVER_HOSTNAME = ipConfig.getFileContent();
//
//        System.out.println(SERVER_HOSTNAME);
//        System.out.println(SERVER_HOSTNAME.length());
//        // 服务器端口
////        final int SERVER_PORT = 514;
//        final int SERVER_PORT = 26668;
//        // 本地发送端口
//        final int LOCAL_PORT = 8887;
////        final int LOCAL_PORT = 26668;
//
//
//        try {
//            // 1，创建udp服务。通过DatagramSocket对象。
//            DatagramSocket socket = new DatagramSocket(LOCAL_PORT);
//            // 2，确定数据，并封装成数据包。DatagramPacket(byte[] buf, int length, InetAddress
//            // address, int port)
////            byte[] buf = "{\"FoundTime\":1713773775,\"DPort\":53,\"ThreatDesc\":\"[UDP]svchost.exe -->10.30.139.199 被自学习_Windows10_规则 纪录, 执行成功\",\"AttackStage\":\"\",\"CompromiseState\":\"\",\"SPort\":59618,\"ThreatType\":\"\",\"LogType\":1,\"Dip\":\"10.20.21.2\",\"ThreatName\":\"主机加固-网络白名单事件\",\"HazardLevel\":\"\",\"AttackConfidence\":\"\",\"AlarmVendor\":\"中核武汉\",\"Lip\":\"10.30.139.199\",\"DisposeSuggest\":\"\",\"Type\":\"\",\"AlarmProduct\":\"主机加固系统\",\"AttackResult\":\"\",\"Sip\":\"10.30.139.199\",\"Protocol\":\"UDP\",\"ThreatClass\":\"\",\"Logid\":164,\"Solution\":\"\"}\n".getBytes();
//            byte[] buf = "-----------------------------{\"DataType\":\"reportProcessChange\",\"Ip\":\"10.30.139.199\",\"Content\":[{\"procName\":\"\",\"product\":\"\",\"policyAction\":1,\"polActRes\":1,\"sourceFileDesc\":\"\",\"occurTime\":\"\",\"company\":\"\",\"policyName\":{}}],\"ThreatDesc\":\"[UDP]svchost.exe -->10.30.139.199 被自学习_Windows10_规则 纪录, 执行成功\",\"SPort\":59618,\"ThreatType\":\"\",\"LogType\":1,\"Dip\":\"10.20.21.2\",\"ThreatName\":\"主机加固-网络白名单事件\",\"HazardLevel\":\"\",\"AttackConfidence\":\"\",\"AlarmVendor\":\"中核武汉\",\"Lip\":\"10.30.139.199\",\"DisposeSuggest\":\"\",\"Type\":\"\",\"AlarmProduct\":\"主机加固系统\",\"AttackResult\":\"\",\"Sip\":\"10.30.139.199\",\"Protocol\":\"UDP\",\"ThreatClass\":\"\",\"Logid\":164,\"Solution\":\"\"}".getBytes();
//            DatagramPacket dp = new DatagramPacket(buf, buf.length, InetAddress.getByName(SERVER_HOSTNAME),
//                    SERVER_PORT);
//
//
//            socket.send(dp);
//
//
//            socket.close();
//
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//

    }



    @Test
    public void serviceLis(){
        notifyMsgProducer.producer();
        notifyMsgProducer.producer();

        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }





}
