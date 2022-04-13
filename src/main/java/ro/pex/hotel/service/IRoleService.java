package ro.pex.hotel.service;

import ro.pex.hotel.model.entity.ERole;

public interface IRoleService<T> extends IService<T> {

	T findByName(ERole name);
}
