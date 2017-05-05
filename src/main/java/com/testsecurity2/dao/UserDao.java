package com.testsecurity2.dao;


import com.testsecurity2.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface UserDao extends CrudRepository<User, Long> {

    User findByUsername(String username);
}
