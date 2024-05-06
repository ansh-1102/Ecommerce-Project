package com.zosh.controller;

import com.zosh.dto.UserDto;
import com.zosh.dto.UserLoginDto;
import com.zosh.service.UserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;


import com.zosh.exception.UserException;

import jakarta.validation.Valid;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/auth")
public class AuthController {




	@Autowired
	UserServiceImplementation userService;

	
	@PostMapping("/signup")
	public ResponseEntity<?> createUserHandler(@Valid @RequestBody UserDto user) {

//            try{
//                 userService.createNewUser(user);
//                 return ResponseEntity.ok().body("User created!");
//             }
//             catch(UserException e){
//                 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//
//             }
//             catch (Exception e){
//                 return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//
//             }
//        try {
//            userService.createNewUser(user);
//            // User created successfully, return a 201 Created response with a message
//            return ResponseEntity.status(HttpStatus.CREATED).body("User created successfully!");
//        } catch (UserException e) {
//            // User creation failed with UserException, return a 400 Bad Request response with the exception message
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
//        } catch (Exception e) {
//            // Unexpected exception, return a 500 Internal Server Error response
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred during user creation.");
//        }
        try {
            userService.createNewUser(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(Collections.singletonMap("message", "User created successfully"));
        } catch (UserException e) {
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("error", "Internal server error"));
        }


	}


	@PostMapping("/signin")
    public ResponseEntity<?> signin( @Valid @RequestBody UserDto user) {


        try{
             userService.findUser(user);

             return ResponseEntity.status(HttpStatus.CREATED).body(Collections.singletonMap("message", "Logged in successfully"));


        }
        catch(UserException e){
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", e.getMessage()));

        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("error", "Internal server error"));

        }


    }

    @PostMapping("/profile")
    public ResponseEntity<?> getUser(@Valid @RequestBody UserLoginDto user) {
        try{
            String name = userService.getUserByEmail(user);

            return ResponseEntity.ok(Collections.singletonMap("name", name));


        }
        catch(UserException e){
            return ResponseEntity.badRequest().body(Collections.singletonMap("error", e.getMessage()));

        }
        catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Collections.singletonMap("error", "Internal server error"));

        }


    }


}
