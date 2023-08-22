package com.company.user.user.repository;

import com.company.user.user.model.User;
import org.springframework.data.repository.CrudRepository;

public interface FormRepository extends CrudRepository<User,String> {



}
