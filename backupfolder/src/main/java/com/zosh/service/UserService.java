package com.zosh.service;

import java.util.List;

import com.zosh.dao.UserDao;
import com.zosh.dto.UserDto;
import com.zosh.dto.UserLoginDto;
import com.zosh.exception.UserException;
import com.zosh.modal.User;
import org.springframework.beans.factory.annotation.Autowired;

public interface UserService {

    void createNewUser(UserDto user) throws UserException;
    public int findUser(UserDto user) throws UserException;
    public String getUserByEmail(UserLoginDto user) throws UserException;

}
