package com.company.user.user.controller;

import com.company.user.user.model.User;
//import com.company.user.user.services.;
import com.company.user.user.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin(origins = "*")
public class userController {

    @Autowired
     private UserServices userServices;

    @RequestMapping(method = RequestMethod.GET,value = "/users")
    public List<User> getAllUsers()
    {
        return userServices.getAllUsers();

    }
    @RequestMapping(method = RequestMethod.GET,value = "/users/{email}")
    public Optional<User> getUsersInfo(@PathVariable String email)
    {
        return userServices.getUsersInfo(email);

    }

    @RequestMapping(method = RequestMethod.POST,value = "/users")
    public User addUser(@RequestBody User user)
    {
        return userServices.addUser(user);
    }



}