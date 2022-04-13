package ro.pex.hotel.service.impl;

import java.util.Collection;
import java.util.Optional;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ro.pex.hotel.model.entity.ERole;
import ro.pex.hotel.model.entity.Role;
import ro.pex.hotel.model.repository.RoleRepository;
import ro.pex.hotel.service.IRoleService;

@Service
public class RoleServiceImpl implements IRoleService<Role> {

	@Autowired
	private RoleRepository roleRepository;

	@Override
	public Collection<Role> findAll() {
		return roleRepository.findAll();
	}

	@Override
	public Optional<Role> findById(Long id) {
		return roleRepository.findById(id);
	}
	
	@Override
	public Role findByName(ERole name) {
		return roleRepository.findByName(name);
	}

	@Override
	public Role saveOrUpdate(Role role) {
		return roleRepository.saveAndFlush(role);
	}

	@Override
	public String deleteById(Long id) {
		JSONObject jsonObject = new JSONObject();
		try {
			roleRepository.deleteById(id);
			jsonObject.put("message", "Role deleted successfully");
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return jsonObject.toString();
	}

}
