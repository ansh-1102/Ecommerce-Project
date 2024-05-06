package com.zosh.dao;

import com.zosh.modal.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class UserDaoImpl implements UserDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;
    @Override
    public void createUser(User user) {
        String sql = "INSERT INTO users (first_name,last_name,password,email,role,mobile) VALUES (?, ?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, user.getFirstName(), user.getLastName(), user.getPassword(), user.getEmail(),user.getRole(), user.getMobile() );
    }

    public int checkUserByEmail(String email) {
        String sql = "select count(*) from users where email=?";
        int count = jdbcTemplate.queryForObject(sql, Integer.class, email);
        return count;

    }
    public String findUserByEmail(String email){
        String sql = "SELECT first_name FROM users WHERE email = ?";
        return jdbcTemplate.queryForObject(sql, new Object[]{email}, String.class);
    }
}
