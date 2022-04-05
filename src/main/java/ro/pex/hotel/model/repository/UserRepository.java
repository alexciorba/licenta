package ro.pex.hotel.model.repository;

import java.util.Optional;

import ro.pex.hotel.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByUsername(String username);
	
	Optional<User> findByUsernameOrEmail(String username, String email);
	
	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email);
	
	@Query("FROM User WHERE email=:email")
	User findByEmail(@Param("email") String email);

}
