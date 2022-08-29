package ro.pex.hotel.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ro.pex.hotel.model.entity.Reservation;
import ro.pex.hotel.model.entity.User;
@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {



}
