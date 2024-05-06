package com.zosh.service;

//import com.zosh.dao.UserDaoImpl;
import com.zosh.dao.UserDaoImpl;
import com.zosh.dto.UserDto;
import com.zosh.dto.UserLoginDto;
import com.zosh.exception.UserException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zosh.modal.User;

@Service
public class UserServiceImplementation implements UserService{


	@Autowired
	private UserDaoImpl dao;
	


	@Override
	public void createNewUser(UserDto user) throws UserException {


//		try {
			if (user == null) {
				throw new IllegalArgumentException("user data empty");
			}

			int isEmailExist = dao.checkUserByEmail(user.getEmail());
			if (isEmailExist > 0) {

				throw new UserException("Email Is Already Used With Another Account");
			}


		User userData = new User();

		userData.setFirstName(user.getFirstName());
		userData.setLastName(user.getLastName());
		userData.setEmail(user.getEmail());
		userData.setPassword(user.getPassword());
		userData.setRole(user.getRole());
		userData.setMobile(user.getMobile());

		dao.createUser(userData);
	}

	@Override
	public int findUser(UserDto user) throws UserException{
		if (user == null) {
			throw new IllegalArgumentException("user data empty");
		}
		int isEmailExist = dao.checkUserByEmail(user.getEmail());
		if (isEmailExist == 0) {

			throw new UserException("User not signed up");
		}

		return 1;

	}

	@Override
	public String getUserByEmail(UserLoginDto user) throws UserException{
		if (user == null) {
			throw new IllegalArgumentException("user data empty");
		}
		String firstName = dao.findUserByEmail(user.getEmail());
       if(firstName == null){
		   throw new UserException("User not signed up");
	   }
	   return firstName;

	}





}
