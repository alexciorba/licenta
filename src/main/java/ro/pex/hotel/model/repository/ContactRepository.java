package ro.pex.hotel.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ro.pex.hotel.model.entity.Contact;
import ro.pex.hotel.model.entity.Reservation;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
