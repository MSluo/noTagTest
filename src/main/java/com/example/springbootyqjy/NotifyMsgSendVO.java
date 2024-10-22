package com.example.springbootyqjy;

import lombok.Data;

import java.io.Serializable;
@Data
public class NotifyMsgSendVO implements Serializable {

    private static final long serialVersionUID = 5905249092659173678L;

    private String priKey;

    private String businessType;

    private String phoneNum;

    private String msg;

}
