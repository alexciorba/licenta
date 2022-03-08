package ro.pex.hotel.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import ro.pex.hotel.dto.UserRegistrationDto;
import ro.pex.hotel.model.entity.User;

public interface UserService extends UserDetailsService {

    User save(UserRegistrationDto registrationDto);
}
