package ro.pex.hotel.service;

import org.springframework.stereotype.Service;
import ro.pex.hotel.model.entity.Reservation;
import ro.pex.hotel.model.repository.ReservationRepository;

@Service
public class ReservationService {
    private  ReservationRepository reservationRepository;

    public ReservationService(ReservationRepository reservationRepository) {
        this.reservationRepository = reservationRepository;

    }

    public Reservation createReservation(Reservation reservation){
        return reservationRepository.save(reservation);
    }
}
