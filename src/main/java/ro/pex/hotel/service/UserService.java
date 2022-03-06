package ro.pex.hotel.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ro.pex.hotel.model.converter.UserConvertor;
import ro.pex.hotel.model.entity.UserDto;
import ro.pex.hotel.model.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserConvertor userConvertor;

    public List<UserDto> getAll() {
        return userRepository.findAll().stream().map(userConvertor::convertToDto).collect(Collectors.toList());
        //din entitate in dto

    }
}
