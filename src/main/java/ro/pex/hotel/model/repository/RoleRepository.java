package ro.pex.hotel.model.repository;

import ro.pex.hotel.model.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {
}
