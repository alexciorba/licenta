package ro.pex.hotel.model.converter;

import org.springframework.stereotype.Component;

import ro.pex.hotel.model.entity.UserDto;
import ro.pex.hotel.model.entity.UserEntity;

@Component
public class UserConvertor {
	
	public UserDto convertToDto(UserEntity userEntity) {
		
		UserDto userDto = null;
		if(userEntity != null) {
			userDto =new UserDto();
			userDto.setId(userEntity.getId());
			userDto.setLastName(userEntity.getLastName());
			userDto.setFirstName(userEntity.getFirstName());
			userDto.setDateOfBirth(userEntity.getDateOfBirth());
			userDto.setEmail(userEntity.getEmail());
			userDto.setPhone(userEntity.getPhone());
			userDto.setUsername(userEntity.getUsername());
			userDto.setPassword(userEntity.getPassword());
			
		}
		return userDto;
	}

}
