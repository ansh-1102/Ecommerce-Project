package com.zosh.dao;

import com.zosh.modal.User;

public interface UserDao {

    void createUser(User user);
    public int checkUserByEmail(String email);
    public String findUserByEmail(String email);
}
