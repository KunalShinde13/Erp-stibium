package com.example.villa.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.villa.entity.User;
import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);
}
