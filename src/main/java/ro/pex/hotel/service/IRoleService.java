package ro.pex.hotel.service;

public interface IRoleService<T> extends IService<T> {

	T findByName(String name);
}
